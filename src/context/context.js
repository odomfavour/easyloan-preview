import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	// const [isDesktop, setDesktop] = useState(window.innerWidth > 650);

	let data;

	//put your states here
	const [state, setState] = useState();
	const [user, setUser] = useState({});
	const [bizForm, setBizForm] = useState({
		businessName: "",
		businessEmail: "",
		regNumber: "",
		bvn: "",
		phone: "",
		category: false,
		size: "",
	});

	useEffect(() => {
		data = JSON.parse(localStorage.getItem("user"));
		setUser(data);
	}, [data]);

	

	const inputs = {
		state,
		setState,
		user,
		setUser,
		bizForm,
		setBizForm,

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
