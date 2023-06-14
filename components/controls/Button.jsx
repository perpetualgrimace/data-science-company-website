import Link from "next/link";

const defaults = {
  fontSize: "sm",
  theme: "default",
};

function generateClassList(props) {
  const { className, fontSize, theme, fill } = props;

  let classList = "button";

  if (className) classList += ` ${className}`;

  classList += ` u-font-${fontSize || defaults.fontSize}`;
  classList += ` ${theme || defaults.theme}-theme`;

  if (fill) classList += ` fill`;

  return classList;
}

export default function Button(props) {
  const { href, type, children } = props;

  const filteredProps = {
    ...props,
    fill: undefined,
    className: generateClassList(props),
  };

  const Component = href ? (
    <Link href={href} passHref>
      <a {...filteredProps}>{children}</a>
    </Link>
  ) : (
    <button
      {...filteredProps}
      type={type || "button"}
      tabIndex={props.disabled ? -1 : null}
    >
      {children}
    </button>
  );

  return Component;
}
