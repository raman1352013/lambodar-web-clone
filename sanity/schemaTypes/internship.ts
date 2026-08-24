import { defineType, defineField } from "sanity";

export const internship = defineType({
  name: "internship",
  title: "Career & Internship Opening",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Position Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "department",
      title: "Department",
      type: "string",
      initialValue: "Technology",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      initialValue: "Accra, Ghana",
    }),
    defineField({
      name: "type",
      title: "Employment Type (e.g. Full-Time, Internship)",
      type: "string",
      initialValue: "Full-Time",
    }),
    defineField({
      name: "experience",
      title: "Experience Required",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Role Overview",
      type: "text",
    }),
    defineField({
      name: "requirements",
      title: "Requirements & Qualifications List",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
