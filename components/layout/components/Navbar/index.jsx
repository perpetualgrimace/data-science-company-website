import Link from "next/link";
import { useRouter } from "next/router";

import checkRoute from "/helpers/checkRoute";
import RetinaImg from "/components/common/RetinaImg";

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
            <RetinaImg
              className="navbar-logo-img"
              file="logo"
              alt="Andalusia, home"
            />
          </a>
        </Link>
      </nav>
    </div>
  );
}
