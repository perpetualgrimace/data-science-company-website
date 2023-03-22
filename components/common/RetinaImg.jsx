function RetinaImg(props) {
  const { alt, className, extension, file, loading } = props;

  return (
    <img
      className={className}
      src={`/${file}.${extension}`}
      srcSet={`
        /${file}.${extension} 1x,
        /${file}@2x.${extension} 2x`}
      alt={alt}
      loading={loading}
      draggable="false"
    />
  );
}

RetinaImg.defaultProps = {
  alt: "",
  className: "retina-img",
  extension: "png",
  file: "missing-file-prop",
  loading: "lazy",
};

export default RetinaImg;
