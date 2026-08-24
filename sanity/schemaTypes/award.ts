import { defineType, defineField } from "sanity";

export const award = defineType({
  name: "award",
  title: "Award & Certification",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Award / Certification Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "issuer",
      title: "Issuing Organization / Authority",
      type: "string",
    }),
    defineField({
      name: "year",
      title: "Year Achieved",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Brief Description",
      type: "text",
    }),
    defineField({
      name: "imageUrl",
      title: "Badge / Certification Logo URL",
      type: "url",
    }),
  ],
});
