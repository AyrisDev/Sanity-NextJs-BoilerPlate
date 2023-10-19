import { groq } from "next-sanity";
import client from "./sanity.client";
import { osLocale } from "os-locale";


export async function getMenu() {
    const localee = (await osLocale()).slice(0, 2);
  
    return client.fetch(
      groq`*[_type == "menu"] | order(id asc){
        _id,
        id,
        name,
        "title" : title.${localee}, 
  url,
  type,
  "buttonLink" : buttonLink[].buttonText,
  "buttonUrl" : buttonLink[].buttonUrl,
  "buttonLinks":buttonLink,
      }`,
     
    );
  }

  export async function getSettings() {
    const localee = (await osLocale()).slice(0, 2);
  
    return client.fetch(
      groq`*[_type == "siteSettings"]{
        _id,  
       name,
       "title": title,
       description,
       "logo": logo.asset->url
     }`,
     
    );
  }

  export async function getSlider() {
    const localee = (await osLocale()).slice(0, 2);
  
    return client.fetch(
      groq`*[_type == "slider"]{
       _id,  
       name,
       "title": title.tr, 
       "logo": sliderImage.asset->url,
       "descriptionTitle": descriptionTitle.tr,
       "description":description.tr,
       "banner": sliderBanner.asset->url
     }`,
     
    );
  }
