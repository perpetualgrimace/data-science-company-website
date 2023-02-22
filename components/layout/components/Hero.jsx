import Link from "next/link";

import RetinaImg from "/components/common/RetinaImg";

export default function Hero(props) {
  const { pageTitle, imgSlug, parentSlug, parentTitle } = props;

  return (
    <header className="hero" role="banner">
      <div className="hero-inner wrapper">
        <h1 className="hero-headline u-title">
          {pageTitle || "missing `pageTitle` prop"}
        </h1>

        {parentSlug && parentTitle && (
          <Link href={parentSlug}>
            <a className="hero-breadcrumb u-font-sm">{parentTitle}</a>
          </Link>
        )}
      </div>
      {imgSlug && (
        <RetinaImg className="hero-img" file={`hero/${imgSlug}-hero`} />
      )}
    </header>
  );
}
