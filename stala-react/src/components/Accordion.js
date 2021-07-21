import { useState } from "react";
import { generateRandomNumber } from "../utils/helpers";

function Accordion({
  accordionId = `Accordion-${generateRandomNumber()}`,
  items,
  openIndex = -1,
}) {
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(openIndex);

  return (
    <div className="accordion accordion-flush" id={accordionId}>
      {items.map((item, i) => {
        const isOpen = i === activeAccordionIndex;
        return (
          <AccordionItem
            {...item}
            isOpen={isOpen}
            i={i}
            setActiveAccordionIndex={setActiveAccordionIndex}
            accordionId={accordionId}
          />
        );
      })}
    </div>
  );
}

function AccordionItem({
  accordionId,
  isOpen,
  setActiveAccordionIndex,
  title,
  body,
  i,
}) {
  const headerId = `${accordionId}-header-${i}`;
  const collapseId = `${accordionId}-collapse-${i}`;

  return (
    <div className="accordion-item bg-transparent">
      <div className="accordion-header " id={headerId}>
        <button
          className={`accordion-button bg-transparent  px-0 ${
            isOpen ? "" : "collapsed"
          }`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${collapseId}`}
          aria-expanded={isOpen}
          aria-controls={collapseId}
          onClick={() => {
            if (isOpen) setActiveAccordionIndex(-1);
            else setActiveAccordionIndex(i);
          }}
        >
          {title}
        </button>
      </div>
      <div
        id={collapseId}
        className={`accordion-content ${isOpen ? "show" : ""}`}
        aria-labelledby={headerId}
        data-bs-parent={`#${accordionId}`}
      >
        <div className="accordion-body px-1 py-2">{body}</div>
      </div>
    </div>
  );
}

export default Accordion;
