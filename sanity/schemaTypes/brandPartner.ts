import { defineType, defineField } from "sanity";

export const brandPartner = defineType({
  name: "brandPartner",
  title: "Brand Partner",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Brand / OEM Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
    }),
    defineField({
      name: "tier",
      title: "Partnership Tier (e.g. Gold Certified Partner)",
      type: "string",
    }),
    defineField({
      name: "category",
      title: "Industry Category (e.g. Cybersecurity, Cloud)",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "logoUrl",
      title: "Brand Logo Image URL",
      type: "url",
    }),
    defineField({
      name: "targetServiceSlug",
      title: "Linked Service Slug",
      type: "string",
    }),
  ],
});
