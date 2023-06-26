import { useEffect, useRef, useState, useCallback } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import checkRoute from "/helpers/checkRoute";
import checkOutboundLink from "/helpers/checkOutboundLink";

import CrossIcon from "/components/icons/CrossIcon";
import HamburgerIcon from "/components/icons/HamburgerIcon";
import RetinaImg from "/components/common/RetinaImg";

const menuItems = [
  {
    label: "Interfaces",
    route: "/interfaces",
  },
  {
    label: "System diagram",
    route: "/system-diagram",
  },
  {
    label: "Load management",
    route: "/load-management",
  },
  {
    label: "Deployment options",
    route: "/deployment-options",
  },
  {
    label: "Enterprise trial",
    route: "/enterprise-trial",
  },
  {
    label: "Docs →",
    route: "https://docs.andalusia.ai",
  },
  {
    label: "Contact us",
    route: "/contact",
    isButton: true,
  },
];

export default function Navbar() {
  const currRoute = useRouter().pathname;
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [menuHasBeenOpened, setMenuHasBeenOpened] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(1);

  const menuContainerRef = useRef(null);
  const menuOpenButtonRef = useRef(null);
  const menuCloseButtonRef = useRef(null);

  const openMenu = useCallback(() => {
    setMenuIsOpen(true);
    setMenuHasBeenOpened(true);
    menuCloseButtonRef.current.focus();
  }, [menuIsOpen, menuHasBeenOpened]);

  const closeMenu = useCallback(() => {
    setMenuIsOpen(false);
    setHighlightedIndex(-1);
    menuOpenButtonRef.current.focus();
  }, [menuIsOpen, highlightedIndex]);

  useEffect(() => {
    if (menuIsOpen) {
      const nodes = menuContainerRef.current.childNodes;

      if (highlightedIndex >= 0 && highlightedIndex < menuItems.length) {
        nodes[highlightedIndex].focus();
      }
    } else if (menuHasBeenOpened) {
      menuOpenButtonRef.current.focus();
    }
  }, [menuIsOpen, menuHasBeenOpened, highlightedIndex]);

  return (
    <div className="navbar">
      <nav className="navbar-nav" role="navigation">
        <Link href="/">
          <a
            className="navbar-logo"
            aria-current={checkRoute("/", currRoute)}
          >
            <RetinaImg
              className="navbar-logo-img"
              file="logo"
              alt="Andalusia, home"
            />
          </a>
        </Link>

        <button
          className="navbar-toggle u-subhead u-font-md"
          onClick={openMenu}
          aria-pressed={menuIsOpen}
          ref={menuOpenButtonRef}
          aria-haspopup="true"
          type="button"
        >
          <span className="u-visually-hidden-sm">Menu </span>
          <HamburgerIcon />
        </button>

        <button
          className={`navbar-menu-bg ${
            menuIsOpen ? "is-open" : "is-closed"
          }`}
          onClick={() => setMenuIsOpen(false)}
          tabIndex={menuIsOpen ? 0 : -1}
          onFocus={closeMenu}
          aria-label="closing menu"
        />

        <ul
          className={`navbar-menu darkglass ${
            menuIsOpen ? "is-open" : "is-closed"
          }`}
          ref={menuContainerRef}
        >
          <li className="navbar-menu-toggle">
            <button
              className="navbar-menu-toggle u-subhead u-font-md"
              onClick={() => setMenuIsOpen(false)}
              tabIndex={menuIsOpen ? 0 : -1}
              ref={menuCloseButtonRef}
              type="button"
              aria-pressed="true"
            >
              <span className="u-visually-hidden-sm">Menu </span>
              <CrossIcon />
            </button>
          </li>

          <li className="navbar-menu-item">
            <Link href="/">
              <a
                className="navbar-menu-link"
                tabIndex={menuIsOpen ? 0 : -1}
                aria-current={checkRoute("/", currRoute)}
              >
                <RetinaImg
                  className="navbar-logo-img"
                  file="logo"
                  alt="Andalusia, home"
                />
              </a>
            </Link>
          </li>

          {menuItems.map((link, i) => (
            <li key={link?.label} className="navbar-menu-item">
              <Link href={link?.route} passHref>
                <a
                  className={`navbar-menu-link${
                    link?.isButton && link?.route !== currRoute
                      ? " button"
                      : ""
                  }`}
                  aria-current={checkRoute(link?.route, currRoute)}
                  tabIndex={menuIsOpen ? 0 : -1}
                  target={
                    checkOutboundLink(link?.route) ? "_blank" : null
                  }
                  rel={
                    checkOutboundLink(link?.route)
                      ? "noopener noreferrer"
                      : null
                  }
                  onClick={() =>
                    link?.route === currRoute && setMenuIsOpen(false)
                  }
                >
                  {link?.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="u-visually-hidden"
          onClick={() => setMenuIsOpen(false)}
          tabIndex={menuIsOpen ? 0 : -1}
          onFocus={closeMenu}
          aria-label="closing menu"
        />
      </nav>
    </div>
  );
}
