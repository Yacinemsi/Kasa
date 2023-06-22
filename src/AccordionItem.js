import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordeon">
      <button onClick={handleToggle} className="button-accordeon">
        {title}
        <div
          style={{
            display: "inline-block",
            transition: "transform 0.3s",
            transform: isOpen ? "rotate(-180deg)" : "rotate(0deg)",
          }}
        >
          <FontAwesomeIcon
            icon={faAngleUp}
            style={{
              color: "#ffffff",
            }}
          />
        </div>
      </button>
      <CSSTransition
        in={isOpen}
        timeout={500}
        classNames="accordeon-content"
        unmountOnExit
      >
        <div className="contain-accordeon">{children}</div>
      </CSSTransition>
    </div>
  );
};

export default AccordionItem;
