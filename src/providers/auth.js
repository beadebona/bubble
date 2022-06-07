import { createContext, useContext, useState } from "react";
import { API } from "../services";


const AuthContext = createContext()

export const AuthProvider = ({ children}) =>{
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("@bubble:user"))||{});
    const [token, setToken] = useState(localStorage.getItem("@bubble:token")||"");
    const [authenticated, setAuthenticated] = useState(false)

    const access = (data, endPoint, callback) =>{
        API.post(endPoint, data)
        .then((response) => {
            setUser(response.data.user)
            setToken(response.data.accessToken)
            localStorage.setItem("@bubble:user",JSON.stringify(response.data.user))
            localStorage.setItem("@bubble:token",response.data.accessToken)
            setAuthenticated(true)
            callback()
        })
        .catch((error) =>console.log(error))
    }

    const LogOff = () => {
        setUser({})
        setToken('')
        localStorage.removeItem("@bubble:user")
        localStorage.removeItem("@bubble:token")
        setAuthenticated(false)
    };

    
    return(
        <AuthContext.Provider
        value={{
            user, 
            token, 
            access, 
            LogOff, 
            authenticated,
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);