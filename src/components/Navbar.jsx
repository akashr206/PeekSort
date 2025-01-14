import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { motion } from 'framer-motion';
import {
  Bars3Icon,
  XMarkIcon,
  ArrowRightIcon
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white z-25 shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 md:p-4" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to={'/'}>
            <h1 className="logo cursor-pointer font-bold text-4xl text-indigo-600">PeekSort</h1>
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-4">
          {/* Types of Sorts */}
          <ul className="flex ">
            <li><Link className="text-lg  mx-4 gap-2 items-center flex" to={'/selectionSort'} >Selection Sort </Link></li>
            <li><Link className="text-lg  mx-4 gap-2 items-center flex" to={'/bubbleSort'} >Bubble Sort</Link></li>
            <li><Link className="text-lg  mx-4 gap-2 items-center flex" to={'/insertionSort'} >Insertion Sort </Link></li>

            <li><Link className="text-lg  mx-4 gap-2 items-center flex" to={'/quickSort'} >Quick Sort </Link></li>
          </ul>

        </div>

        <div className="flex items-center justify-center gap-2 lg:hidden">

          <button
            type="button"

            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => {
              setMobileMenuOpen(true);
            }}
          >
            <Bars3Icon className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>

      </nav>
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <motion.div

          className="fixed inset-0 z-10 overflow-y-auto bg-white px-4 py-4 lg:hidden"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center justify-between">

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-8 w-8" aria-hidden="true" />
            </button>

          </div>
          <motion.div
            className="mt-6 ml-6 flex flex-col gap-2 space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >

            {/* Types of Sorts */}
            <ul className="flex flex-col">
              <li><Link className="text-xl my-3 font-semibold gap-2 items-center flex" to={'/selectionSort'} onClick={() => setMobileMenuOpen(false)}>Selection Sort <ArrowRightIcon className="h-5 w-5" /> </Link></li>
              <li><Link className="text-xl my-3 font-semibold gap-2 items-center flex" to={'/bubbleSort'} onClick={() => setMobileMenuOpen(false)}>Bubble Sort <ArrowRightIcon className="h-5 w-5" /> </Link></li>
              <li><Link className="text-xl my-3 font-semibold gap-2 items-center flex" to={'/insertionSort'} onClick={() => setMobileMenuOpen(false)}>Insertion Sort <ArrowRightIcon className="h-5 w-5" /> </Link></li>

              <li><Link className="text-xl my-3 font-semibold gap-2 items-center flex" to={'/quickSort'} onClick={() => setMobileMenuOpen(false)}>Quick Sort <ArrowRightIcon className="h-5 w-5" /> </Link></li>
            </ul>
          </motion.div>
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.2, delay: 0.2 }}
          >
            <div className='ml-6'>

            </div>
          </motion.div>
        </motion.div>
      </Dialog>
    </header>
  );
};

export default Navbar;
