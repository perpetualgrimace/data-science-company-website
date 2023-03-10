import Tile from "/components/common/Tile";

export default function HomeItem(props) {
  return (
    <li className="home-item">
      <Tile {...props} />
    </li>
  );
}
