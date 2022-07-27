import React from "react";
import { useDesktop } from "../pages/DesktopContext";
import MobileHeader from "./Headers/MobileHeader";
import DesktopHeader from "./Headers/DesktopHeader";
const Header = () => {
	const { isDesktop } = useDesktop();

	if (isDesktop) {
		return <DesktopHeader />;
	}
	if (!isDesktop) {
		return <MobileHeader />;
	}
};

export default Header;
