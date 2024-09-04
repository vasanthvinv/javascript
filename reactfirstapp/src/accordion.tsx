import React, { useState } from "react";
import "./accordion.css";

interface accordion{
    question: string;
    answer: string;
}

const data:accordion[] = [
  {
    question: "What are accordion components?",
    answer:
      "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
  },
  {
    question: "What are they used for?",
    answer:
      "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
  },
  {
    question: "Accordion as a musical instrument?",
    answer:
      "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
  },
  {
    question: "Can I create an accordion component with a different framework?",
    answer:
      "Yes of course, it is very possible to create an accordion component with another framework.",
  },
];

function Accordion(): React.JSX.Element {
  const [select, setSelect] = useState<null | number>(null);

  const handleClick = (index:number) => {
    if (select === index) {
      return setSelect(null);
    }
    setSelect(index);
  };
  return (
    <div className="accordion">
      {data.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div className="accordion-header" onClick={() => handleClick(index)}>
            <h3>{item.question}</h3>
            <span id="caret"> {select === index ? "<" : ">"} </span>
          </div>
          {select === index && (
            <div className="accordion-content">
              <p>{item.answer}</p>
            </div>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Accordion;