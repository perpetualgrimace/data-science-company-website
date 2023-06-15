import RetinaImg from "/components/common/RetinaImg";

export default function MulticolSection(props) {
  const { title, slug, columns } = props;
  return (
    <section
      className="multicol-section fullscreen-section"
      id={slug || "text-section"}
    >
      <h2 className="u-text-c u-title">{title || "missing title"}</h2>

      <div className="multicol-section-inner">
        {columns?.map((col) => (
          <div
            key={`${col?.title}-col`}
            className="multicol-section-col darkglass"
          >
            <h3
              className={`u-font-lg u-mb-sm${
                col?.images ? " u-text-c" : ""
              }`}
            >
              {col?.title}
            </h3>

            {col?.children}

            {col?.images && (
              <ul className="multicol-image-list">
                {col.images.map((img) => (
                  <li
                    key={`${img?.href || img}-img`}
                    className="multicol-image-item"
                  >
                    {img?.href ? (
                      <a
                        href={img.href}
                        className="multicol-image-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <RetinaImg
                          file={img?.file || img}
                          className="multicol-image-img"
                          alt={img?.alt}
                        />
                      </a>
                    ) : (
                      <RetinaImg
                        file={img?.file || img}
                        className="multicol-image-img"
                        alt={img?.alt}
                      />
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
