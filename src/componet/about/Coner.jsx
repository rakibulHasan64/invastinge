import { IoCheckmarkOutline } from "react-icons/io5";

function Coner() {
   return (
      <>
         <div className="bg-[#fff]">
            <div className="container mx-auto py-20 p-3 sm:p-1">

               <h1 className="text-4xl text-center sm:text-6xl font-bold p-3 sm:p-1">
                  How to become <span className="text-[#0554F2]">a co-owner</span>
               </h1>

               <div className="flex-col sm:flex-row md:flex items-center justify-between gap-8 py-16">
                  {/* Left Section */}
                  <div className="mx-auto sm:w-1/1 w-full mb-8 sm:mb-0">
                     <h3 className="text-2xl text-center sm:text-center md:text-start sm:text-[36px] font-bold p-3 sm:p-1 mb-3">
                        Get the brochure
                     </h3>
                     <p className="text-[20px] text-center md:text-start">
                        Choose an offer that corresponds to your investment criteria and order the<br />
                        complete documentation for the property of your choice, including the<br />
                        brochure and
                     </p>

                     <div className="space-y-6 mt-16 md:text-start">
                        <ul className="flex gap-6 items-center justify-start">
                           <li className="w-[25px] h-[25px] rounded-full bg-[#0554F2] flex items-center justify-center text-white shadow-2xl">
                              <IoCheckmarkOutline />
                           </li>
                           <span className="text-[18px] sm:text-[20px] text-[#3E4A65] font-medium">Rules and regulations for <span className=""> the administration of the co-ownership</span></span>
                        </ul>

                        <ul className="flex gap-6 items-center">
                           <li className="w-[25px] h-[25px] rounded-full bg-[#0554F2] flex items-center justify-center text-white shadow-2xl">
                              <IoCheckmarkOutline />
                           </li>
                           <span className="text-[18px] sm:text-[20px] text-[#3E4A65] font-medium">Deed of sale</span>
                        </ul>

                        <ul className="flex gap-6 items-center">
                           <li className="w-[25px] h-[25px] rounded-full bg-[#0554F2] flex items-center justify-center text-white shadow-2l">
                              <IoCheckmarkOutline />
                           </li>
                           <span className="text-[18px] sm:text-[20px] text-[#3E4A65] font-medium">Mortgage financing contract</span>
                        </ul>

                        <ul className="flex gap-6 items-center">
                           <li className="w-[25px] h-[25px] rounded-full bg-[#0554F2] flex items-center justify-center text-white shadow-2xl">
                              <IoCheckmarkOutline />
                           </li>
                           <span className="text-[18px] sm:text-[20px] text-[#3E4A65] font-medium">Mortgage financing contract</span>
                        </ul>

                        <button className="mt-5 mb-5 text-md font-bold px-5 py-3 rounded-2xl text-white shadow-2xl shadow-[#0554F2] bg-[#0554F2] w-full sm:w-auto">
                           Get Started
                        </button>
                     </div>

                  </div>

                  {/* Right Section */}
                  <div className=" relative sm:w-1/1 w-full">
                     <img className="w-full" src="/public/Group about image.png" alt="" />

                     <div className="bg-white shadow-2xl sm:w-[25%] w-[40%] flex items-center justify-center p-3 rounded-[16px] absolute top-[30%] sm:top-[40%] sm:right-[10%] right-[10%]">
                        <img className="w-1/1 md:w-[451px]" src="/public/ABOUT ICON.png" alt="" />
                     </div>
                  </div>

               </div>

            </div>
         </div>
      </>
   );
}

export default Coner;
