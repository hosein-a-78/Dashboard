import { useContext } from "react";
import FinanceContext from "../context/FinanceContext";

const Dashboard = () => {
    const { state } = useContext(FinanceContext);
    const totalIncome = state.transactions.
        filter((t) => t.type === "income").
        reduce((acc, t) => acc + t.amount, 0);

    const totalExpense = state.transactions.
        filter((t) => t.type === "expense").
        reduce((acc, t) => acc + t.amount, 0);

    const balance = totalIncome - totalExpense;

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Balance: ${balance} Toman</p>
            <p>Total Income: ${totalIncome} Toman</p>
            <p>Total Expense: ${totalExpense} Toman</p>

        </div>
    );
};

export default Dashboard;