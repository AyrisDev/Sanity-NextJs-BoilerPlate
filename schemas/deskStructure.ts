// ./deskStructure.js

export const myStructure = (S) =>
S.list()
.title('Base')
.items([
  S.listItem()
    .title('Filtered Posts')
    .child(/* Dynamic lists */ ),
  S.listItem()
    .title('All Posts')
    .child(
      /* Create a list of all posts */
      S.documentList()
        .title('All Posts')
        .filter('_type == "post"')
    ),
  S.divider(),
  ...S.documentTypeListItems().filter(listItem => !['post', 'siteSettings', 'navigation', 'colors'].includes(listItem.getId())),
  S.divider(),
  S.listItem()
    .title('Settings')
    .child()
])

