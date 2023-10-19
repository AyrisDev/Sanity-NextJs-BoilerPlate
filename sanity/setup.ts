import { groq } from "next-sanity";
import client from "./sanity.client";
import { osLocale } from "os-locale";


export async function getSetup() {
    const localee = (await osLocale()).slice(0, 2);

    return client.fetch(
      groq`*[_type == "setup"]{
        "description":description.${localee},
          id,
          "title":title.${localee},    
          "downloadLink":downloadLink.asset->url,
          _id,
         "setupCategory": setupCategory.setupCategory->title.${localee},  
      }`
    );
  }


  export async function getSetupCategory() {
    const localee = (await osLocale()).slice(0, 2);
    
    return client.fetch(
      groq`*[_type == "setupCategory"]{
        "description":description..${localee},
          id,
          "title":title.${localee},    
          _id,
          "setupImage": image.asset->url, 
      }`
    );
  }