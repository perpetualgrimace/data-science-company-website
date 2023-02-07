export default function ProgressPill(props) {
  const { children } = props;

  return (
    <span className="progress-pill">
      <span
        className="progress-pill-bar u-malachite-darker-bg"
        style={{ width: children }}
      />
      <span className="progress-pill-text">{children}</span>
    </span>
  );
}
