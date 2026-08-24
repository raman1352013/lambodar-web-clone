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
