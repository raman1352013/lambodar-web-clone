import { defineType, defineField } from "sanity";

export const milestone = defineType({
  name: "milestone",
  title: "Journey Milestone",
  type: "document",
  fields: [
    defineField({
      name: "year",
      title: "Year (e.g. 2012, 2018)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Milestone Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle / Tagline",
      type: "string",
    }),
    defineField({
      name: "location",
      title: "Location / Market",
      type: "string",
      initialValue: "Accra, Ghana",
    }),
    defineField({
      name: "order",
      title: "Sort Order Index",
      type: "number",
      initialValue: 0,
    }),
  ],
});
