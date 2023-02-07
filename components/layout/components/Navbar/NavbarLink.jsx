import Link from "next/link";
import { useRouter } from "next/router";
import checkRoute from "/helpers/checkRoute";

import ChevronDownIcon from "components/icons/ChevronDownIcon";

export default function NavbarLink(props) {
  const { href, label, children } = props;
  const currRoute = useRouter().pathname;

  return (
    <li className="navbar-item">
      <Link href={href}>
        <a
          className="navbar-link u-font-sm"
          aria-current={checkRoute(href, currRoute)}
        >
          {label || "NavbarLink text = `label` prop"}

          {children && <ChevronDownIcon />}
        </a>
      </Link>

      {children}
    </li>
  );
}
