import './App.css';
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home"
import Users from "./Pages/Users"
import Weather from "./Pages/Weather"
import Sidebar from "./Components/Sidebar"
import Search from './Pages/Search';

function App() {
  return (
    <div className='App'>
      <Sidebar></Sidebar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='users' element={<Users />} />
        <Route path='weather' element={<Weather />} />
        <Route path='search' element={<Search />} />
      </Routes>
    </div>);
}

export default App;
