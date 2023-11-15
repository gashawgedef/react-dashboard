import styled from "styled-components"
import MainNav from "./MainNav"
import Logo from '../Components/Logo'


const StyledSidebar=styled.aside `
 background-color:gray;
 padding:3.2rem 2.4rem;
 border-right:1px solid var(--color-grey-100);
 grid-row:1/-1;

`
function Sidebar() {
  return (
    <StyledSidebar>
       <Logo/>
       <MainNav/> 
       
    </StyledSidebar>
  )
}

export default Sidebar
