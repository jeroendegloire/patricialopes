const path = require(`path`);

exports.createPages = async ({ graphql, getNode, actions }) => {
  const { createPage } = actions;
  const queryResult = await graphql(`
    query {
      cinematographies: allSanityCinematography(
        filter: { slug: { current: { ne: null } } }
      ) {
        nodes {
          id
          slug {
            current
          }
        }
      }
      pages: allSanityPage(filter: { slug: { current: { ne: null } } }) {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);
  nodePages = queryResult.data.pages.nodes;
  nodePages.forEach((node) => {
    createPage({
      path: node.slug.current,
      component: path.resolve(`./src/templates/pages.js`),
      context: { id: node.id },
    });
  });

  nodeCinematographies = queryResult.data.cinematographies.nodes;
  nodeCinematographies.forEach((node) => {
    createPage({
      path: `cinematography/${node.slug.current}`,
      component: path.resolve(`./src/templates/cinemato.js`),
      context: { id: node.id },
    });
  });
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /isotope-layout/,
            use: loaders.null(),
          },
        ],
      },
    });
  }

  if (stage === "development") {
    actions.send("Hello");
    app.get("/", (req, res) => {
      return res.send("Hello");
    });
  }
};
