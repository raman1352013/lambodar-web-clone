import { defineType, defineField } from "sanity";

export const contactSubmission = defineType({
  name: "contactSubmission",
  title: "Contact Form Submission",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Sender Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
    }),
    defineField({
      name: "serviceCategory",
      title: "Interested Solution",
      type: "string",
    }),
    defineField({
      name: "message",
      title: "Message / Requirements",
      type: "text",
    }),
    defineField({
      name: "submittedAt",
      title: "Submission Date & Time",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
});
