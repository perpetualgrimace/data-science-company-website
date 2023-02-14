export default function Tag(props) {
  const { children, theme } = props;
  return (
    <span
      className={`tag u-subhead u-font-md${
        theme ? ` ${theme}-theme` : ""
      }`}
    >
      {children}
    </span>
  );
}
