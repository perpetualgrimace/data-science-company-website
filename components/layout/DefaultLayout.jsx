import Link from "next/link";

import Meta from "./components/Meta";
import Navbar from "./components/Navbar";
import Subnav from "./components/Subnav";
import SpaceBG from "./components/SpaceBG";

export default function DefaultLayout(props) {
  const { title, slug, sections, children, homeLink } = props;

  return (
    <div className={`${slug}-layout default-layout`}>
      <Meta
        pageTitle={title}
        description="Modern data science platform for restrictive environments"
      />

      <Navbar />

      <main className="main" id="#main">
        <div className={`${slug}-wrapper wrapper u-pb-xl`}>
          {children}

          {homeLink && (
            <Link
              href={homeLink === true ? "/" : `/#${homeLink}`}
              passHref
            >
              <a className="u-cornflower-color u-block u-text-c">
                ← Back to home page
              </a>
            </Link>
          )}
        </div>
      </main>

      {sections && <Subnav sections={sections} />}

      <SpaceBG />
    </div>
  );
}
