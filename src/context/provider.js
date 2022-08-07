import { useContext, useReducer, createContext, useState } from 'react';
import reducer, { initialState } from './reducer';

const AppContext = createContext();

const useApp = () => useContext(AppContext);

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

//     const [user, setUser] = useState('');
//     const [isAuth, setIsAuth] = useState(false); 

//     const logOut = data => {
//         setUser('');
//         setIsAuth(false);
//         console.log('user logged out')
//         localStorage.removeItem("user", data); 
//   }

//   const logIn = data => {
//     setUser(data)
//     setIsAuth(true);
//     console.log('user logged in')
//     localStorage.setItem("user", data);
//   }

    //logOut, user, isAuth, logIn, 
    const AppContextValues = {
        state, dispatch
    }

    return (
        <AppContext.Provider value={AppContextValues}>
            {children}
        </AppContext.Provider>
    );
};

export { useApp }; 
export default Provider;