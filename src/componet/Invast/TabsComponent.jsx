import  { useState } from 'react';

function TabsComponent() {
   const [activeTab, setActiveTab] = useState('home');

   const handleTabClick = (tab) => {
      setActiveTab(tab);
   };

   return (
      <div className="font-sans p-4">
         <ul className="flex gap-4 bg-gray-100 rounded-2xl p-1 w-max overflow-hidden mx-auto">
            <li
               onClick={() => handleTabClick('home')}
               className={`tab rounded-2xl font-semibold text-center text-sm py-3 px-6 tracking-wide cursor-pointer ${activeTab === 'home' ? 'text-white bg-blue-600' : 'text-gray-600'
                  }`}
            >
               Home
            </li>
            <li
               onClick={() => handleTabClick('settings')}
               className={`tab rounded-2xl font-semibold text-center text-sm py-3 px-6 tracking-wide cursor-pointer ${activeTab === 'settings' ? 'text-white bg-blue-600' : 'text-gray-600'
                  }`}
            >
               Settings
            </li>
            <li
               onClick={() => handleTabClick('profile')}
               className={`tab rounded-2xl font-semibold text-center text-sm py-3 px-6 tracking-wide cursor-pointer ${activeTab === 'profile' ? 'text-white bg-blue-600' : 'text-gray-600'
                  }`}
            >
               Profile
            </li>
         </ul>

         <div className="tab-content max-w-2xl mt-8 mx-auto">
            {activeTab === 'home' && (
               <div>
                  
                  <div className="">
                     <img className='mx-auto rounded-2xl' src="https://images.pexels.com/photos/1322185/pexels-photo-1322185.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                  </div>
               </div>
            )}
            {activeTab === 'settings' && (
               <div>
                  <div className="">
                     <img className='mx-auto rounded-2xl' src="https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                  </div>
               </div>
            )}
            {activeTab === 'profile' && (
               <div>
                  <div className="">
                     <img className='mx-auto rounded-2xl' src="https://images.pexels.com/photos/585752/pexels-photo-585752.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                  </div>
               </div>
            )}
         </div>
      </div>
   );
}

export default TabsComponent;
