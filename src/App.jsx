import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BubbleSort from './components/BubbleSort'
import Navbar from './components/Navbar'
import SelectionSort from './components/SelectionSort'
import InsertionSort from './components/InsertionSort';
import QuickSort from './components/QuickSort';
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main className='w-full h-full flex items-center justify-center'>
          <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/selectionSort' element={<SelectionSort />} ></Route>
            <Route path='/bubbleSort' element={<BubbleSort />} ></Route>
            <Route path='/insertionSort' element={<InsertionSort />} ></Route>
            <Route path='/quickSort' element={<QuickSort />} ></Route>
          </Routes>
        </main>
        <Footer/>
      </Router>
    </>
  )
} 

export default App
