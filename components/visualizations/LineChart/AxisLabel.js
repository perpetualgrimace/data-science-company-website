// https://www.headway.io/blog/building-a-svg-line-chart-in-react

const style = {
  display: "inline-block",
  width: "100%",
  textAlign: "center",
  color: "#808080",
};

const rotateStyles = {
  transform: "rotate(-90deg)",
  width: 35,
  transformOrigin: "center",
  marginTop: 50,
  marginRight: 20,
};

const Label = ({ text, rotate }) => (
  <div>
    <span style={{ ...style, ...(rotate ? rotateStyles : {}) }}>
      {text}
    </span>
  </div>
);

export default Label;
