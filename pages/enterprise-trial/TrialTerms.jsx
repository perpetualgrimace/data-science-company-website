import CrossIcon from "/components/icons/CrossIcon";

export default function TrialSumary(props) {
  const { isVisible, onToggle } = props;

  return (
    <section
      className={`trial-terms trial-card darkglass u-mh-auto u-mb-md is-${
        isVisible ? "visible" : "hidden"
      }`}
      name="Andalusia-website contact form"
      data-netlify={true}
    >
      <h2 className="u-text-c">Terms of service</h2>

      <button
        className="trial-terms-button u-subhead u-font-sm"
        type="button"
        onClick={onToggle}
        tabIndex={!isVisible ? "-1" : null}
        disabled={!isVisible}
      >
        <CrossIcon />
        <span className="u-visually-hidden"> back</span>
      </button>

      <div className="trial-terms-text">
        <p className="u-font-md u-mb-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          reprehenderit quidem nobis corporis velit, numquam dolorem
          beatae commodi et. Perferendis earum commodi quod quae
          laboriosam quasi quam id veniam veritatis.
        </p>

        <p className="u-font-md u-mb-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          reprehenderit quidem nobis corporis velit, numquam dolorem
          beatae commodi et. Perferendis earum commodi quod quae
          laboriosam quasi quam id veniam veritatis.
        </p>

        <p className="u-font-md u-mb-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          reprehenderit quidem nobis corporis velit, numquam dolorem
          beatae commodi et. Perferendis earum commodi quod quae
          laboriosam quasi quam id veniam veritatis.
        </p>

        <p className="u-font-md u-mb-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          reprehenderit quidem nobis corporis velit, numquam dolorem
          beatae commodi et. Perferendis earum commodi quod quae
          laboriosam quasi quam id veniam veritatis.
        </p>

        <p className="u-font-md u-mb-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          reprehenderit quidem nobis corporis velit, numquam dolorem
          beatae commodi et. Perferendis earum commodi quod quae
          laboriosam quasi quam id veniam veritatis.
        </p>

        <p className="u-font-md u-mb-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          reprehenderit quidem nobis corporis velit, numquam dolorem
          beatae commodi et. Perferendis earum commodi quod quae
          laboriosam quasi quam id veniam veritatis.
        </p>
      </div>
    </section>
  );
}
