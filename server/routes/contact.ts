import { RequestHandler } from "express";
import { ContactSubmitRequest, ContactSubmitResponse } from "@shared/api";
import fs from "fs/promises";
import path from "path";

// A set to store recent submissions to prevent duplicate submissions within a short window
const recentSubmissions = new Set<string>();

export const handleContact: RequestHandler = async (req, res) => {
  try {
    const { fullName, email, phone, service, description, budget, deadline } = req.body as ContactSubmitRequest;

    // 1. Basic validation
    if (!fullName || !fullName.trim()) {
      res.status(400).json({ success: false, message: "Full Name is required" });
      return;
    }
    if (!email || !email.trim()) {
      res.status(400).json({ success: false, message: "Email Address is required" });
      return;
    }
    if (!phone || !phone.trim()) {
      res.status(400).json({ success: false, message: "Phone Number is required" });
      return;
    }
    if (!service || !["Marketing", "Design", "Web Development"].includes(service)) {
      res.status(400).json({ success: false, message: "A valid Service Needed is required" });
      return;
    }
    if (!description || !description.trim()) {
      res.status(400).json({ success: false, message: "Project Description is required" });
      return;
    }

    // 2. Format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({ success: false, message: "Please enter a valid email address" });
      return;
    }

    const phoneRegex = /^\+?[0-9\s\-().]{7,20}$/;
    if (!phoneRegex.test(phone)) {
      res.status(400).json({ success: false, message: "Please enter a valid phone number (e.g. +1 234 567 890)" });
      return;
    }

    // 3. Duplicate submission prevention (simple memory hash of name, email, and description)
    const submissionKey = `${fullName.trim().toLowerCase()}_${email.trim().toLowerCase()}_${description.trim().toLowerCase()}`;
    if (recentSubmissions.has(submissionKey)) {
      res.status(400).json({
        success: false,
        message: "You have already submitted this project inquiry recently."
      });
      return;
    }

    // Store key temporarily (e.g. for 5 minutes) to prevent accidental double-submits
    recentSubmissions.add(submissionKey);
    setTimeout(() => {
      recentSubmissions.delete(submissionKey);
    }, 5 * 60 * 1000);

    const submissionData = {
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      service,
      description: description.trim(),
      budget: budget ? budget.trim() : "",
      deadline: deadline ? deadline.trim() : "",
      status: "New",
      timestamp: new Date().toISOString()
    };

    // 4. Integrations
    const scriptUrl = process.env.GOOGLE_SHEETS_SCRIPT_URL;

    if (scriptUrl) {
      console.log(`Forwarding submission to Google Sheets Apps Script URL: ${scriptUrl}`);
      try {
        const response = await fetch(scriptUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submissionData),
        });

        if (!response.ok) {
          throw new Error(`Google Apps Script responded with status ${response.status}`);
        }

        const responseText = await response.text();
        console.log("Google Sheet App Script Response:", responseText);

        res.status(200).json({
          success: true,
          message: "Thank you! Your project request has been successfully submitted and stored."
        });
        return;
      } catch (sheetsError: any) {
        console.error("Error writing to Google Sheets. Falling back to local storage:", sheetsError);
        // Fall back to local file storage if the sheet API request fails
        await saveLocally(submissionData);
        res.status(200).json({
          success: true,
          message: "Saved (offline fallback). Submission received, but there was a connectivity issue with Google Sheets."
        });
        return;
      }
    } else {
      // If no Google Sheet script URL is set, we save locally to submissions.json
      console.log("GOOGLE_SHEETS_SCRIPT_URL is not set. Saving submission locally...");
      await saveLocally(submissionData);
      res.status(200).json({
        success: true,
        message: "Submission saved locally! (Note: Set GOOGLE_SHEETS_SCRIPT_URL in .env to sync with Google Sheets)"
      });
      return;
    }
  } catch (error: any) {
    console.error("Contact handler error:", error);
    res.status(500).json({
      success: false,
      message: "An internal server error occurred while processing your request."
    });
  }
};

async function saveLocally(data: any) {
  const filePath = path.join(process.cwd(), "submissions.json");
  let submissions: any[] = [];
  try {
    const fileContent = await fs.readFile(filePath, "utf-8");
    submissions = JSON.parse(fileContent);
  } catch (err) {
    // Start with empty array if file does not exist or has invalid JSON
  }
  submissions.push(data);
  await fs.writeFile(filePath, JSON.stringify(submissions, null, 2), "utf-8");
  console.log(`Saved submission to ${filePath}`);
}
