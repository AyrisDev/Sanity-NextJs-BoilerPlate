import { groq } from "next-sanity";
import client from "./sanity.client";
import { osLocale } from "os-locale";


export async function getPackages() {
    const localee = (await osLocale()).slice(0, 2);

    return client.fetch(
      groq`*[_type == "packages"]{
        _id,  
      name,
        "title": title.${localee},
          id,
        "price": price.${localee},
          "time": time.${localee},
        "server": server.server->title.${localee},  
        features[]->{"title": title.${localee}, "icon": descIcon.asset->url}
     }`
    );
  }


  export async function getPackagesCategory() {
    const localee = (await osLocale()).slice(0, 2);
    
    return client.fetch(
      groq`*[_type == "packagesCategory"]{
        _id,  
        name,
        "title": title.${localee},
        id,   
        coklu    
     }`
    );
  }