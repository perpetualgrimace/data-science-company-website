import { useState, useRef } from "react";
import Link from "next/link";

import TabsHero from "./TabsHero";

const Tabs = ({ fontSize, tabs, defaultIndex }) => {
  const [currentIndex, setcurrentIndex] = useState(defaultIndex ?? 0);

  const handleClick = (index) => setcurrentIndex(index);
  const tabRefs = useRef({});

  const setIndex = (index) => {
    const tab = tabRefs.current[index];
    if (tab) {
      tab.focus();
    }
  };

  const onKeyDown = (e) => {
    const count = tabs.length;
    const nextTab = () => setIndex((currentIndex + 1) % count);
    const prevTab = () => setIndex((currentIndex - 1 + count) % count);
    const firstTab = () => setIndex(0);
    const lastTab = () => setIndex(count - 1);

    const keyMap = {
      ArrowRight: nextTab,
      ArrowLeft: prevTab,
      Home: firstTab,
      End: lastTab,
    };

    const action = keyMap[e.key];

    if (action) {
      e.preventDefault();
      action();
    }
  };

  return (
    <div className="darkglass tabs">
      <div
        className="tabs-list"
        role="tablist"
        aria-orientation="horizontal"
      >
        {tabs?.map((tab, index) => (
          <button
            className={`tabs-button u-subhead u-font-sm${
              tab?.theme ? ` ${tab.theme}-theme` : ""
            }`}
            key={`tab-${index}`}
            onClick={() => handleClick(index)}
            role="tab"
            ref={(element) => (tabRefs.current[index] = element)}
            aria-controls={`panel-id-${index}`}
            aria-selected={currentIndex === index}
            id={`tab-id-${index}`}
            onKeyDown={onKeyDown}
            onFocus={() => setcurrentIndex(index)}
            tabIndex={currentIndex === index ? 0 : -1}
          >
            {tab?.Icon}
            <span className="tabs-button-text">{tab?.buttonText}</span>
          </button>
        ))}
      </div>

      <div className="tabs-panel">
        {tabs?.map((tab, index) => (
          <section
            className="tabs-section"
            key={`tabpanel-${index}`}
            hidden={currentIndex !== index}
            role="tabpanel"
            aria-labelledby={`tab-id${index}`}
            id={`panel-id-${index}`}
            tabIndex={0}
          >
            <TabsHero
              title={tab?.title}
              subtitle={tab?.subtitle}
              imageSlug={tab?.slug}
            />
            <div className={`tabs-section-content u-font-${fontSize}`}>
              {tab?.content}
            </div>

            {tab?.logos?.length > 0 && (
              <aside className="tabs-section-logos">
                <h3 className="tabs-section-logos-headline">
                  Technologies used:
                </h3>

                {tab.logos.map((logo) =>
                  logo.url ? (
                    <Link key={logo?.slug} href={logo?.url} passHref>
                      <a className="tabs-section-logos-link">
                        <img
                          className="tabs-section-logos-img"
                          src={`/${logo?.slug}`}
                          alt={logo?.alt}
                        />
                      </a>
                    </Link>
                  ) : (
                    <img
                      key={`${logo?.slug}-img-only`}
                      className="tabs-section-logos-img"
                      src={`/${logo?.slug}`}
                      alt={logo?.alt}
                    />
                  )
                )}
              </aside>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
