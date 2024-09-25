import React, { useState } from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Logo from "./logo";
import { FaArrowDown, FaArrowUp, FaTimes } from "react-icons/fa";
import onClickOutside from "react-onclickoutside";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Handle click outside of the menu
  Header.handleClickOutside = () => {
    toggleExpansion(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleKeyDown = (event, index) => {
    // Handle Enter and Escape key navigation for dropdown
    if (event.key === "Enter") {
      toggleDropdown(index);
    }
    if (event.key === "Escape") {
      setOpenDropdown(null);
    }
  };

  return (
    <StaticQuery
      query={graphql`
        query NavigationQuery {
          sanityNavigationMenu(title: { eq: "mainMenu" }) {
            items {
              link
              name
              items {
                link
                name
              }
            }
          }
        }
      `}
      render={(data) => {
        const { items } = data.sanityNavigationMenu;

        return (
          <header className="flex flex-wrap justify-between p-8 mx-auto w-full">
            <Logo />

            {/* Mobile Menu Toggle */}
            <button
              className={`block lg:hidden ${isExpanded ? 'open' : 'closed'}`}
              onClick={() => toggleExpansion(!isExpanded)}
              aria-expanded={isExpanded}
              aria-label="Toggle Menu"
            >
              <svg
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                className={`${isExpanded ? 'hidden' : 'block'} w-4 h-4 fill-current`}
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
              <FaTimes
                size="20"
                className={`${isExpanded ? 'block' : 'hidden'}`}
              />
            </button>

            {/* Navigation Menu */}
            <nav
              id="nav"
              className={`${
                isExpanded ? 'block' : 'hidden'
              } lg:block self-end font-medium uppercase text-sm py-8 lg:py-0 w-full text-center lg:w-auto main-menu`}
            >
              <ul className="lg:flex">
                {items.map((item, i) => (
                  <li
                    key={i}
                    className="flex flex-col relative group"
                    // Handle hover to open dropdown
                    onMouseEnter={() => setOpenDropdown(i)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <div className="block lg:flex lg:items-center relative">
                      {/* Main Navigation Link */}
                      <Link
                        className="block lg:mt-0 lg:ml-8 py-2 text-center no-underline relative tracking-wider"
                        to={item.link}
                        activeClassName="is-active"
                        onClick={() => toggleExpansion(false)}
                        aria-haspopup={item.items.length > 0 ? 'true' : 'false'}
                        aria-expanded={openDropdown === i ? 'true' : 'false'}
                        onFocus={() => setOpenDropdown(i)} // Opens dropdown on focus
                        onKeyDown={(event) => handleKeyDown(event, i)} // Handle keyboard navigation
                      >
                        {item.name}
                      </Link>

                      {/* Dropdown Toggle Icon */}
                      {item.items.length > 0 && (
                        <div
                          className="absolute right-0 top-0 z-99 py-2 ml-2 lg:relative cursor-pointer"
                          onClick={() => toggleDropdown(i)}
                          aria-label={`Toggle ${item.name} Dropdown`}
                        >
                          {openDropdown === i ? <FaArrowUp /> : <FaArrowDown />}
                        </div>
                      )}
                    </div>

                    {/* Dropdown Menu */}
                    {item.items.length > 0 && openDropdown === i && (
                      <ul
                        className="lg:absolute top-full z-20 bg-white flex flex-col min-w-[200px] right-0 top-[100%]"
                        role="menu"
                        onFocus={() => setOpenDropdown(i)}
                      >
                        {item.items.map((childItem, j) => (
                          <li key={j} className="relative" role="menuitem">
                            <Link
                              to={childItem.link}
                              activeClassName="is-active"
                              className="text-xs block py-2"
                            >
                              {childItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </header>
        );
      }}
    />
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Header.handleClickOutside,
};

export default onClickOutside(Header, clickOutsideConfig);
