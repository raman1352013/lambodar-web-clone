import { defineType, defineField } from "sanity";

export const product = defineType({
  name: "product",
  title: "Hardware & Software Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Product Name",
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
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
    }),
    defineField({
      name: "fullDescription",
      title: "Full Specs & Description",
      type: "text",
    }),
    defineField({
      name: "imageUrl",
      title: "Product Image URL",
      type: "url",
    }),
    defineField({
      name: "specifications",
      title: "Technical Specifications",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "key", title: "Spec Name (e.g. Storage, Throughput)", type: "string" }),
            defineField({ name: "value", title: "Spec Value", type: "string" }),
          ],
        },
      ],
    }),
  ],
});
