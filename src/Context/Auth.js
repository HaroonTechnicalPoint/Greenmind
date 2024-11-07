import React, { createContext,  useState } from 'react'



export const AuthContext = createContext()

const initialstate = { Auth: false, user: {} }

const AuthProvider = ({ children }) => {

    const [state, setContextState] = useState(initialstate)

    return (

        <AuthContext.Provider value={{...state, setContextState}}>
            { children }
        </AuthContext.Provider >
    )
}

export default AuthProvider
