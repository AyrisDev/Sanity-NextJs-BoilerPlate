import { BiPackage } from "react-icons/bi";
import { defineField, defineType } from "sanity";
import { GrProjects } from "react-icons/gr";

const slider = defineType({
  title: "Slider",
  name: "slider",
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

    {
        name: "sliderImage",
        title: "slider Image",
        type: "image",
        description: "Upload a Slider Image",
        options: { hotspot: true },
        fields: [
          {
            name: "alt",
            title: "Alt",
            type: "string",
          },
        ],
      },

      {
        name: "sliderBanner",
        title: "Slider Banner",
        type: "image",
        description: "Upload a Slider Banner",
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
      name: "descriptionTitle",
      type: "localeString",
    }),
    defineField({
        name: "description",
        type: "localeString",
      
      }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "title.en",
    },
  },
});

export default slider;
