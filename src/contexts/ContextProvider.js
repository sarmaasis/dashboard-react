import React, { createContext, useContext, useState } from 'react';


const StateContext = createContext();

const initialState = {
    cart:false,
    chat: false,
    userProfile:false,
    notification: false,
}

export const ContextProvider = ({ children }) => {

    const [activeMenu, setactiveMenu] = useState(true);


    return (
        <StateContext.Provider
            value={{activeMenu: 'activeMenu',
                    setactiveMenu: 'setactiveMenu'
                }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext (StateContext);