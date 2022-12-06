import "./accordion.css";

export type AccordionElements = {
  title: string;
  paragraph: string;
};

interface AccordionProps {
  /**
   * List of elements in accordion
   */
  elements: Array<AccordionElements>;
  /**
   * Unique accordion ID
   */
  id?: string;
}

export const Accordion = ({ elements = [], id, ...props }: AccordionProps) => {
  return (
    <div className="accordion-flush accordion" id={id}>
      {elements.map((element, index) => (
        <div className="accordion-item" key={index}>
          <h4 className="accordion-header" id={`flush-heading${index}`}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#flush-collapse${index}`}
              aria-expanded="false"
              aria-controls={`flush-collapse${index}`}
            >
              {element.title}
            </button>
          </h4>
          <div
            id={`flush-collapse${index}`}
            className={`accordion-collapse collapse`}
            aria-labelledby={`flush-heading${index}`}
            data-bs-parent={`#${id}`}
            data-parent={`#${id}`}
          >
            <div className="accordion-body">{element.paragraph}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
