import React from "react";
import { Button } from "react-bootstrap";

const Buttons = ({ children, variant, className, style, onClick, type, disabled, as, to }) => {
	return (
		<>
			<style type="text/css">
				{`
        .btn-purple {
          background-color: var(--purple);
          color: #fdfdfd;
          border-radius: 8px;
        }
        .btn-outline-purple {
          border: 1px solid var(--purple);
          color: var(--purple);
          border-radius: 8px;
        }
        .btn-gray{
          background-color: #E5E5E5;
          border-radius: 8px;
        }
        .btn-Awaiting{
          color: #8A8989;
          background: rgba(232, 250, 31, 0.3);
        }
        .btn-Disbursed{
          color: #8A8989;
          background: rgba(19, 255, 57, 0.3);
        }
      `}
			</style>
			<Button variant={variant} className={className} style={style} onClick={onClick} type={type} disabled={disabled} as={as} to={to} >
				{children}
			</Button>
		</>
	);
};

export default Buttons;
