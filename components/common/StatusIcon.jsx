import ThumbsDownIcon from "components/icons/ThumbsDownIcon";
import ThumbsUpIcon from "components/icons/ThumbsUpIcon";
import WarningIcon from "components/icons/WarningIcon";

export default function StatusIcon(props) {
  const { status } = props;

  return (
    <span className={`status-icon is-${status}`}>
      {status === "down" ? (
        <ThumbsDownIcon />
      ) : status === "warning" ? (
        <WarningIcon />
      ) : (
        <ThumbsUpIcon />
      )}
    </span>
  );
}
