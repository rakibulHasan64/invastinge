/* eslint-disable react/prop-types */

function TameItem({item}) {
   return (
      <>
         
         <div className=" bg-white rounded-2xl shadow-2xl border border-gray-300  ">
            <div className="p-4 ">
               <div className=" bg-[#EEEEEE] p-3">
                  <img className="mx-auto w-[356px] h-[380px]" src={item.img} alt="" />
               </div>
               <div className="mt-11 bg-white space-y-2 mb-3">
                  <h3 className="text-center text-[26px]">{item.name}</h3>
                  <p className="text-center text-[16px]">{item.title} </p>
               </div>
            </div>

         </div>

      </>
   );
}

export default TameItem;