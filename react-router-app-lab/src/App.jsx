import { useState } from 'react'
import './App.css'
import Main from "./pages/Main";
import Currencies from "./pages/Currencies";
import Price from "./pages/Price";
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';

export default function App() {
  const [count, setCount] = useState(0)
  // console.log(import.meta.env.VITE_API_KEY) // "123"
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/currencies" element={<Currencies />} />
        <Route path="/price/:symbol" element={<Price />} />
      </Routes>
    </>
  );



}


