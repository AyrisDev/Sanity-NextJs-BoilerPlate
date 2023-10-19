import { BiPackage } from "react-icons/bi";
import { defineField, defineType } from "sanity";
import { GrProjects } from "react-icons/gr";

const setupCategory = defineType({
  title: "setupCategory",
  name: "setupCategory",
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
        name: "description",
        description: "Description",
        type: "localeString",
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



  ],
  preview: {
    select: {
      title: "name",
      subtitle: "title.en",
    },
  },
});

export default setupCategory;
