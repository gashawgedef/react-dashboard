
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import Contact from './Pages/Contact'
import GlobalStyles from "./styles/GlobalStyles";
function App() {
  return (
    <>
    <GlobalStyles/>
    <BrowserRouter>
    <Routes>
      <Route  index path="/" element={<HomePage/>}/>
      <Route   path="/" element={<HomePage/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    
      
    </BrowserRouter>
    </>
  )
}
export default  App;