import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const QuickSort = () => {
    const [array, setArray] = useState([]);
    const [delayUser, setDelayUser] = useState(100);
    const [arrLength, setArrLength] = useState(15);
    const [arrMax, setArrMax] = useState(100);
    const [active, setActive] = useState(null);
    const [coActive, setCoActive] = useState(null);
    const [isSorting, setIsSorting] = useState(false);
    const [high, setHigh] = useState(null)
    const [acArray, setAcArray] = useState([])
    const swapSound = new Audio('/swap.mp3');
    swapSound.volume = 0.5;

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const handleInputChange = (e) => {
        if(!isSorting){
            const { name, value } = e.target;
            const parsedValue = parseInt(value, 10);
            if (name === 'delayUser') {
                setDelayUser(parsedValue);
            } else if (name === 'arrLength') {
                setArrLength(parsedValue);
            } else if (name === 'arrMax') {
                setArrMax(parsedValue);
            }
        }
        return
        
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        const parsedValue = parseInt(value, 10);

        if (name === 'delayUser') {
            if (!((parsedValue >= 10) && (parsedValue <= 1000))) {
                alert("Delay must be between 10ms and 1000ms");
                if (parsedValue > 1000) {
                    setDelayUser(1000)
                } else {
                    setDelayUser(10)
                }
            }
        } else if (name === 'arrLength') {
            if (!((parsedValue >= 2) && (parsedValue <= 100))) {
                alert("Array length must be between 2 and 100");
                if (parsedValue > 100) {
                    setArrLength(100);
                } else {
                    setArrLength(2);
                }
            } 
        } else if (name === 'arrMax') {
            if (!((parsedValue >= 1) && (parsedValue <= 1000))) {
                alert("Array element value must be between 1 and 1000");
                if (parsedValue > 1000) {
                    setArrMax(1000)
                } else {
                    setArrMax(1)
                }
                
            } 
        }
    };

    function isArraySorted(arr) {
        return new Promise((resolve) => {
            for (let i = 0; i < arr.length - 1; i++) {
                if (arr[i] > arr[i + 1]) {
                    resolve(false);
                    return;
                }
            }
            resolve(true);
        });
    }

    function generateArray(n, max) {
        let arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(Math.floor(Math.random() * max) + 1);
        }
        setArray(arr);
    }

    function randomize() {
        let arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        setArray(arr);
    }

    useEffect(() => {
        generateArray(arrLength, arrMax);
    }, [arrLength, arrMax]);

    useEffect (()=>{
        async function checkSorted(){
            const temp = await isSorted(array)
            setIsSorted(temp)
        }
        checkSorted()
    }, [])


    async function quickSort(arr, low, high) {
        if (low < high) {
            let pi = await partition(arr, low, high);
            await quickSort(arr, low, pi- 1);
            await quickSort(arr, pi+ 1, high);
        }
    }
    
    async function partition(arr, low, high) {
        let p = arr[high];
        let i = low - 1;

        setAcArray([low,high])

        for (let j = low; j < high; j++) {
            setActive(j);
            setCoActive(low); 

            setHigh(high)
            swapSound.currentTime = 0;
            swapSound.play();


            if (arr[j] <= p) {
                i++;
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;

                setArray([...arr]);

            }
            
            await delay(delayUser);
        }
        let temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
    
        setArray([...arr]);
    
        return i + 1;
    }
    
    async function Sort() {
        let arr = [...array];
        setIsSorting(true);
        let isSorted = await isArraySorted(arr)
        if (isSorted) {
            alert("Array is already Sorted.");
        } else {
            await quickSort(arr, 0, arr.length - 1); 
        }
        setIsSorting(false);
        setActive(null);
        setCoActive(null);
        setAcArray([]);
        setHigh(null);
    }
    return (
        <div className="flex justify-center pb-10 items-center flex-col space-y-4">
            <h1 className='text-3xl pt-4'>Quick Sort</h1>
            <div className="inputs flex min-w-[370px] justify-around w-[90%] md:max-w-[400px]">
                <div className="flex p-2 max-w-[120px] flex-col relative justify-center items-start">
                    <p className="text-lg">Delay :</p>
                    <div className="relative">
                        <input
                            name="delayUser"
                            value={delayUser}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.target.blur();
                                }
                            }}
                            className="border w-[100%] focus:outline-indigo-500 p-2 rounded-sm"
                            placeholder=""
                            type="number"
                            disabled={isSorting}
                        />
                        <span className="absolute right-[3px] top-[5px] transform -translate-y-1/2 text-gray-500 text-sm">ms</span>
                    </div>
                </div>

                <div className="flex p-2 max-w-[120px] flex-col relative justify-center items-start">
                    <p className="text-lg">Array Size :</p>
                    <div className="relative">
                        <input
                            name="arrLength"
                            value={arrLength}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.target.blur(); 
                                }
                            }}
                            className="border w-[100%] focus:outline-indigo-500 p-2 rounded-sm"
                            placeholder=""
                            type="number"
                            disabled={isSorting}
                        />
                    </div>
                </div>

                <div className="flex p-2 max-w-[130px] flex-col relative justify-center items-start">
                    <p className="text-lg">Max. Integer :</p>
                    <div className="relative">
                        <input
                            name="arrMax"
                            value={arrMax}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.target.blur(); 
                                }
                            }}
                            className="border w-[100%] focus:outline-indigo-500 p-2 rounded-sm"
                            placeholder=""
                            type="number"
                            disabled={isSorting}
                        />
                    </div>
                </div>
            </div>
            <div className="flex gap-2 p-3 flex-wrap justify-center w-full">
                {array.map((item, index) => (
                    <motion.div
                        key={index}
                        className={`p-4 w-16 h-16 flex justify-center items-center text-xl font-semibold rounded-lg border transform transition duration-200 ease-in-out ${active === index
                            ? 'bg-indigo-500 text-white shadow-xl'
                            : coActive === index
                                ? 'bg-yellow-600 text-white shadow-xl'
                                :high === index ? 'bg-gray-900 text-white'
                                : ' text-black hover:bg-gray-300'
                            } ${(acArray[0] <= index && index <= acArray[1]) && 'border-green-700'}`}
                        animate={{
                            scale: active === index || coActive === index + 1 ? 1.1 : 1,
                            opacity: active === index || coActive === index + 1 ? 1 : 0.9,
                            transition: { duration: 0.0005 }
                        }}
                    >
                        {item}
                    </motion.div>
                ))}
            </div>
            <div className='flex flex-col  w-[90%] sm:max-w-[400px] gap-2 justify-start'>
                <div className='flex gap-2  items-center'>
                    <div className='w-3 h-3 rounded-sm bg-indigo-600'></div>
                    <p className='text-lg'>Indicates active element.</p>
                </div>
                <div className='flex gap-2  items-center'>
                    <div className='w-3 h-3 rounded-sm bg-yellow-600'></div>
                    <p className='text-lg'>Indicates co-active element.</p>
                </div>
            </div>
            <div className="flex gap-4">
                <button
                    onClick={() => !isSorting && Sort()}
                    className={`p-3  text-white font-bold rounded-md   transition-all duration-300 ${isSorting ? 'opacity-70 cursor-not-allowed bg-gray-500  ' : 'bg-indigo-600 hover:bg-indigo-700 '}`}
                >
                    Sort
                </button>
                <button
                    onClick={() => !isSorting && randomize()}
                    className={`p-3  text-white font-bold rounded-md   transition-all duration-300 ${isSorting ? 'opacity-70 cursor-not-allowed bg-gray-500  ' : 'bg-indigo-600 hover:bg-indigo-700 '}`}
                >
                    Randomize
                </button>
                <button
                    onClick={() => !isSorting && generateArray(arrLength, arrMax)}
                    className={`p-3  text-white font-bold rounded-md   transition-all duration-300 ${isSorting ? 'opacity-70 cursor-not-allowed bg-gray-500  ' : 'bg-indigo-600 hover:bg-indigo-700 '}`}
                >
                    Generate
                </button>
            </div>
            <div>
                <h1 className='text-lg w-full text-center border-b'>Note</h1>
                <table className="min-w-full mt-4">
                    <thead>
                        <tr>
                            <th className="border-b px-4 py-2">Property</th>
                            <th className="border-b px-4 py-2">Max Value</th>
                            <th className="border-b px-4 py-2">Min Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border-b px-4 py-2">Delay</td>
                            <td className="border-b px-4 py-2">1000ms</td>
                            <td className="border-b px-4 py-2">10ms</td>
                        </tr>
                        <tr>
                            <td className="border-b px-4 py-2">Array Length</td>
                            <td className="border-b px-4 py-2">100</td>
                            <td className="border-b px-4 py-2">2</td>
                        </tr>
                        <tr>
                            <td className="border-b px-4 py-2">Max Integer</td>
                            <td className="border-b px-4 py-2">1000</td>
                            <td className="border-b px-4 py-2">1</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default QuickSort;
