import { MdArrowForward } from "react-icons/md";

import { MdArrowBack } from "react-icons/md";

function Castomer() {
   return (
      <>
         <div className="bg-[#D1DCF4]">
            <div className="container mx-auto py-20 p-3">
               <div className="flex-col sm:flex justify-between items-center ">
                  <h3 className="text-[35px] text-center sm:mb-4 sm:text-[47px] md:text-[60px] text-[#0E1336]">What Our <span className="text-[#5965E7]">Customers Saying...</span></h3>

                  <div className="flex justify-center items-center gap-11">
                     <div className="w-[50px] h-[50px] shadow-2xl shadow-[#0554F2] text-white bg-[#0554F2] rounded-[8px] flex justify-center items-center">
                        <MdArrowForward />
                     </div>

                     <div className="w-[50px] h-[50px] shadow-2xl shadow-[#0554F2] text-white bg-[#0554F2]  rounded-[8px] flex justify-center items-center">
                        <MdArrowBack />
                     </div>

                  

                  </div>
               </div>



               <div className=" md:flex items-center justify-between gap-10 p-3 mt-24">
                  
                  <div className="bg-amber-50 rounded-2xl w-1/1 mb-4 sm:mb-10">
                     <div className="p-4 space-y-6 py-10">
                        <div className="space-y-5">
                           <span>⭐⭐⭐⭐⭐</span>

                           <p className="text-[20px] text-[#3E4A65] mt-2">Very well, intuitive, we understand the principle and<br /> what we are getting into, fast liquidity and very<br />
                              regular opportunities!</p>
                        </div>

                        <div className="flex items-center justify-between px-3">
                           <div className="flex items-center gap-6">
                              <img src="/public/Ellipse 21.png" alt="" /> 
                              <div className="space-y-1.5">
                                 <h3 className="text-[20px] font-bold">Jenny Wilson</h3>
                                 <p className="text-[14px] text-[#3E4A65]">UI/UX Designer</p>
                              </div>
                              
                           </div>

                           <div className="">
                              <img src="/Vector.png" alt="" />
                           </div>
                        </div>

                     </div>

                  </div>


                  <div className="bg-amber-50 rounded-2xl mb-10 w-1/1">
                     <div className="p-4 space-y-6 py-10">
                        <div className="space-y-5">
                           <span>⭐⭐⭐⭐⭐</span>

                           <p className="text-[20px] text-[#3E4A65] mt-2">Very well, intuitive, we understand the principle and<br /> what we are getting into, fast liquidity and very<br />
                              regular opportunities!</p>
                        </div>

                        <div className="flex items-center justify-between">
                           <div className="flex items-center gap-6">
                              <img src="/public/Ellipse 21.png" alt="" />
                              <div className="space-y-1.5">
                                 <h3 className="text-[20px] font-bold">Jenny Wilson</h3>
                                 <p className="text-[14px] text-[#3E4A65]">UI/UX Designer</p>
                              </div>

                           </div>

                           <div className="">
                              <img src="/Vector.png" alt="" />
                           </div>
                        </div>

                     </div>

                  </div>

               </div>

               <div className="text-center  sm:text-start">
                  <button className="px-5 font-mono p-3 rounded-xl shadow-2xl shadow-[#0554F2]  text-white bg-[#0554F2] ">See More reviews</button>
               </div>


               
               
            </div>

            

         </div>
         
      </>
   );
}

export default Castomer;