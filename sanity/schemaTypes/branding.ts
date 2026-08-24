import { defineType, defineField } from "sanity";

export const branding = defineType({
  name: "branding",
  title: "Branding",
  type: "document",
  fields: [
    defineField({
      name: "brandName",
      title: "Brand Name",
      type: "string",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "logoUrl",
      title: "Logo Image URL",
      type: "string",
    }),
  ],
});
