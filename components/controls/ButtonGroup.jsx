export default function ButtonGroup(props) {
  const { children, label } = props;

  return (
    <div className="button-group">
      <span
        className={`button-group-label${
          label ? " u-visually-hidden" : ""
        }`}
      >
        {label || "missing `label` prop in ButtonGroup component"}
      </span>
      {children}
    </div>
  );
}
