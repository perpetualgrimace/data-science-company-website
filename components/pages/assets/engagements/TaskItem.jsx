import CheckIcon from "/components/icons/CheckIcon";
import BoxOutlinedIcon from "/components/icons/BoxOutlinedIcon";

export default function TaskItem(props) {
  const { children, completionDate } = props;

  return (
    <li className="task-item">
      <span
        className={`task-item-icon ${
          completionDate ? "positive" : "neutral"
        }-theme u-mr-xxs`}
      >
        {completionDate ? <CheckIcon /> : <BoxOutlinedIcon />}
      </span>
      <span className="task-item-title u-mr-auto">
        {children || "missing `children` prop in TaskItem"}
      </span>
      {completionDate && (
        <span className="task-item-date">{completionDate}</span>
      )}
    </li>
  );
}
