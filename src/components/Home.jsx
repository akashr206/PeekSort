import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center relative bg-white text-gray-800">
            <div className="relative z-10  px-4 md:px-16 py-20 text-center">
                <h1 className="text-5xl font-semibold mb-6 ">
                    WELCOME TO <span className="logo cursor-pointer font-extrabold text-indigo-600">PeekSort</span>
                </h1>
                <p className="text-xl font-light mb-10 text-gray-600">Visualizing the Sorting Algorithms in a Fun and Interactive Way!</p>

                <div className="flex  items-center justify-center flex-col md:flex-row  gap-8">
                    <div className=' shadow-md p-4 w-[310px] sm:max-w-[500px] sm:shadow-none '>
                        <h2 className='text-3xl font-semibold mb-4'>Start Sorting</h2>
                        <ul className="space-y-4 flex flex-col">
                            <li><Link className="text-xl text-indigo-600 hover:text-indigo-800 transition duration-300" to={'/selectionSort'}>Selection Sort</Link></li>
                            <li><Link className="text-xl text-indigo-600 hover:text-indigo-800 transition duration-300" to={'/bubbleSort'}>Bubble Sort</Link></li>
                            <li><Link className="text-xl text-indigo-600 hover:text-indigo-800 transition duration-300" to={'/insertionSort'}>Insertion Sort</Link></li>
                            <li><Link className="text-xl text-indigo-600 hover:text-indigo-800 transition duration-300" to={'/quickSort'}>Quick Sort</Link></li>
                        </ul>
                    </div>

                    <div className='shadow-md w-[310px] sm:max-w-[500px] sm:shadow-none p-4'>
                        <h2 className='text-3xl font-semibold mb-4'>Learn</h2>
                        <ul className="space-y-4 flex flex-col">
                            <li><Link className="text-xl text-indigo-600 hover:text-indigo-800 transition duration-300" to={'https://www.geeksforgeeks.org/selection-sort-algorithm-2/'}>Selection Sort</Link></li>
                            <li><Link className="text-xl text-indigo-600 hover:text-indigo-800 transition duration-300" to={'https://www.geeksforgeeks.org/bubble-sort-algorithm/'}>Bubble Sort</Link></li>
                            <li><Link className="text-xl text-indigo-600 hover:text-indigo-800 transition duration-300" to={'https://www.geeksforgeeks.org/insertion-sort-algorithm/'}>Insertion Sort</Link></li>
                            <li><a className="text-xl text-indigo-600 hover:text-indigo-800 transition duration-300" href={'https://www.geeksforgeeks.org/quick-sort-algorithm/'}>Quick Sort</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;
