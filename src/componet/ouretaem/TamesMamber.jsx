import TameItem from "./TameItem";

function TamesMamber() {
   const data = [
      {
         id: '1',
         name: 'Michael Grayson',
         title: 'User Researcher',
         img: '/65212 1.png'
      },
      {
         id: '2',
         name: 'Mostion Rokternis',
         title: 'User Researcher',
         img: '/Mask Group (4).png'
      },
      {
         id: '3',
         name: 'Michael Grayson',
         title: 'User Researcher',
         img: '/Mask Group (3).png'
      },
      {
         id: '4',
         name: 'Christopher Ezekiel',
         title: 'Market Researcher',
         img: '/Group about image.png'
      },
      {
         id: '5',
         name: 'Joseph David',
         title: 'Market Researcher',
         img: '/handsame.png'
      },
      {
         id: '5',
         name: 'Joseph David',
         title: 'Market Researcher',
         img: '/jhon.png'
      },
      {
         id: '3',
         name: 'Michael Grayson',
         title: 'User Researcher',
         img: '/Frame (1).png'
      },
      {
         id: '3',
         name: 'Michael Grayson',
         title: 'User Researcher',
         img: '/Group about image.png'
      },
   ]
   return (
      <>
         <div className="bg-[#F5F9FF]">
            <div className="container mx-auto py-20">
               <div className="mt-10">
                  <h3 className="text-[70px] text-center font-bold">Our Team</h3>
                  <p className="text-center mt-3 text-[20px] font-bold">
                     About Us - <span className=" text-red-600">Our Team</span>
                  </p>
               </div>


               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 p-3">
                  {
                     data.map(item => <TameItem key={item.id} item={item} />)
                  }
                  

               </div>
            </div>

         </div>
         
      </>
   );
}

export default TamesMamber;  