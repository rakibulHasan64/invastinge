

function InbastBanner() {
   return (
      <>
         <div className="">
            {/* Background Image */}
            <div className="relative w-full">
               <img
                  className="w-full h-[600px] object-cover"
                  src="/public/businessman-handshake-business-partners-successful-investment-deal-economic-growth-graph 1.png"
                  alt="Background"
               />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4">
               <div className="flex flex-col lg:flex-row justify-between items-center gap-20 sm:p-6  mt-10 absolute top-20 md:top-12 my-auto">
                  {/* Text Section */}
                  <div className="space-y-6 text-center md:text-start z-10 ">
                     <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                        Co-ownership
                     </h1>
                     <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] p-3 sm:p-1">
                        Co-ownership in participatory investment consists of bringing together<br />
                        investors to allow them to acquire together an existing and already<br />
                        rented investment property.
                     </p>
                     <div>
                        <button className="text-center md:text-start px-5 sm:px-6 py-3 rounded-lg shadow-lg shadow-[#0554F2] text-white bg-[#0554F2] hover:bg-blue-600 transition-all">
                           Invest now
                        </button>
                     </div>
                  </div>

                  {/* Illustration Section */}
                  <div className="flex justify-center md:justify-end z-10">
                     <img
                        className="w-[180px] sm:w-[250px] md:w-[300px] lg:w-[500px] h-auto"
                        src="/Ellipse 145.png"
                        alt="Illustration"
                     />
                  </div>
               </div>
            </div>
         </div>
         
      </>
   );
}

export default InbastBanner;