import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

export default function ExpenseChart({ data }) {

    const chartData = data.map(item => ({
        name: item.category,
        value: item.amount
    }));

    return (
        <div className="bg-white p-4 rounded shadow-md h-96">
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={chartData}
                        dataKey="value"
                        outerRadius={120}
                        fill="#8884d8"
                    >
                        {chartData.map((entry, index) => (
                            <Cell key={index} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}
