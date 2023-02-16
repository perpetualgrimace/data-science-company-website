import { pathPrefix } from "/environment.js";

import Button from "/components/controls/Button";

export default function Subnav(props) {
  const { sections } = props;
  return (
    <nav className="subnav darkglass">
      <ul className="subnav-list">
        {sections.map((link) => (
          <li key={link.title} className="subnav-item">
            <a className="subnav-link" href={`#${link.slug}`}>
              <img
                className="subnav-icon active-subnav-icon"
                src={`/${pathPrefix}/icons/subnav-icon-active.png`}
                srcset={`
                  /${pathPrefix}/icons/subnav-icon-active.png 1x,
                  /${pathPrefix}/icons/subnav-icon-active@2x.png 2x
                `}
                alt=""
              />
              <img
                className="subnav-icon inactive-subnav-icon"
                src={`/${pathPrefix}/icons/subnav-icon-inactive.png`}
                srcset={`
                  /${pathPrefix}/icons/subnav-icon-inactive.png 1x,
                  /${pathPrefix}/icons/subnav-icon-inactive@2x.png 2x
                `}
                alt=""
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
