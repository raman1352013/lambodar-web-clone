import { defineType, defineField } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Client Testimonial / Feedback",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Client Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "serviceUsed",
      title: "Service / Solution Used",
      type: "string",
      description: "e.g. GPS Tracking Solution, Sophos Security Deployment, Fugen ERP",
      initialValue: "GPS Tracking Solution",
    }),
    defineField({
      name: "role",
      title: "Role / Company",
      type: "string",
      description: "e.g. IT Manager, Logistics Director",
    }),
    defineField({
      name: "text",
      title: "Feedback Quote",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "imageUrl",
      title: "Avatar / Client Image URL",
      type: "url",
    }),
    defineField({
      name: "rating",
      title: "Star Rating (1 - 5)",
      type: "number",
      initialValue: 5,
      validation: (Rule) => Rule.min(1).max(5),
    }),
  ],
});
