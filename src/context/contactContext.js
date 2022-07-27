import React, { useState, createContext } from "react";

const ContactContext = createContext();

const ContactContextProvider = ({ children }) => {
	const [isDashboard, setIsDashboard] = useState(true);

	return (
		<ContactContext.Provider value={{ isDashboard, setIsDashboard }}>
			{children}
		</ContactContext.Provider>
	);
};

// export { ContactContext, ContactContextProvider };

export { ContactContext, ContactContextProvider };
