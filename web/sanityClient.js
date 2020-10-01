import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "@sanity/client";

export const previewClient = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: false,
  withCredentials: true,
});

export const productionClient = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: true,
});

console.log(process.env.NODE_ENV);
console.log(process.env.ENABLE_GATSBY_REFRESH_ENDPOINT);
console.log(process.env.SANITY_OVERLAY_DRAFTS);
console.log(process.env.SANITY_WATCH_MODE);

const client =
  process.env.NODE_ENV == "development" ? previewClient : productionClient;

console.log(client);

const builder = imageUrlBuilder(client);

export default builder;
