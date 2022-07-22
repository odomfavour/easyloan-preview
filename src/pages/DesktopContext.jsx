import React, { useState, useEffect, useContext } from "react";

const DesktopContext = React.createContext();
const DesktopProvider = ({ children }) => {
	const [isDesktop, setDesktop] = useState(window.innerWidth > 650);

	const updateMedia = () => {
		setDesktop(window.innerWidth > 650);
	};

	useEffect(() => {
		window.addEventListener("resize", updateMedia);
		return () => window.removeEventListener("resize", updateMedia);
	});
	return (
		<>
			<DesktopContext.Provider value={{ isDesktop }}>{children}</DesktopContext.Provider>;
		</>
	);
};

const useDesktop = () => {
	return useContext(DesktopContext);
};
export { DesktopContext, DesktopProvider, useDesktop };
