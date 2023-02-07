import AccordionHeader from "./AccordionHeader";

export default function AccordionPanel(props) {
  const { isOpen, onClick, headingLabel, meta, children } = props;

  return (
    <div className="accordion-panel">
      <AccordionHeader onClick={onClick} isOpen={isOpen} meta={meta}>
        {headingLabel || "missing `headingLabel` prop in AccordionPanel"}
      </AccordionHeader>
      <div className="accordion-panel-inner">{children}</div>
    </div>
  );
}
