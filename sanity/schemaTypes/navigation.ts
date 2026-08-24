import { defineType, defineField } from "sanity";

export const navigation = defineType({
  name: "navigation",
  title: "Navigation & Header",
  type: "document",
  fields: [
    defineField({
      name: "topNoticeText",
      title: "Top Notification Bar Text",
      type: "string",
    }),
    defineField({
      name: "mainLinks",
      title: "Main Navigation Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "href", title: "Href / Route", type: "string" }),
          ],
        },
      ],
    }),
  ],
});
