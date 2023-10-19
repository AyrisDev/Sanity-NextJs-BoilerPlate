// schemas/siteSettings.ts
export default {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
     {
        name: "name",
        type: "string",
      },
      {
        name: 'title',
        title: 'Site Title',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Site Description',
        type: 'localeString'
      },
      {
        name: "logo",
        title: "Site Logo",
        type: "image",
        description: "Upload a profile picture",
        options: { hotspot: true },
        fields: [
          {
            name: "alt",
            title: "Alt",
            type: "string",
          },
        ],
      }
    ]
  }