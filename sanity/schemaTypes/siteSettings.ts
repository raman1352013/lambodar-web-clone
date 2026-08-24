import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Global Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "brandName",
      title: "Brand Name",
      type: "string",
      initialValue: "Lambodra Group",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      initialValue: "Enterprise Hardware, Cybersecurity & Software Solutions in West Africa",
    }),
    defineField({
      name: "logoUrl",
      title: "Logo Image URL",
      type: "url",
    }),
    defineField({
      name: "contactPhone",
      title: "Primary Contact Phone",
      type: "string",
      initialValue: "+233 24 123 4567",
    }),
    defineField({
      name: "contactEmail",
      title: "Primary Contact Email",
      type: "string",
      initialValue: "info@lambodragroup.com",
    }),
    defineField({
      name: "officeAddress",
      title: "Office Address",
      type: "string",
      initialValue: "Accra, Ghana",
    }),
    defineField({
      name: "whatsappNumber",
      title: "WhatsApp Number (for floating button)",
      type: "string",
      initialValue: "+233241234567",
    }),
    defineField({
      name: "hero",
      title: "Homepage Hero Banner",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow Tag", type: "string" }),
        defineField({ name: "title", title: "Main Headline", type: "string" }),
        defineField({ name: "description", title: "Subtitle / Description", type: "text" }),
        defineField({ name: "bannerImageUrl", title: "Desktop Banner Image URL", type: "url" }),
        defineField({ name: "mobileBannerImageUrl", title: "Mobile Banner Image URL", type: "url" }),
        defineField({ name: "ctaLabel", title: "CTA Button Label", type: "string" }),
        defineField({ name: "ctaHref", title: "CTA Button Link", type: "string" }),
      ],
    }),
  ],
});
