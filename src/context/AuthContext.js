import React, {createContext, useState} from 'react';
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [ isAuth, toggleIsAuth ] = useState(false);
    const navigate = useNavigate();

    function logoutHandlerFunction(e) {
        e.preventDefault();
        toggleIsAuth(false);
        console.log("Gebruiker is uitgelogd.")
        navigate("/");
    }

    const data = {
        isAuth: isAuth,
        toggleIsAuth: toggleIsAuth,
        logoutHandler: logoutHandlerFunction,
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;