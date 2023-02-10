import DiamondImg from "/components/common/DiamondImg";

export default function Diamond(props) {
  return (
    <div className="diamond">
      <ul className="diamond-list">{props.children}</ul>
      <DiamondImg />
    </div>
  );
}
