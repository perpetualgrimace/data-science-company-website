export default function AccordionPanelColumn(props) {
  const { title, children } = props;
  return (
    <div className="accordion-panel-column">
      <h3 className="accordion-panel-column-title u-font-md">
        {title || "Missing `title` prop in AccordionPanelColumn"}
      </h3>

      {children}
    </div>
  );
}
