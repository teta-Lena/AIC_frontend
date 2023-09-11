import { ReactNode, createContext, useContext, useState } from "react";

const AuthContext = createContext({})

export const useAuthContext = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(localStorage.getItem("token") ? true : false)
    const [user, setUser] = useState(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {})
    const [viewLogin, setViewLogin] = useState(false)

    return (

        <AuthContext.Provider value={{
            user,
            setUser,
            authenticated,
            setAuthenticated,
            viewLogin,
            setViewLogin
        }}>
            {children}
        </AuthContext.Provider>

    );
}

export default AuthProvider;