
import { FaLocationDot, FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Masseage() {
   return (
      <>
         <div className="bg-[#F5F9FF]">
            <div className="container mx-auto py-10 sm:py-20">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  {/* Left Section */}
                  <div className="col-span-12 sm:col-span-8">
                     <div>
                        <div>
                           <h3 className="text-center sm:text-start text-[20px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-bold">
                              Have a question?<br />
                              <span className="text-[#5965E7]">Just Send a Message</span>
                           </h3>
                           <p className="text-center sm:text-start text-[16px] sm:text-[18px] text-wrap md:text-[20px] lg:text-[24px]">
                              When, while lovely valley teems with vapour around me and<br />
                              meridian the upper impenetrable.
                           </p>
                        </div>
                        <div className="mt-8 sm:mt-16 p-3">
                           <form>
                              <div className="space-y-6">
                                 {/* Input Fields */}
                                 <div className="flex flex-col sm:flex-row justify-between gap-5">
                                    <input
                                       className="p-4 py-5 w-full sm:w-1/2 rounded-[16px] bg-[#fff] border border-gray-200"
                                       type="text"
                                       placeholder="First name"
                                    />
                                    <input
                                       className="p-4 py-5 w-full sm:w-1/2 rounded-[16px] bg-[#fff] border border-gray-200"
                                       type="text"
                                       placeholder="Last name*"
                                    />
                                 </div>
                                 <div className="flex flex-col sm:flex-row justify-between gap-5">
                                    <input
                                       className="p-4 py-5 w-full sm:w-1/2 rounded-[16px] bg-[#fff] border border-gray-200"
                                       type="text"
                                       placeholder="Enter your email*"
                                    />
                                    <input
                                       className="p-4 py-5 w-full sm:w-1/2 rounded-[16px] bg-[#fff] border border-gray-200"
                                       type="text"
                                       placeholder="Enter phone number*"
                                    />
                                 </div>
                                 <textarea
                                    placeholder="Write your message here*"
                                    className="rounded-[16px] border p-4 bg-[#fff] w-full py-5 border-gray-200"
                                 ></textarea>
                              </div>
                              {/* Submit Button */}
                              <div className="mt-12">
                                 <div className="flex flex-col sm:flex-row gap-7 justify-between">
                                    <div className="flex gap-7 items-center">
                                       <input
                                          id="radio"
                                          type="radio"
                                          name="value1"
                                          className="w-5 h-5 hidden peer"
                                          defaultChecked
                                       />
                                       <label
                                          htmlFor="radio"
                                          className="relative flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-6 h-6 cursor-pointer border-2 border-green-500 rounded-full overflow-hidden"
                                       >
                                          <span className="bg-green-500 rounded-full w-3 h-3"></span>
                                       </label>
                                       <span className="text-[14px] sm:text-[16px]">
                                          Your email address will not be published. Required fields are marked *
                                       </span>
                                    </div>
                                    <div>
                                       <button className="px-5 font-mono p-3 rounded-xl shadow-2xl shadow-[#0554F2] text-white bg-[#0554F2]">
                                          send message
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           </form>
                        </div>

                     </div>
                  </div>
                  {/* Right Section */}
                  <div className="col-span-12 sm:col-span-4 py-10 sm:py-20 p-4">
                     <div className="bg-[#5965E7] text-white rounded-[16px]">
                        <div className="p-7">
                           <h2 className="text-[24px] sm:text-[32px] md:text-[36px] font-bold">
                              Get In Touch
                           </h2>
                           <p className="text-[14px] sm:text-[16px] md:text-[18px]">
                              Therefore always free from repetition, injected humour, or<br />
                              non-characteristic.
                           </p>
                           <div className="border-b-[1px] border-[#fff] mt-6"></div>
                           {/* Contact Items */}
                           <div className="mt-10 space-y-8">
                              {[
                                 {
                                    icon: MdEmail,
                                    title: "Email us :",
                                    text: "info@example.com",
                                 },
                                 {
                                    icon: FaPhoneFlip,
                                    title: "Call us :",
                                    text: "+1 800 123 456",
                                 },
                                 {
                                    icon: FaLocationDot,
                                    title: "Visit us :",
                                    text: "27 Division St, New York,\nNY 10002, USA",
                                 },
                              ].map(({ icon: Icon, title, text }, index) => (
                                 <div className="sm:flex mx-auto sm:mx-0 gap-8 items-center" key={index}>
                                    <div className="w-[55px] h-[55px] rounded-full border bg-[#5965E7] flex items-center justify-center">
                                       <Icon className="text-2xl" />
                                    </div>
                                    <div>
                                       <strong>{title}</strong>
                                       <p>{text}</p>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>



      </>
   );
}

export default Masseage;