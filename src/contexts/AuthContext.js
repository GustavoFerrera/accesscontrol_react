import React, {createContext, useState, useEffect} from 'react';

export const AuthContext = createContext()

function AuthProvider ({children}) {
    const [auth, setAuth] = useState(localStorage.getItem('auth') === 'true');

    useEffect(() => {
        // Este efeito será executado quando o componente for montado
        // e verificará o localStorage para autenticação.
        const storedAuth = localStorage.getItem('auth') === 'true';
        setAuth(storedAuth);
      }, []);
    

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;