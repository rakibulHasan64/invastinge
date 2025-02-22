function FinilazInbast() {
   return (
      <div className="bg-[#F5F5F5]">
         <div className="container mx-auto py-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-3 sm:p-1">
               {/* Left Section - Image */}
               <div className="relative w-full lg:w-1/2 mb-8 lg:mb-0">
                  <img className="w-full" src="/public/Mask Group (4).png" alt="Image" />
                  <div className="bg-white hidden shadow-2xl sm:w-[25%] w-[40%] flex items-center justify-center p-3 rounded-[16px] absolute top-[40%] sm:top-[40%] -right-[50px] sm:-right-[10%]">
                     <img src="/public/ABOUT ICON.png" alt="Icon" />
                  </div>
               </div>

               {/* Right Section - Text */}
               <div className="w-full lg:w-1/2 space-y-6">
                  <h4 className="text-2xl sm:text-[36px] font-bold text-center lg:text-start">
                     Get accredited
                  </h4>
                  <p className="text-[18px] sm:text-[20px] leading-loose text-[#3E4A65] font-medium">
                     Splitimmo takes care of all the steps with the mortgage provider, from the negotiation of the financing to the validation of your credit application.<br />
                     Each property is financed on average at 40% by the investors' own funds and at 60% by a mortgage.
                  </p>

                  <p className="text-[18px] sm:text-[20px] text-[#3E4A65] leading-loose font-medium">
                     For example, for an investment of CHF 50'000 (40%), you hold a mortgage of CHF 75'000 (60%).
                     Each co-owner therefore holds a part of the mortgage, and the specificity of our model is that the debt is decoupled between each co-owner. This means that each investor's liability is limited to the proportion of his investment.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default FinilazInbast;
