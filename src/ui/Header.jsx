import styled from "styled-components"



const StyledHeader=styled.header`
background-color:var(--color-grey-0);
pading:1.2rem 4.8rem;
border-bottom:1px solid var(--color-grey-100);
`
function Header() {
  return (
    <StyledHeader>
       <h1>This is Header Layout</h1> 
        
    </StyledHeader>
  )
}

export default Header
