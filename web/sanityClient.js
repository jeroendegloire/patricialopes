const sanityClient = require("@sanity/client");
const client = sanityClient({
  projectId: "l2xxtj60",
  dataset: "production",
  //token: "sanity-auth-token", // or leave blank to be anonymous user
  useCdn: true, // `false` if you want to ensure fresh data
});
