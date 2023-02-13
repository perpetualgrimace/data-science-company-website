export default function Tag(props) {
  const { children, theme } = props;
  return (
    <span className={`tag${theme ? ` ${theme}-theme` : ""}`}>
      {children}
    </span>
  );
}
