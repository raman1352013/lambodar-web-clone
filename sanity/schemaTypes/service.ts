import { defineType, defineField } from "sanity";

export const service = defineType({
  name: "service",
  title: "Service / Solution",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Service Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Network & Security Solution", value: "Network & Security Solution" },
          { title: "Cloud & Web Hosting", value: "Cloud & Web Hosting" },
          { title: "ERP & Software Solution", value: "ERP & Software Solution" },
          { title: "Telecommunication Solution", value: "Telecommunication Solution" },
          { title: "Vehicle Tracking Solution", value: "Vehicle Tracking Solution" },
          { title: "IT Hardware & Server", value: "IT Hardware & Server" },
        ],
      },
    }),
    defineField({
      name: "shortDescription",
      title: "Short Summary",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "fullDescription",
      title: "Full Detailed Overview",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "iconUrl",
      title: "Icon Image URL",
      type: "url",
    }),
    defineField({
      name: "imageUrl",
      title: "Featured Banner Image URL",
      type: "url",
    }),
    defineField({
      name: "features",
      title: "Key Features List",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "benefits",
      title: "Key Benefits List",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "isFeatured",
      title: "Featured on Homepage",
      type: "boolean",
      initialValue: true,
    }),
  ],
});
