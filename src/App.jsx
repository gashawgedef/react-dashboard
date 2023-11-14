
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from './Pages/HomePage';
import Dashboard from './Pages/Dashboard'
import Users from './Pages/Users'
import Settings from './Pages/Settings'
import Login from './Pages/Login'
import AppLayout from './Pages/AppLayout'
import GlobalStyles from "./styles/GlobalStyles";
import Contact from "./Pages/Contact";
import PageNotFound from "./Pages/PageNotFound";
function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index  element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="home" element={<HomePage />} />
            <Route path="contacts" element={<Contact />} />
            <Route path="setting" element={<Settings />} />
            <Route path="users" element={<Users />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;