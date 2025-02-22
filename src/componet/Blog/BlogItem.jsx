

function BlogItem() {
   return (
      <>
         
         <div className="bg-white shadow-2xl  rounded-2xl">
            <img className="relative w-full object-cover" src="/public/latastcard.png" alt="" />
            <button className="px-10 py-3 -translate-y-190 bg-[#FFFFFF] bg-opacity-100 rounded-[8px] absolute">
               14 Sep, 20
            </button>


            <div className="mt-5 p-3 space-y-2 py-8">
               <div className="">
                  <h3 className="text-center text-2xl font-bold">Splitimmo étend son offre en Suisse Allemande !</h3>
                  <p className="text-[15px] font-mono leading-7 text-center mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, voluptatum. Iusto deserunt eos quas ad molestiae quod, est enim, reiciendis, magnam nemo natus nobis et deleniti neque atque nulla nisi.</p>
               </div>

               <div className="text-center mb-7 mt-14">
                  <button className="px-5 font-mono text-[20px] p-3 rounded-xl shadow-2xl hover:shadow-red-600 text-red-500 border border-e-red-600 hover:text-white hover:bg-red-600 ">More Details </button>
               </div>
            </div>
         </div>
         
         
      </>
   );
}

export default BlogItem;