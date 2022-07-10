import React from "react";
import { Button } from "react-bootstrap";

const Buttons = ({ children, style, className, onClick, type }) => {
  return (
    <>
      <style type="text/css">
        {`
        .btn-purple {
          background-color: var(--purple);
          color: #fdfdfd;
        }
      `}
      </style>
      <Button variant={style} size="md" className={className} onClick={onClick} type={type}>
        {children}
      </Button>
    </>
  );
};

export default Buttons;
