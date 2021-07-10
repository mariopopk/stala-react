import { useState } from "react";

function Accordion({ accordionName, items }) {
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(-1);

  return (
    <div className="accordion accordion-flush" id={accordionName}>
      {items.map(({ title, key, body }, i) => {
        const isOpen = i === activeAccordionIndex;

        return (
          <AccordionItem
            key={key}
            title={title}
            body={body}
            isOpen={isOpen}
            i={i}
            setActiveAccordionIndex={setActiveAccordionIndex}
            accordionName={accordionName}
          />
        );
      })}
    </div>
  );
}

function AccordionItem({
  accordionName,
  isOpen,
  setActiveAccordionIndex,
  title,
  body,
  i,
}) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`${accordionName}-header-${i}`}>
        <button
          className="accordion-button collapsed px-0 "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${accordionName}-collapse-${i}`}
          aria-expanded={isOpen}
          aria-controls={`${accordionName}-collapse-${i}`}
          onClick={() => {
            if (isOpen) setActiveAccordionIndex(-1);
            else setActiveAccordionIndex(i);
          }}
        >
          {title}
        </button>
      </h2>
      <div
        id={`${accordionName}-collapse-${i}`}
        className={`accordion-content ${isOpen ? "show" : ""}`}
        aria-labelledby={`${accordionName}-header-${i}`}
        data-bs-parent={`#${accordionName}`}
      >
        <div className="accordion-body px-1 py-2">{body}</div>
      </div>
    </div>
  );
}

export default Accordion;
