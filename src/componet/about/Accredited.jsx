function Accredited() {
   return (
      <>
         <div className="bg-[#F5F5F5]">
            <div className="container mx-auto py-16">
               <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-3 sm:p-1">
                  <div className="w-full sm:w-1/1 space-y-6 sm:space-y-8">
                     <h4 className="text-2xl sm:text-[36px] font-bold text-center sm:text-start">
                        Get accredited
                     </h4>
                     <p className="text-[18px] sm:text-[20px] leading-loose text-[#3E4A65] font-medium">
                        Splitimmo takes care of all the steps with the mortgage provider, from the negotiation of the financing to the validation of your credit application.<br />
                        Each property is financed on average at 40% by the investors' own funds and at 60% by a mortgage
                     </p>

                     <p className="text-[18px] sm:text-[20px] text-[#3E4A65] leading-loose font-medium">
                        For example, for an investment of CHF 50'000 (40%), you hold a mortgage of CHF 75'000 (60%).
                        Each co-owner therefore holds a part of the mortgage, and the specificity of our model is that the debt is decoupled between each co-owner. This means that each investor's liability is limited to the proportion of his investment.
                     </p>
                  </div>

                  <div className="w-full ">
                     <img className="w-full" src="/public/Mask Group (3).png" alt="Image" />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default Accredited;
