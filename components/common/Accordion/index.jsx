import WarningIcon from "/components/icons/WarningIcon";

export default function Accordion(props) {
  const { children } = props;
  return children.length ? (
    <div className="accordion">{children}</div>
  ) : (
    <p className="u-font-lg">
      <WarningIcon /> No items match this selection
    </p>
  );
}
