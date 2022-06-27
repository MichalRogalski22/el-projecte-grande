import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    console.log(localStorage.getItem("persist"));
    const [persist, setPersist] = useState(localStorage.getItem("persist") === "undefined" ? false : JSON.parse(localStorage.getItem("persist")));

    return (
        <AuthContext.Provider value={{ auth, setAuth, persist, setPersist }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;