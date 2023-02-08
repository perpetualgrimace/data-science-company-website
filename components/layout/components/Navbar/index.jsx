import Link from "next/link";
import { useRouter } from "next/router";

import { pathPrefix } from "/environment.js";
import checkRoute from "/helpers/checkRoute";

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
              src={`/${pathPrefix}/logo.png`}
              srcSet={`
                /${pathPrefix}/logo.png 1x,
                /${pathPrefix}/logo@2x.png 2x`}
              alt="Andalusia, home"
              draggable="false"
            />
          </a>
        </Link>
      </nav>
    </div>
  );
}
