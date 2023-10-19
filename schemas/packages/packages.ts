import { BiPackage } from "react-icons/bi";
import { defineField, defineType } from "sanity";
import { GrProjects } from "react-icons/gr";

const packages = defineType({
  title: "Packages",
  name: "packages",
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
        name: 'server',
        type: 'object',        
        fields: [
          {
            title: 'Server',
            name: 'server',
            type: 'reference',
            to: [{type: 'packagesCategory'}]
          }
        ]
      }),
 

      defineField({
        title: 'Price',
        name: 'price',
        type: 'localeString'
      }),
      defineField({
        name: "time",
        type: "localeString",
      }),

      defineField({
        name: 'features',       
        type: 'array',
        of: [{ type: 'reference', to: { type: 'packagesDesc' } }],
     
      }),



  ],
  preview: {
    select: {
      title: "name",
      subtitle: "title.en",
    },
  },
});

export default packages;
