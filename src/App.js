import './App.css';
import Day1 from "./pages/Day1";
import {Link, Routes, Route, Navigate} from "react-router-dom";

const App = () => {
    return (
        <div className="wrapper">
            <header>
                <Link to='/day1'>Day 1 | Cards</Link>
                <Link to='/day2'>Day 2</Link>
                <Link to='/day3'>Day 3</Link>
                <Link to='/day4'>Day 4</Link>
                <Link to='/day5'>Day 5</Link>
            </header>
            <main className="main">
                <Routes>
                    <Route path='/' element={<Navigate to='/day1'/>}/>
                    <Route path='/day1' element={<Day1/>}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;
