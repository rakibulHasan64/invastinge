import InbastItem from "./InbastItem";



function InbastCard() {
   return (
      <>
         <div className="container mx-auto py-16">
            <h3 className="text-center text-[#0E1336] text-4xl sm:text-6xl">
               Discover Our <span className="text-[#5965E7]">latest offers</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-12 p-4 sm:p-3">



               
               <InbastItem />
               
               <InbastItem />
               <InbastItem />
               <InbastItem />
               <InbastItem />
               <InbastItem />




            </div>


            <div className="text-center mb-7 mt-14">
               <button className="px-5 font-mono text-[20px] p-3 rounded-xl shadow-2xl shadow-green-400  text-white bg-green-400">Explore more</button>
            </div>

                    
         </div>
         
      </>
   );
}

export default InbastCard;