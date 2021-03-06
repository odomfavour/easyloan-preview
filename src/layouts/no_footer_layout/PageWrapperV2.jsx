import React from "react";
import { Header } from "../../components/index";

// Page wrapper with no-footer layout. For Login page, Register page, Personal details page, etc.

const PageWrapperV2 = ({ children, other }) => {
	return (
		<>
			<Header other={other} />
			<section>{children}</section>
		</>
	);
};

export default PageWrapperV2;
