import { children, createContext, useReducer } from "react";

const FinanceContext = createContext();

const financeReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return {
                ...state, transaction:
                    [...state.transactions, action.payload]
            };
        default:
            return state;
    }
}

export const FinanceProvider = ({ children }) => {
    const [state, dispatch] = useReducer(financeReducer, {
        transactions: []
    })
    return (
        <FinanceContext.Provider value={{ state, dispatch }}>
            {children}
        </FinanceContext.Provider>
    );
}
export default FinanceContext;