import RetinaImg from "/components/common/RetinaImg";

import Button from "/components/controls/Button";

export default function Subnav(props) {
  const { sections } = props;
  return (
    <nav className="subnav">
      <ul className="subnav-list darkglass">
        {sections.map((link) => (
          <li key={link.title} className="subnav-item">
            <a className="subnav-link" href={`#${link.slug}`}>
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
            </a>
          </li>
        ))}
        <li className="subnav-item">
          <Button href="/contact">Contact us</Button>
        </li>
      </ul>
    </nav>
  );
}
