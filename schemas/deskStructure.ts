// ./deskStructure.js
import { FcSettings,FcAddDatabase,FcLock } from "react-icons/fc";


export const structure = (S) =>
S.list()
.title('ForzaIPTV')
.items([
    
  S.listItem()
  .title("Site Settings")
  .icon(FcLock)
  .child(
    S.list()
    .title("Settings")
    .items([
      S.documentListItem()
      .id('siteSettings')
      .schemaType('siteSettings'),       
...S.documentTypeListItems()
.filter(listItem => ['menu', 'slider'].includes(listItem.getId()))
  ])),

  S.divider(),

  S.listItem()
  .title("Setups")
  .icon(FcSettings)
  .child(
    S.list()
    .title("Setup Settings")
    .items([
         
...S.documentTypeListItems()
.filter(listItem =>   ['setupCategory', 'setup'].includes(listItem.getId()))
  ])),
   S.divider(),
   S.listItem()
   .title("Packages")
   .icon(FcAddDatabase)
   .child(
     S.list()
     .title("Packages Menu")
     .items([
          
 ...S.documentTypeListItems()
 .filter(listItem =>   ['packages', 'packagesDesc', 'packagesCategory'].includes(listItem.getId()))
   ])),
   S.divider(),

])


