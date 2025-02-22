function Stap() {
   return (
      <div className="bg-[#F5F9FF]">
         <div className="w-[90%] lg:w-[90%] mx-auto py-20">
            {/* Header */}
            <h3 className="text-[30px] lg:text-[45px] text-center font-bold">
               How It Works <span>In 4 Steps</span>
            </h3>

            {/* Step Container */}
            <div className="space-y-16 mt-16 flex flex-col">
               {/* Step 1 */}
               <div className="flex flex-col lg:flex-row items-center justify-start gap-10">
                  <div className="p-6 lg:p-9 rounded-2xl bg-white shadow-2xl">
                     <img src="/Frame (1).png" alt="Step Icon" className="w-[80px] lg:w-auto" />
                  </div>
                  <div className="space-y-3 text-center lg:text-start">
                     <h3 className="text-[24px] lg:text-[36px] font-bold">Make an Investment</h3>
                     <p className="text-[15px] lg:text-[17px] text-[#3E4A65] lowercase">
                        THE LOAN IS MADE TO A COMPANY THAT OWNS ONLY THE REAL ESTATE PROJECT AND HAS NO <br />RECEIVABLES FROM OTHER PROJECTS.

                     </p>
                  </div>
               </div>

               {/* Step 2 */}
               <div className="flex justify-end">
                  <div className="flex flex-col lg:flex-row items-center   gap-10 ">
                     <div className="p-6 lg:p-9 rounded-2xl bg-white shadow-2xl">
                        <img src="/Frame (1).png" alt="Step Icon" className="w-[80px] lg:w-auto" />
                     </div>
                     <div className="space-y-3 text-center lg:text-start">
                        <h3 className="text-[24px] lg:text-[36px] font-bold">Receive Your Returns</h3>
                        <p className="text-[15px] lg:text-[17px] text-[#3E4A65] lowercase ">
                           THE DEVELOPER REPORTS THE PROGRESS AND FINANCIAL FLOWS OF THE PROJECT TO <br></br>SPLITIMMO. WE SUMMARIZE THIS INFORMATION AND DISPLAY IT ON YOUR ONLINE <br />DASHBOARD FOR EASY REFERENCE.
                        </p>
                     </div>
                  </div>
               </div>






               <div className="flex flex-col lg:flex-row items-center justify-start gap-10">
                  <div className="p-6 lg:p-9 rounded-2xl bg-white shadow-2xl">
                     <img src="/Frame (1).png" alt="Step Icon" className="w-[80px] lg:w-auto" />
                  </div>
                  <div className="space-y-3 text-center lg:text-start">
                     <h3 className="text-[24px] lg:text-[36px] font-bold">Make an Investment</h3>
                     <p className="text-[15px] lg:text-[17px] text-[#3E4A65] lowercase">
                        THE LOAN IS MADE TO A COMPANY THAT OWNS ONLY THE REAL ESTATE PROJECT AND HAS NO <br />RECEIVABLES FROM OTHER PROJECTS.

                     </p>
                  </div>
               </div>

               {/* Step 2 */}
               <div className="flex justify-end">
                  <div className="flex flex-col lg:flex-row items-center   gap-10 ">
                     <div className="p-6 lg:p-9 rounded-2xl bg-white shadow-2xl">
                        <img src="/Frame (1).png" alt="Step Icon" className="w-[80px] lg:w-auto" />
                     </div>
                     <div className="space-y-3 text-center lg:text-start">
                        <h3 className="text-[24px] lg:text-[36px] font-bold">Receive Your Returns</h3>
                        <p className="text-[15px] lg:text-[17px] text-[#3E4A65] lowercase ">
                           THE DEVELOPER REPORTS THE PROGRESS AND FINANCIAL FLOWS OF THE PROJECT TO <br></br>SPLITIMMO. WE SUMMARIZE THIS INFORMATION AND DISPLAY IT ON YOUR ONLINE <br />DASHBOARD FOR EASY REFERENCE.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Stap;
