import { useEffect } from "react"
import { getCabins } from "../services/apiCabins"

function Dashboard() {
  function Cabins(){
    useEffect(function(){
      getCabins().then((data)=>console.log(data));

    },[]);
  }
 Cabins();
  return (
    <div>
      <img src="https://zrysxkndwkurtkkmvwaq.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg?t=2023-11-15T22%3A57%3A31.325Z"/>
    </div>
  )
}

export default Dashboard
