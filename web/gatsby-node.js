const createProjectPages = async (graphql, actions, reporter) => {
  const { createPage } = actions;
  const getProjectsResult = await graphql(`
    {
      allSanityCinematography {
        nodes {
          id
          slug {
            current
          }
        }
      }
      allSanityPage {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);
  if (getProjectsResult.errors) {
    throw getProjectsResult.errors;
  }
  //cinematography page
  const projectsCinematography =
    getProjectsResult.data.allSanityCinematography.nodes || [];
  projectsCinematography.forEach((node) => {
    const path = `${node.slug.current}`;
    createPage({
      path,
      component: require.resolve("./src/templates/cinamato.js"),
      context: { id: node.id },
    });
  });
  // //dynamic page all page
  // const projectsPages = getProjectsResult.data.allSanityPage.nodes || [];
  // projectsPages.forEach((node) => {
  //   const path = `${node.slug.current}`;
  //   createPage({
  //     path,
  //     component: require.resolve("./src/templates/pages.js"),
  //     context: { id: node?.id },
  //   });
  // });
};

const path = require(`path`);

exports.createPages = async ({ graphql, getNode, actions }) => {
  const { createPage } = actions;
  const queryResult = await graphql(`
    query {
      allSanityPage(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);
  nodes = queryResult.data.allSanityPage.edges;
  nodes.forEach(({ node }) => {
    createPage({
      path: node.slug.current,
      component: path.resolve(`./src/templates/pages.js`),
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
};
