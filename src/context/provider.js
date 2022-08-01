import { useContext, useReducer, createContext } from 'react';
import reducer, { initialState } from './reducer';

const Context = createContext();

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
};

// Verilerimize heryerden ulaşabilmek için useStateValue diye bir hook oluşuturduk
export const useStateValue = () => useContext(Context);
export default Provider;