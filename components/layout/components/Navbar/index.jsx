import Link from "next/link";
import { useRouter } from "next/router";

import { pathPrefix } from "/environment.js";
import checkRoute from "/helpers/checkRoute";

import NavbarLink from "./NavbarLink";
import Navmenu from "./Navmenu";
import NavmenuLink from "./NavmenuLink";

export default function Navbar() {
  const currRoute = useRouter().pathname;

  return (
    <div className="navbar">
      <nav className="navbar-nav wrapper" role="navigation">
        <Link href="/">
          <a
            className="navbar-logo"
            aria-current={checkRoute("/", currRoute)}
          >
            <img
              src={`/${pathPrefix}/logo-horizontal.png`}
              srcSet={`
                /${pathPrefix}/logo-horizontal.png 1x,
                /${pathPrefix}/logo-horizontal@2x.png 2x`}
              alt="Mu, home"
              draggable="false"
            />
          </a>
        </Link>

        <ul className="navbar-list">
          <NavbarLink label="Manage data" href="/manage">
            <Navmenu>
              <NavmenuLink href="/manage/jupyterhub">
                Jupyterhub
              </NavmenuLink>
              <NavmenuLink href="/manage/data-integration">
                Data integration
              </NavmenuLink>
              <NavmenuLink href="/manage/business-intelligence">
                Business intelligence
              </NavmenuLink>
            </Navmenu>
          </NavbarLink>

          <NavbarLink label="Asset viewer" href="/assets">
            <Navmenu>
              <NavmenuLink href="/assets/servers">Servers</NavmenuLink>
              <NavmenuLink href="/assets/data">Data</NavmenuLink>
              <NavmenuLink href="/assets/engines">Engines</NavmenuLink>
              <NavmenuLink href="/assets/engagements">
                Engagements
              </NavmenuLink>
            </Navmenu>
          </NavbarLink>

          <NavbarLink
            label="Log out"
            href={`/logout?returnUrl=${currRoute}`}
          />
        </ul>
      </nav>
    </div>
  );
}
