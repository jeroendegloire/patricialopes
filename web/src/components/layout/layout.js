import PropTypes from "prop-types";
import React from "react";
//import Footer from "./footer";

import Header from "./header";

export const query = graphql`
  query PageTemplateQueryClass($id: String!) {
    route: sanityPage(id: { eq: $id }) {
      slug {
        current
      }
    }
  }
`;

function Layout({ children }) {
  return (
    <div className={"flex flex-col min-h-screen " + {}}>
      <Header />
      <main className="flex-1 flex fade-in ">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
