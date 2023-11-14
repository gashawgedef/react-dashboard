import { Outlet } from "react-router-dom"
import Header from "../ui/Header"
import Sidebar from "../ui/Sidebar"
import styled from "styled-components"


const StyledDiv=styled.div`
display:grid;
grid-template-columns:26rem 1fr;
grid-template-rows:auto 1fr;
height:100vh ;

`

const MAIN=styled.main`
 background-color:var(--color-grey-5);
 padding:4rem 4.8rem 6.4rem;
`


function AppLayout() {
  return (
    <StyledDiv>
      <Header />
      <Sidebar/>
      <MAIN>
      <Outlet />
      </MAIN>
     
    </StyledDiv>
  )
}

export default AppLayout
