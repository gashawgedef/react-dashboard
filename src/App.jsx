
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
import Booking from "./Pages/Bookings/Booking";
import Cabin from "./Pages/Cabins/Cabin";
import Guest from "./Pages/Guests/Guest";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});
function App() {
  return (

    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false }/>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="home" element={<HomePage />} />
            <Route path="contacts" element={<Contact />} />
            <Route path="setting" element={<Settings />} />
            <Route path="users" element={<Users />} />
            <Route path="cabins" element={<Cabin />} />
            <Route path="bookings" element={<Booking />} />
            <Route path="guests" element={<Guest />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster position=" top-center"  gutter={12} containerStyle={{margin:"8px"}} toastOptions={{
        success:{
          duration:3000,
        },
        error:{
          duration:5000,
        },
        style:{
          fontSize:'16px',
          maxWidth:'500px',
          padding:'16px 24px',
          backgroundColor:"var(--color-grey-0)",
          color:"var(--color-grey-700)", 

        }
      }}/>
    </QueryClientProvider>

  )
}
export default App;