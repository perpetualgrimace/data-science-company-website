import RetinaImg from "/components/common/RetinaImg";

export default function SpaceBG(props) {
  const { className, variant } = props;

  return (
    <div className={`space-bg${className ? ` ${className}` : ""}`}>
      <RetinaImg
        className="space-bg-img"
        extension="jpg"
        file={variant ? `bg-${variant}` : "bg"}
      />
    </div>
  );
}
