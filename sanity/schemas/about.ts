import { defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      readOnly: true,
      initialValue: "About Think Plateau",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { type: "string", name: "name" },
            { type: "string", name: "link" }
          ]
        }
      ],
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "object",
      fields: [
        {name: 'street', type: 'string', title: 'Street name'},
        {name: 'city', type: 'string', title: 'City'}
      ]
    }),

    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
  },
});
