import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	// const [isDesktop, setDesktop] = useState(window.innerWidth > 650);

	//put your states here
	const [state, setState] = useState();
	const [user, setUser] = useState({});

	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem("user")));
	}, [user]);

	const inputs = {
		state,
		setState,
		user,
		setUser,

		//add your states here
	};
	return (
		<>
			<AppContext.Provider value={(inputs)}>{children}</AppContext.Provider>
		</>
	);
};

const useAppContext = () => {
	return useContext(AppContext);
};
export { AppContext, AppProvider, useAppContext };
