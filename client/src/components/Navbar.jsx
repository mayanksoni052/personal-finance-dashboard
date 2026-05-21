export default function Navbar({ darkMode, setDarkMode }) {
    return (
        <div className="flex justify-between items-center p-4 shadow-md">
            <h1 className="text-2xl font-bold">Finance Dashboard</h1>

            <button
                onClick={() => setDarkMode(!darkMode)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Toggle Mode
            </button>
        </div>
    )
}
