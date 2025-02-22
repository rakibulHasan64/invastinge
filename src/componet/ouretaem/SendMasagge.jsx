

function SendMessage() {

   return (
      <div className="bg-white">
         <div className="container mx-auto py-10 sm:py-16 md:py-20">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold">
               Lorem Ipsum{' '}
               <span className="text-[#5965E7] ">Just Send a<br /> Message</span>
            </h1>

            <div className="w-full sm:w-3/4 lg:w-1/2 mx-auto mt-10 sm:mt-16 md:mt-20 p-4 sm:p-6 rounded-lg">
               <form>
                  <div className="space-y-6">
                     {/* ইনপুট ফিল্ডস */}
                     <div className="flex flex-col sm:flex-row justify-between gap-5">
                        <div className="w-full sm:w-1/2">
                           
                           <input
                              id="firstName"
                              className="mt-1 p-4 py-5 w-full rounded-lg bg-white border  border-gray-300"
                              type="text"
                              placeholder="First name"
                           />
                        </div>
                        <div className="w-full sm:w-1/2">
                           
                           <input
                              id="lastName"
                              className="mt-1 p-4 py-5 w-full rounded-lg bg-white border border-gray-300"
                              type="text"
                              placeholder="Last name*"
                              required
                           />
                        </div>
                     </div>
                     <div className="flex flex-col sm:flex-row justify-between gap-5">
                        <div className="w-full sm:w-1/2">
                           
                           <input
                              id="email"
                              className="mt-1 p-4 py-5 w-full rounded-lg bg-white border border-gray-300"
                              type="email"
                              placeholder="Enter your email*"
                              required
                           />
                        </div>
                        <div className="w-full sm:w-1/2">
                           
                           <input
                              id="phone"
                              className="mt-1 p-4 py-5 w-full rounded-lg bg-white border border-gray-300"
                              type="tel"
                              placeholder="Enter phone number*"
                              required
                           />
                        </div>
                     </div>
                     <div>
                        
                        <textarea
                           id="message"
                           placeholder="Write your message here*"
                           className="mt-1 p-4 py-5 w-full rounded-lg bg-white border border-gray-300"
                           required
                        ></textarea>




                        <div>

                           <div className="border border-[#0554F2] mt-7">
                              <div className="p-6 py-16">
                                 <img className="mx-auto mb-2" src="/public/Group 318.png" alt="" />
                                 <h3 className="text-center">Darg & Drop Your File Here</h3>
                              </div>

                           </div>

                        </div>
                     </div>
                  </div>
                  {/* সাবমিট বাটন */}
                  <div className="mt-12 flex flex-col sm:flex-row gap-7 justify-between items-center">
                     <div className="flex gap-3 items-center">
                        <input
                           id="consent"
                           type="checkbox"
                           className="w-5 h-5 text-green-500 border-gray-300 rounded focus:ring-green-500"
                           required
                        />
                        <label
                           htmlFor="consent"
                           className="text-sm sm:text-base text-gray-700"
                        >
                           Your email address will not be published. Required fields are
                           marked *
                        </label>
                     </div>
                     <button
                        type="submit"
                        className="px-5 py-3 rounded-xl  text-white shadow-2xl  shadow-[#0554F2] bg-[#0554F2] hover:bg-[#0544c3] transition"
                     >
                        Send Message
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}

export default SendMessage;
