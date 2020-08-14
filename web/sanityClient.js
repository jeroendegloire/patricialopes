const sanityClient = require("@sanity/client");

export const productionClient = sanityClient({
  projectId: "l2xxtj60",
  dataset: "production",
  useCdn: true,
});

export const previewClient = sanityClient({
  projectId: "l2xxtj60",
  dataset: "production",
  token:
    "skzHVLXK1QmALsZQZQH2XoYRJDPIEBeNsw1CrHHTiBvpOeXN1Gw0PzOUFSztqbD4p8XgP42wxLXEBl77eQI1sawmWzOlpKdtxGI1LvH4u81FmYywkWrzf3U79OK37h5V4LW4Cm1Lizbu0mz25X7KTwf35CnVfoUIeObS19mE5JmyeHY2KBaQ",
  useCdn: false,
  withCredentials: true,
});
