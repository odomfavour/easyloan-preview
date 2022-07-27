import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	// const [isDesktop, setDesktop] = useState(window.innerWidth > 650);

	//put your states here
	const [state, setState] = useState();

	const inputs = {
		state,
		setState,

		//add your states here
	};
	return (
		<>
			<AppContext.Provider value={inputs}>{children}</AppContext.Provider>
		</>
	);
};

const useAppContext = () => {
	return useContext(AppContext);
};
export { AppContext, AppProvider, useAppContext };
