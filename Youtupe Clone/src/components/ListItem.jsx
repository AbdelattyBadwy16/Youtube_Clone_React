import { useState } from "react"
import { useNavigate } from "react-router"

function ListItem({ item, selectedCat, setSelctedCat }) {

  const navigate = useNavigate();
  return (
    <li onClick={() =>{ setSelctedCat(item.name);navigate("")}} className={`p-2 text-center font-bold hover:bg-red-800 hover:rounded-full transition-all duration-300 ${selectedCat === item.name ? "bg-red-800 rounded-full" : ""}`}>
      {item.name}
    </li>
  )
}

export default ListItem
