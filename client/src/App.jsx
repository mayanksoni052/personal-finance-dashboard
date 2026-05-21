import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';
import Navbar from './components/Navbar';

function App() {

    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? 'dark bg-black text-white min-h-screen' : 'bg-gray-100 min-h-screen'}>
            <BrowserRouter>
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

                <Routes>
                    <Route path='/' element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
