function generateClassList(props) {
  const { className, style } = props;

  let classList = "tooltip";

  if (className) classList += ` ${className}`;
  if (style) classList += " is-auto-positioned";

  return classList;
}

export default function Tooltip(props) {
  const { children, label, description, style } = props;

  const filteredProps = {
    className: generateClassList(props),
    style,
  };

  return (
    <div {...filteredProps}>
      {label && <h2 className="tooltip-label u-font-md">{label}</h2>}
      {description && (
        <p className="tooltip-description">{description}</p>
      )}
      {children}
    </div>
  );
}
