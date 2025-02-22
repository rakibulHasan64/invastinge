import BlogItem from "./BlogItem";

function Blog() {
   return (
      <>
         <div className="bg-[#F5F9FF]">
            <div className="container mx-auto py-20">
               <h3 className="text-[70px] text-center font-bold">Our Blog</h3>
               <p className="text-[20px] text-center">Home - <span className="text-[#5965E7] font-bold">Bolg</span></p>

               <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center mt-16 p-3">
                  <BlogItem />
                  <BlogItem />
                  <BlogItem />
                  <BlogItem />

                  <BlogItem />
                  <BlogItem />
                  <BlogItem />
                  <BlogItem />


                  <BlogItem />
                  <BlogItem />
                  <BlogItem />
                  <BlogItem />

               </div>

               <ul className="flex space-x-5 justify-center font-[sans-serif] mt-14">
                  <li className="flex items-center justify-center shrink-0 bg-gray-100 w-9 h-9 rounded-md">
                     <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-400" viewBox="0 0 55.753 55.753">
                        <path
                           d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                           data-original="#000000" />
                     </svg>
                  </li>
                  <li
                     className="flex items-center justify-center shrink-0 shadow-2xl shadow-red-500 bg-red-500  border hover:border-red-500 border-red-500 cursor-pointer text-base font-bold text-white px-[13px] h-9 rounded-md">
                     1
                  </li>
                  <li
                     className="flex items-center justify-center shrink-0 border hover:border-red-500 cursor-pointer text-base font-bold text-gray-800 px-[13px] h-9 rounded-md">
                     2
                  </li>
                  <li
                     className="flex items-center justify-center shrink-0 border hover:border-red-500 cursor-pointer text-base font-bold text-gray-800 px-[13px] h-9 rounded-md">
                     3
                  </li>
                  <li
                     className="flex items-center justify-center shrink-0 border hover:border-red-500 cursor-pointer text-base font-bold text-gray-800 px-[13px] h-9 rounded-md">
                     4
                  </li>
                  <li className="flex items-center justify-center shrink-0 border hover:border-red-500 cursor-pointer w-9 h-9 rounded-md">
                     <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-400 rotate-180" viewBox="0 0 55.753 55.753">
                        <path
                           d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                           data-original="#000000" />
                     </svg>
                  </li>
               </ul>
            </div>

         </div>
         
      </>
   );
}

export default Blog;