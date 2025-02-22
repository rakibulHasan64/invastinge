import { IoCheckmarkOutline } from "react-icons/io5";


function CopmletDucement() {
   return (
      <>
         <div className="bg-[#F5F5F5]">
            <div className="container mx-auto py-10">
               <div className="mx-auto md:flex items-center justify-around gap-6 py-16">

                  <div className="mx-auto relative sm:w-1/2 w-full p-3">
                     <img className="w-full object-cover" src="/public/Mask Group (2).png" alt="" />

                     <div className="bg-white shadow-2xl sm:w-[25%] sm:hidden  w-[40%] flex items-center justify-center p-3 rounded-[16px] absolute top-[30%] sm:top-[40%] sm:right-[10%] right-[10%] md:-right-[10%]">
                        <img src="/public/ABOUT ICON.png" alt="" />
                     </div>
                  </div>
                  <div className="mx-auto sm:mx-0 p-5 sm:p-2">
                     <h3 className="text-2xl text-start sm:text-[36px] font-bold p-3 sm:p-1 mb-3">
                        Complete the documents
                     </h3>
                     <div className="space-y-6 mt-5">
                        <ul className="flex gap-6 items-center">
                           <li className="w-[25px] text-md h-[25px] rounded-full bg-[#0554F2] flex items-center justify-center text-white shadow-2xl">
                              <IoCheckmarkOutline />
                           </li>
                           <span className="text-[16px] sm:text-[20px] text-[#3E4A65] font-medium">
                              Subscription form
                           </span>
                        </ul>

                        <ul className="flex gap-6 items-center">
                           <li className="w-[25px] text-md h-[25px] rounded-full bg-[#0554F2] flex items-center justify-center text-white shadow-2xl">
                              <IoCheckmarkOutline />
                           </li>
                           <span className="text-[16px] sm:text-[20px] text-[#3E4A65] font-medium">
                              Power of Attorney for the acquisition of the property
                           </span>
                        </ul>

                        <ul className="flex gap-6 items-center">
                           <li className="w-[25px] text-md h-[25px] rounded-full bg-[#0554F2] flex items-center justify-center text-white shadow-2xl">
                              <IoCheckmarkOutline />
                           </li>
                           <span className="text-[16px] sm:text-[20px] text-[#3E4A65] font-medium">
                              Application for accreditation with the mortgage provider
                           </span>
                        </ul>

                        <ul className="flex gap-6 items-center">
                           <li className="w-[25px] text-md h-[25px] rounded-full bg-[#0554F2] flex items-center justify-center text-white shadow-2xl">
                              <IoCheckmarkOutline />
                           </li>
                           <span className="text-[16px] sm:text-[20px] text-[#3E4A65] font-medium">
                              Information for the notary
                           </span>
                        </ul>

                        <button className="mt-5 text-md font-bold px-5 py-3 rounded-2xl text-white shadow-2xl shadow-red-600 bg-red-600">
                           Get Started
                        </button>
                     </div>
                  </div>


                  
               </div>

            </div>

         </div>
         
      </>
   );
}

export default CopmletDucement;