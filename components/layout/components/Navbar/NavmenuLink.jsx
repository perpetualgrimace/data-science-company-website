import Link from "next/link";
import { useRouter } from "next/router";
import checkRoute from "/helpers/checkRoute";

export default function NavmenuLink(props) {
  const { href, children } = props;
  const currRoute = useRouter().pathname;

  return (
    <li className="navmenu-item">
      <Link href={href}>
        <a
          className="navmenu-link u-font-sm"
          aria-current={checkRoute(href, currRoute)}
        >
          {children || "NavmenuLink text = `children` prop"}
        </a>
      </Link>
    </li>
  );
}
