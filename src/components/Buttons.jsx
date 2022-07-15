import React from "react";
import { Button } from "react-bootstrap";

const Buttons = ({ children, variant, className, onClick, type }) => {
	return (
		<>
			<style type="text/css">
				{`
        .btn-purple {
          background-color: var(--purple);
          color: #fdfdfd;
        }
        .btn-outline-purple {
          border: 1px solid var(--purple);
          color: var(--purple);
        }
        .btn-gray{
          background-color: #E5E5E5;
        }
      `}
			</style>
			<Button variant={variant} size="md" className={className} onClick={onClick} type={type}>
				{children}
			</Button>
		</>
	);
};

export default Buttons;
