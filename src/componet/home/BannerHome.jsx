
function BannerHome() {
   return (
      <>
         <div className="bg-[#CBD7EE]">
            <div className="container mx-auto py-20">
               <div className="md:flex justify-between items-center sm:p-3">
                  <div className="p-3 space-y-3">
                     <h1 className="text-4xl text-center sm:text-6xl sm:text-start font-bold">
                        Real estate
                        <img className="inline-block" src="/logo.png" alt="Logo" />
                        <br />
                        investing for everyone!
                     </h1>

                     <p className="text-[20px] text-center sm:text-start">
                        Splitimmo is a Swiss real estate crowdfunding platform.<br />
                        Or participative investment, which offers a turnkey service to invest in Swiss<br />
                        real estate from 10,000 CHF.
                     </p>

                     <div className="text-center sm:text-start">
                        <button className="px-5 font-mono p-3 rounded-xl shadow-lg text-white bg-[#0554F2]">
                           Invest now
                        </button>
                     </div>
                  </div>
                  <div>
                     <img src="/Group 142 (1).png" alt="Real Estate" />
                  </div>
               </div>
            </div>
         </div>

         
      </>
   );
}

export default BannerHome;