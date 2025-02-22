import { Route, Routes } from "react-router-dom"
import Outlate from "./componet/outlate/Outlate"
import AllLayout from "./componet/home/AllLayout"
import AllLoyoutAbut from "./componet/about/AllLoyoutAbut"
import AllFuter from "./componet/Futer/AllFuter"
import AllQution from "./componet/qution/AllQution"
import AllBlog from "./componet/Blog/AllBlog"

import ContactAll from "./componet/Contact/ContactAll"
import AllTame from "./componet/ouretaem/AllTame"
import InvastAllItem from "./componet/Invast/InvastAllItem"

function App() {
  

  return (
    <>
  

      

      
        <Routes>
        <Route path="/" element={<Outlate />}>
          
          <Route index element={<AllLayout />} />
          <Route path="/Team" element={<AllLoyoutAbut />} />
          <Route path="Feature" element={<AllFuter />} />
          <Route path="question" element={<AllQution />} />
          <Route path="Blog" element={<AllBlog />} />
          <Route path="contact" element={<ContactAll />} />
          <Route path="Tame" element={<AllTame />} />
          <Route path="next" element={<InvastAllItem />} />
        </Route>
  
        </Routes>
    
    
    

    </>
  )
}

export default App
