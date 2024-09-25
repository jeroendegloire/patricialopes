import PropTypes from "prop-types";
import React from "react";
//import Footer from "./footer";

import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div className={"flex flex-col min-h-screen"}>
      <Header />
      <main id={'main-content'} className="flex-1 flex fade-in flex-col ">{children}</main>
       <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
