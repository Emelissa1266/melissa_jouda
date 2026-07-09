/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

export interface ContactSubmitRequest {
  fullName: string;
  email: string;
  phone: string;
  service: "Marketing" | "Design" | "Web Development";
  description: string;
  budget?: string;
  deadline?: string;
}

export interface ContactSubmitResponse {
  success: boolean;
  message: string;
}
