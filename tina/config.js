import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.TINA_PUBLIC_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
      {
        name: "home",
        label: "Home Page",
        path: "content/pages",
        match: {
          include: "home",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "object",
            name: "announcement",
            label: "Announcement Banner",
            fields: [
              {
                type: "string",
                name: "defaultText",
                label: "Default Announcement",
              },
              {
                type: "string",
                name: "promoText",
                label: "Promo Text",
              },
              {
                type: "string",
                name: "promoSubtext",
                label: "Promo Subtext",
              },
              {
                type: "datetime",
                name: "promoExpiry",
                label: "Promo Expiry Date",
              },
            ]
          },
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              {
                type: "image",
                name: "image",
                label: "Background Image",
              },
              {
                type: "string",
                name: "headline",
                label: "Headline",
              },
              {
                type: "string",
                name: "ctaText",
                label: "CTA Button Text",
              },
            ]
          },
          {
            type: "object",
            name: "services",
            label: "Services Overview",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.title };
              },
            },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "string",
                name: "url",
                label: "Link URL",
              },
              {
                type: "image",
                name: "image",
                label: "Background Image (Optional)",
              }
            ]
          },
          {
            type: "object",
            name: "introduction",
            label: "Introduction Section",
            fields: [
              {
                type: "rich-text",
                name: "content",
                label: "Content",
              }
            ]
          },
          {
            type: "object",
            name: "approach",
            label: "Our Approach Section",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.title };
              },
            },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "image",
                name: "imageUrl",
                label: "Image",
              },
              {
                type: "boolean",
                name: "flipContent",
                label: "Flip Content Layout",
              }
            ]
          },
          {
            type: "object",
            name: "faqs",
            label: "FAQs",
            list: true,
            fields: [
              {
                type: "string",
                name: "question",
                label: "Question",
              },
              {
                type: "string",
                name: "answer",
                label: "Answer",
                ui: {
                  component: "textarea"
                }
              },
            ],
          },
          {
            type: "object",
            name: "testimonials",
            label: "Testimonials",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.name };
              },
            },
            fields: [
              {
                type: "string",
                name: "name",
                label: "Client Name",
              },
              {
                type: "string",
                name: "quote",
                label: "Quote",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "number",
                name: "rating",
                label: "Rating (1-5)",
              }
            ]
          },
          {
            type: "object",
            name: "gallery",
            label: "Gallery",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.alt || "Image" };
              },
            },
            fields: [
              {
                type: "image",
                name: "image",
                label: "Image",
              },
              {
                type: "string",
                name: "alt",
                label: "Alt Text",
              }
            ]
          },
        ],
      },
      {
        name: "boarding",
        label: "Boarding Page",
        path: "content/pages",
        match: {
          include: "boarding",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              {
                type: "image",
                name: "image",
                label: "Background Image",
              },
              {
                type: "string",
                name: "headline",
                label: "Headline",
              },
            ]
          },
          {
            type: "object",
            name: "section_header",
            label: "Section Header (Intro)",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea"
                }
              }
            ]
          },
          {
            type: "object",
            name: "content_rows",
            label: "Content Rows (Image + Text)",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.title };
              },
            },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "rich-text",
                name: "content",
                label: "Content",
              },
              {
                type: "string",
                name: "listItems",
                label: "List Items (One per line)",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "image",
                name: "image",
                label: "Image",
              },
              {
                type: "boolean",
                name: "imageRight",
                label: "Image on Right?",
              }
            ]
          },
          {
            type: "object",
            name: "pricing",
            label: "Pricing Section",
            fields: [
              {
                type: "string",
                name: "standard_price",
                label: "Standard Price",
              },
              {
                type: "string",
                name: "graduate_price",
                label: "Graduate Price",
              },
              {
                type: "string",
                name: "assessment_price",
                label: "Assessment Price",
              }
            ]
          },
        ],
      },
      {
        name: "board_train",
        label: "Board & Train Page",
        path: "content/pages",
        match: {
          include: "board_train",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              {
                type: "image",
                name: "image",
                label: "Background Image",
              },
              {
                type: "string",
                name: "headline",
                label: "Headline",
              },
            ]
          },
          {
            type: "object",
            name: "intro",
            label: "Introduction Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea"
                }
              }
            ]
          },
          {
            type: "object",
            name: "content_rows",
            label: "Content Rows",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.title };
              },
            },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "rich-text",
                name: "content",
                label: "Content",
              },
              {
                type: "string",
                name: "listItems",
                label: "List Items (One per line)",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "image",
                name: "image",
                label: "Image",
              },
              {
                type: "boolean",
                name: "imageRight",
                label: "Image on Right?",
              }
            ]
          },
          {
            type: "object",
            name: "pricing",
            label: "Pricing Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
              },
              {
                type: "string",
                name: "price",
                label: "Price",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
              },
              {
                type: "string",
                name: "ctaText",
                label: "CTA Text",
              },
              {
                type: "string",
                name: "ctaLink",
                label: "CTA Link",
              }
            ]
          },
        ],
      },
      {
        name: "day_training",
        label: "Day Training Page",
        path: "content/pages",
        match: {
          include: "day_training",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              {
                type: "image",
                name: "image",
                label: "Background Image",
              },
              {
                type: "string",
                name: "headline",
                label: "Headline",
              },
            ]
          },
          {
            type: "object",
            name: "intro",
            label: "Introduction Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea"
                }
              }
            ]
          },
          {
            type: "object",
            name: "content_rows",
            label: "Content Rows",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.title };
              },
            },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "rich-text",
                name: "content",
                label: "Content",
              },
              {
                type: "string",
                name: "listItems",
                label: "List Items (One per line)",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "image",
                name: "image",
                label: "Image",
              },
              {
                type: "boolean",
                name: "imageRight",
                label: "Image on Right?",
              }
            ]
          },
          {
            type: "object",
            name: "pricing",
            label: "Pricing Section",
            fields: [
              {
                type: "object",
                name: "main",
                label: "Main Pricing",
                fields: [
                    { type: "string", name: "title", label: "Title" },
                    { type: "string", name: "price", label: "Price" },
                    { type: "string", name: "per", label: "Per (e.g. / per session)" },
                    { type: "string", name: "description", label: "Description" },
                    { type: "string", name: "ctaText", label: "CTA Text" },
                    { type: "string", name: "ctaLink", label: "CTA Link" },
                ]
              },
              {
                type: "object",
                name: "packs",
                label: "Multi-Session Packs",
                list: true,
                fields: [
                    { type: "string", name: "count", label: "Session Count" },
                    { type: "string", name: "discount", label: "Discount" },
                ]
              },
              {
                type: "object",
                name: "graduate",
                label: "Graduate Rate",
                fields: [
                    { type: "string", name: "title", label: "Title" },
                    { type: "string", name: "price", label: "Price" },
                    { type: "string", name: "per", label: "Per (e.g. / per session)" },
                ]
              }
            ]
          },
        ],
      },
    ],
  },
});
