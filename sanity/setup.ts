import { groq } from "next-sanity";
import client from "./sanity.client";
import { osLocale } from "os-locale";

export async function getSetup() {
  const localee = (await osLocale()).slice(0, 2);

  return client.fetch(groq`*[_type=='setup'] {
    'setupCategory': setupCategory.setupCategory->title.${localee},
      'title': title.${localee},
      'slug':slug.current,
      content,
      'downloadLink': downloadLink.asset->url
  }`);
}

export async function getSetupCategory() {
  const localee = (await osLocale()).slice(0, 2);

  return client.fetch(groq`*[_type=='setupCategory'] {
    'title': title.${localee},
      'image': image.asset->url,
      'description': description.${localee},
      'slug':slug.current
  }`);
}

export async function getSetupByCategory(slug: string) {
  const localee = (await osLocale()).slice(0, 2);
  return client.fetch(
    groq`*[_type == "setup" && setupCategory.setupCategory->slug.current == $slug]{
      'setupCategorySlug': setupCategory.setupCategory->slug.current,
      'title': title.${localee},
      'slug':slug.current,
      content,
      'downloadLink': downloadLink.asset->url,
      'image': image.asset->url
    }`,
    { slug }
  );
}

export async function getSetupSingle(slug: string) {
  const localee = (await osLocale()).slice(0, 2);
  return client.fetch(
    groq`*[_type == "setup" && slug.current == $slug][0]{
      'setupCategorySlug': setupCategory.setupCategory->slug.current,
      'title': title.${localee},
      'slug':slug.current,
      content,
      'downloadLink': downloadLink.asset->url,
      'image': image.asset->url
    }`,
    { slug }
  );
}
