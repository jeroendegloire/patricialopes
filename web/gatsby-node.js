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
  //dynamic page all page
  const projectsPages = getProjectsResult.data.allSanityPage.nodes || [];
  projectsPages.forEach((node) => {
    const path = `${node.slug.current}`;
    createPage({
      path,
      component: require.resolve("./src/templates/pages.js"),
      context: { id: node.id },
    });
  });
};

// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions, reporter }) => {
  await createProjectPages(graphql, actions, reporter);
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
