import LatastCardItem from "./LatastCardItem";



function LatastCard() {
   const data = [
      {
         id: '1',
         img: "/Mask (1).png"
      },

      {
         id: '2',
         img: "/Mask.png"
      },

      {
         id: '3',
         img: "/latastcard.png"
      }
   ]
   return (
      <>
         <div className="bg-[#F5F9FF]">
            <div className="container mx-auto py-16">
               <h3 className="text-center text-[#0E1336] text-4xl sm:text-6xl">
                  Discover Our <span className="text-[#5965E7]">latest offers</span>
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-12 p-4 sm:p-3">
                  
                  
            
                  {
                     data.map(item => <LatastCardItem key={item.id} item={item} />)
                  }
                  
               
                  
                  
               </div>


               <div className="text-center mb-7 mt-14">
                  <button className="px-5 font-mono text-[20px] p-3 rounded-xl shadow-2xl shadow-red-600  text-white bg-red-600 ">Explore more</button>
               </div>
            </div>
         </div>

         
         
      </>
   );
}

export default LatastCard;