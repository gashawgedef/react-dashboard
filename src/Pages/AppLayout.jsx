import { Outlet } from "react-router-dom"



function AppLayout() {
  return (
    <div>
       <h1>This is App Layout</h1> 
        <Outlet/>
    </div>
  )
}

export default AppLayout
