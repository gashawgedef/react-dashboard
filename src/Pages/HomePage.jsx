import Logo from '../Components/Logo'
import NavBar from '../Components/NavBar'
import '../Pages/Home.css'
import styled from 'styled-components'

const H1 = styled.h1`
    font-size: 30px;
    font-weight: 600;
`

const BUTTON = styled.button`
    font-size: 1.4rem;
    padding: 1.2rem 1.4rem;
    font-weight: 500;
    border: none;
    border-radius: 7px;
    background-color: var(--color-brand-500);
    color: white;
    margin: 2rem;
    cursor: pointer; 
`

const INPUT = styled.input`
     font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid $gray;
  outline: 0;
  font-size: 1.3rem;
  color: $white;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
`

const PRIMARYBUTTON = styled.button`
     border: 1px solid #000;
  background-color: transparent;
  color: #000;
  padding: 0.5rem 1rem;
`
const INPUT_DIV = styled.div`
    margin: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`
const CUSTOMINPUT = styled.input`
    height: 45px;
    width: 80%;
    outline: none;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding-left: 15px;
    font: 16px;
`

const LABEL = styled.label`
    font-size: 20px;
    font-weight: 400;
    padding: 1rem;
`
const INPUT_OUTER_DIV = styled.div`
    display: flex;
    flex-direction: column;
    height: 600px;
    border: 1px solid #92a8d1;
    padding: 2rem;
    width: 50%;
    padding: 2rem;
    margin: 5rem;
`


function HomePage() {
    return (
        <>
            <div className='home-page-nav-container'>
                <Logo />
                <NavBar />
            </div>
            <H1>Welcome to This Form</H1>
            <INPUT placeholder='ENTER NAME' />
            <BUTTON onClick={() => alert("This is Check in")}>Check In</BUTTON>
            <BUTTON onClick={() => alert("This is Check out")}>Check Out</BUTTON>
            <PRIMARYBUTTON>Welcome</PRIMARYBUTTON>
            <INPUT_OUTER_DIV>
                <INPUT_DIV>
                    <LABEL>First Name</LABEL>
                    <CUSTOMINPUT />
                </INPUT_DIV>
                <INPUT_DIV>
                    <LABEL>Last Name</LABEL>
                    <CUSTOMINPUT />
                </INPUT_DIV>
                <INPUT_DIV>
                    <LABEL>Email </LABEL>
                    <CUSTOMINPUT />
                </INPUT_DIV>
                <INPUT_DIV>
                <BUTTON type='submit' onClick={()=>alert("Registered Successsfully")} style={{textAlign:'center',margin:'auto'}}>Register</BUTTON>
        
                </INPUT_DIV>
            </INPUT_OUTER_DIV>


        </>
    )
}
export default HomePage