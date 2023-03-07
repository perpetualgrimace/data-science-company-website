import { Link } from "react-scroll";

import RetinaImg from "/components/common/RetinaImg";

import Button from "/components/controls/Button";

export default function Subnav(props) {
  const { sections } = props;
  return (
    <nav className="subnav">
      <ul className="subnav-list darkglass">
        {sections.map((link, i) => (
          <li key={link.title} className="subnav-item">
            <Link
              className="subnav-link"
              activeClass="is-active"
              smooth
              spy
              offset={i === 0 ? -60 : -10}
              to={link.slug}
              href={`#${link.slug}`}
            >
              <RetinaImg
                className="subnav-icon active-subnav-icon"
                file="icons/subnav-icon-active"
                loading="default"
              />
              <RetinaImg
                className="subnav-icon inactive-subnav-icon"
                file="icons/subnav-icon-inactive"
                loading="default"
              />

              <span className="subnav-text u-subhead">
                {link.shortTitle || link.title}
              </span>
            </Link>
          </li>
        ))}
        <li className="subnav-item">
          <Button href="/contact">Contact us</Button>
        </li>
      </ul>
    </nav>
  );
}
