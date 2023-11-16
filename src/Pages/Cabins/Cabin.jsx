
// import { useEffect } from "react"
// import { getCabins } from "../../services/apiCabins"
import { useState } from "react";
import CabinTable from "./CabinTable";
import Button from '../../ui/Button'
import Row from '../../ui/Row'
import CreateCabinForm from "./CreateCabinForm";

function Cabin() {
  const[showForm,setShowForm]=useState(false) 
//   function Cabins(){
//     useEffect(function(){
//       getCabins().then((data)=>console.log(data));

//     },[]);
//   }
//  Cabins();
  return (
    <Row>
    <CabinTable/>
    <Button onClick={()=>setShowForm((show)=>!show)}>Add New Table</Button>
    {showForm &&<CreateCabinForm/>}
    </Row>
  )
}

export default Cabin
