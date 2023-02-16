import { useRef } from "react";
import { useAtom } from "jotai";
import Link from "next/link";

import { activeTabAtom } from "/helpers/atoms/activeTabAtom";

import TabsHero from "./TabsHero";

// TODO: investigate incorrect initial tab on page load
const Tabs = ({ fontSize, tabs }) => {
  const [currentIndex, setCurrentIndex] = useAtom(activeTabAtom);

  const handleClick = (index) => setCurrentIndex(index);
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
            onFocus={() => setCurrentIndex(index)}
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
            className={`tabs-section${
              tab?.theme ? ` ${tab.theme}-theme` : ""
            }`}
            key={`tabpanel-${index}`}
            hidden={currentIndex !== index}
            role="tabpanel"
            aria-labelledby={`tab-id${index}`}
            id={`panel-id-${index}`}
          >
            <TabsHero
              title={tab?.title}
              subtitle={tab?.subtitle}
              imgSlug={tab?.slug}
            />
            <div className="tabs-section-inner wrapper">
              <div className={`tabs-section-content u-font-${fontSize}`}>
                {tab?.content}
              </div>

              {tab?.logos?.length > 0 && (
                <aside className="tabs-section-logos">
                  <h3 className="tabs-section-logos-headline u-font-md">
                    Technologies used:
                  </h3>

                  <div className="tabs-section-logos-list">
                    {tab.logos.map((logo) => (
                      <Link
                        key={logo?.slug}
                        href={logo?.url ? logo.url : ""}
                        passHref
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <a className="tabs-section-logos-link u-font-xl">
                          <img
                            className="tabs-section-logos-img"
                            src={`logos/${logo?.slug}.svg`}
                            alt={logo?.alt}
                          />
                        </a>
                      </Link>
                    ))}
                  </div>
                </aside>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
