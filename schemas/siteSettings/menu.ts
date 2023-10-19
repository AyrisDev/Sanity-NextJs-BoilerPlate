import { BiPackage } from "react-icons/bi";
import { defineField, defineType } from "sanity";
import { GrProjects } from "react-icons/gr";

const menu = defineType({
  title: "Menu",
  name: "menu",
  type: "document",
  icon: GrProjects,
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "id",
      type: "number",
    }),
    defineField({
      name: "title",
      type: "localeString",
    }),
    defineField({
      name: "url",
      type: "string",
    }),
    defineField({
      name: "type",
      type: "string",
    }),

    {
      title: 'Button Link',
      name: 'buttonLink',
      type: 'array',
      of: [
  
        {
          title: 'Button Text',
          type: 'object',
          fields: [
            {
              title: 'buttonText',
              name: 'buttonText',
              type: 'string'
            },
            {
              title: 'Button URL',
              name: 'buttonUrl',
              type: 'string'
            } 
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "title.en",
    },
  },
});

export default menu;
