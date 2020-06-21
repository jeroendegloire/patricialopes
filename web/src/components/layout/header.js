import React, { useState } from "react";
import { Link, StaticQuery } from "gatsby";
import Logo from "./logo";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  return (
    <StaticQuery
      query={graphql`
        query NavigationQuery {
          sanityNavigationMenu(title: { eq: "mainMenu" }) {
            items {
              link
              name
            }
          }
        }
      `}
      render={(data) => {
        const { items: items } = data.sanityNavigationMenu;
        return (
          <header className="flex flex-wrap justify-between p-4 md:p-8 mx-auto w-full">
            <Logo />

            <nav
              className={`${
                isExpanded ? `block` : `hidden`
              } md:block self-end font-medium uppercase text-sm -mb-2 py-8 md:py-0`}
            >
              <ul>
                {items.map((item) => (
                  <li className="block md:inline-block">
                    <Link
                      className="inline-block pb-1 mt-4 md:mt-0 md:ml-8 text-center no-underline relative tracking-wider"
                      key={item.name}
                      to={item.link}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <button
              className="block md:hidden absolute top-3 right-2"
              onClick={() => toggleExpansion(!isExpanded)}
            >
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </header>
        );
      }}
    />
  );
}

export default Header;