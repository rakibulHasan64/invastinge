import { useState } from "react";
import { Link } from "react-router-dom";

function Naver() {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className="bg-[#CBD7EE]">
         <header className="flex  py-4 px-4 sm:px-10 font-[sans-serif] min-h-[70px] tracking-wide relative z-50  mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-5 w-full">
               <Link to="/" className="flex items-center">
                  <img
                     src="/splitimmo_logo-color 1.png"
                     alt="logo"
                     className="w-36 max-sm:hidden"
                  />
                  <img
                     src="/public/splitimmo_logo-color 1.png"
                     alt="logo"
                     className="w-9 hidden max-sm:block"
                  />
               </Link>

               <div className="lg:hidden">
                  <button
                     onClick={() => setIsOpen(!isOpen)}
                     className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
                  >
                     <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        {isOpen ? (
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                           />
                        ) : (
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 6h16M4 12h16m-7 6h7"
                           />
                        )}
                     </svg>
                  </button>
               </div>

               <nav
                  className={`${isOpen ? "block" : "hidden"
                     } lg:flex lg:items-center lg:w-auto w-full`}
               >
                  <ul className="lg:flex lg:gap-x-5">
                     {[
                        { to: "/", label: "Home" },
                        { to: "/team", label: "Team" },
                        { to: "/feature", label: "Feature" },
                        { to: "/question", label: "Question" },
                        { to: "/blog", label: "Blog" },
                        { to: "/contact", label: "Contact" },
                        { to: "/next", label: "Next" },
                     ].map((item) => (
                        <li key={item.to} className="mt-3 lg:mt-0">
                           <Link
                              to={item.to}
                              className="block text-gray-500 font-semibold text-[15px] hover:text-[#007bff]"
                           >
                              {item.label}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </nav>

               <div className="flex space-x-4">
                  <button className="px-4 py-2 text-sm rounded-full font-bold text-red-600 border-2 bg-transparent hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300">
                     Login
                  </button>
                  <button className="px-4 py-2 text-sm rounded-full font-bold text-white  border-2 border-red-600 hover:text-red-500 bg-red-600 transition-all ease-in-out duration-300 hover:bg-transparent ">
                     Sign up
                  </button>
               </div>
            </div>
         </header>
      </div>
   );
}

export default Naver;
