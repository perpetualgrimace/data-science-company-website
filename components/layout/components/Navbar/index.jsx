import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import checkRoute from "/helpers/checkRoute";
import RetinaImg from "/components/common/RetinaImg";

const menuItems = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Deployment options",
    route: "/deployment-options",
  },
  {
    label: "Interfaces",
    route: "/interfaces",
  },
  {
    label: "Load management",
    route: "/load-management",
  },
  {
    label: "System diagram",
    route: "/system-diagram",
  },
  {
    label: "Contact us",
    route: "/contact",
    isButton: true,
  },
];

export default function Navbar() {
  const currRoute = useRouter().pathname;
  const [isOpen, setIsOpen] = useState(false);

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
          onClick={() => setIsOpen(true)}
        >
          Menu ≡
        </button>

        <div
          className={`navbar-menu-bg ${isOpen ? "is-open" : "is-closed"}`}
          onClick={() => setIsOpen(false)}
        />

        <ul
          className={`navbar-menu darkglass ${
            isOpen ? "is-open" : "is-closed"
          }`}
        >
          <li className="navbar-menu-toggle">
            <button
              className="navbar-menu-toggle u-subhead u-font-md"
              onClick={() => setIsOpen(false)}
            >
              Menu ❌
            </button>
          </li>
          {menuItems.map((link) => (
            <li className="navbar-menu-item">
              <Link href={link?.route} passHref>
                <a
                  className={`navbar-menu-link${
                    link?.isButton && link?.route !== currRoute
                      ? " button"
                      : ""
                  }`}
                  aria-current={checkRoute(link?.route, currRoute)}
                >
                  {link?.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
