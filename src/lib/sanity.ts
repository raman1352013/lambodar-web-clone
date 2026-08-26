import { createClient } from "@sanity/client";

const rawProjectId = import.meta.env.VITE_SANITY_PROJECT_ID || import.meta.env.SANITY_STUDIO_PROJECT_ID;
const projectId = (rawProjectId && rawProjectId.trim() !== "") ? rawProjectId.trim() : "93fxasct";

const rawDataset = import.meta.env.VITE_SANITY_DATASET || import.meta.env.SANITY_STUDIO_DATASET;
const dataset = (rawDataset && rawDataset.trim() !== "") ? rawDataset.trim() : "production";

const rawApiVersion = import.meta.env.VITE_SANITY_API_VERSION;
const apiVersion = (rawApiVersion && rawApiVersion.trim() !== "" && /^\d{4}-\d{2}-\d{2}$/.test(rawApiVersion.trim()))
  ? rawApiVersion.trim()
  : "2025-05-08";

export const isSanityConfigured = Boolean(projectId && projectId !== "placeholder");

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
});

const rawWriteToken =
  import.meta.env.VITE_SANITY_WRITE_TOKEN ||
  import.meta.env.VITE_SANITY_API_TOKEN ||
  import.meta.env.SANITY_API_WRITE_TOKEN;

export const sanityWriteClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: rawWriteToken,
});

export interface ContactSubmissionPayload {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  serviceCategory?: string;
  message: string;
}

export async function submitContactToSanity(payload: ContactSubmissionPayload): Promise<boolean> {
  const token = rawWriteToken;
  if (!token) {
    console.info("Sanity Write Token (VITE_SANITY_WRITE_TOKEN) is not configured in .env. Form saved to LocalStorage fallback.");
    return false;
  }

  try {
    const doc = {
      _type: "contactSubmission",
      name: payload.name,
      email: payload.email,
      phone: payload.phone || "",
      subject: payload.subject || "",
      serviceCategory: payload.serviceCategory || payload.subject || "General Inquiry",
      message: payload.message,
      submittedAt: new Date().toISOString(),
    };

    await sanityWriteClient.create(doc);
    console.log("Successfully submitted contact form to Sanity:", doc);
    return true;
  } catch (error) {
    console.error("Error submitting contact form to Sanity:", error);
    return false;
  }
}

