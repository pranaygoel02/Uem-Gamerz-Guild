import React, {useContext, useState} from 'react'

const AuthContext = React.createContext()

export function AuthProvider({children}){
    const [isAuth, setIsAuth] = useState(false)
    const [user, setUser] = useState(localStorage.getItem('user'))
    const value = {
        isAuth,
        setIsAuth,
        user,
        setUser
    }
    return(
        <AuthContext.Provider value={value}>
        {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    return(useContext(AuthContext))
}
