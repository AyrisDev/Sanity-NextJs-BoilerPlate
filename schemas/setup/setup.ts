import { BiPackage } from "react-icons/bi";
import { defineField, defineType } from "sanity";
import { GrProjects } from "react-icons/gr";

const setup = defineType({
  title: "Setup",
  name: "setup",
  type: "document",
  icon: GrProjects,
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
        name: "title",
        type: "localeString",
      }),
    defineField({
      name: "id",
      type: "number",
    }),

    defineField({
        name: 'setupCategory',
        type: 'object',
        
        fields: [
          {
            title: 'setupCategory',
            name: 'setupCategory',
            type: 'reference',
            to: [{type: 'setupCategory'}]
          }
        ]
      }),

      {
        name: "image",
        title: "Image",
        type: "image",
        description: "Upload a desc Icon",
        options: { hotspot: true },
        fields: [
          {
            name: "alt",
            title: "Alt",
            type: "string",
          },
        ],
      },

      defineField({
        name: "description",
        description: "Description",
        type: "localeString",
      }),

      defineField({
        name: "downloadLink",
        description: "downloadLink",
        type: "file",
      }),
 





  ],
  preview: {
    select: {
      title: "name",
      subtitle: "id",
    },
  },
});

export default setup;
