import { useState } from 'react';
import api from '../services/api';

export default function TransactionForm({ fetchTransactions }) {
    const [formData, setFormData] = useState({
        type: 'expense',
        category: '',
        amount: '',
        description: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        await api.post('/transactions', formData);

        fetchTransactions();

        setFormData({
            type: 'expense',
            category: '',
            amount: '',
            description: ''
        });
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
            <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="border p-2 w-full mb-2"
            >
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>

            <input
                type="text"
                placeholder="Category"
                className="border p-2 w-full mb-2"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            />

            <input
                type="number"
                placeholder="Amount"
                className="border p-2 w-full mb-2"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            />

            <input
                type="text"
                placeholder="Description"
                className="border p-2 w-full mb-2"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />

            <button className="bg-green-500 text-white px-4 py-2 rounded">
                Add Transaction
            </button>
        </form>
    )
}
