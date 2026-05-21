import { useEffect, useState } from 'react';
import api from '../services/api';
import TransactionForm from '../components/TransactionForm';
import ExpenseChart from '../components/ExpenseChart';

export default function Dashboard() {
    const [transactions, setTransactions] = useState([]);

    const fetchTransactions = async () => {
        const res = await api.get('/transactions');
        setTransactions(res.data);
    }

    useEffect(() => {
        fetchTransactions();
    }, []);

    const expenses = transactions.filter(t => t.type === 'expense');

    return (
        <div className="p-6 grid md:grid-cols-2 gap-6">
            <TransactionForm fetchTransactions={fetchTransactions} />
            <ExpenseChart data={expenses} />
        </div>
    )
}
