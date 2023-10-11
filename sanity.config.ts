import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";
import {media} from 'sanity-plugin-media'
import {visionTool} from '@sanity/vision'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import {IconManager} from 'sanity-plugin-icon-manager'
import { iconPicker } from 'sanity-plugin-icon-picker';
import { youtubeInput } from 'sanity-plugin-youtube-input'
import { myStructure } from "./schemas/deskStructure";
export default defineConfig({
  name: "sanity-nextjs-site",
  title: "Sanity Next.js Site",
  projectId: "cszdze7v",
  dataset: "production",
  basePath: "/studio",
  plugins: [deskTool(), visionTool(), media(),  unsplashImageAsset(),    IconManager({}), iconPicker(), youtubeInput({ apiKey: '<your-google-api-key>' })],

  schema: { types: schemaTypes },
});
