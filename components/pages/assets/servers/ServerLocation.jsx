import CloudIcon from "/components/icons/CloudIcon";
import ServerIcon from "/components/icons/ServerIcon";

export default function ServerLocation(props) {
  const { remote } = props;

  return (
    <p className="server-location u-mt-0 u-mb-auto">
      {remote ? (
        <>
          <CloudIcon /> Remote
        </>
      ) : (
        <>
          <ServerIcon /> Local
        </>
      )}
    </p>
  );
}
