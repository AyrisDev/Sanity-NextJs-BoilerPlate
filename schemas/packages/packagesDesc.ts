import { BiPackage } from "react-icons/bi";
import { defineField, defineType } from "sanity";
import { GrProjects } from "react-icons/gr";

const packagesDesc = defineType({
  title: "PackagesDesc",
  name: "packagesDesc",
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
        name: "descIcon",
        title: "Icon",
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

});

export default packagesDesc;
