import React from "react";

const AppContext = React.createContext();


const AppProvider = ({ children }) => (

    <AppContext.Provider value={'hello'}>
        { children }
    </AppContext.Provider>
);


export {
    AppContext,
    AppProvider
}
