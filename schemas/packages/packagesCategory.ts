import { BiPackage } from "react-icons/bi";
import { defineField, defineType } from "sanity";
import { GrProjects } from "react-icons/gr";

const packagesCategory = defineType({
  title: "PackagesCategory",
  name: "packagesCategory",
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
        title: 'Çoklu Paket?',
        name: 'coklu',
        type: 'boolean'
      }),



  ],
  preview: {
    select: {
      title: "name",
      subtitle: "title.en",
    },
  },
});

export default packagesCategory;
