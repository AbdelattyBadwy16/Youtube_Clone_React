import { Outlet } from "react-router"
import Header from "./Header"
import NavBar from "./NavBar"

function AppLayout({ selectedCat, setSelctedCat }) {
    
    return (
        <div className="grid grid-rows-[1fr_9fr] h-[100vh]">
        <Header></Header>
        <div className="grid grid-cols-[3fr_9fr] sm:grid-cols-[2fr_8fr] lg:grid-cols-[1fr_9fr]">
          <NavBar selectedCat={selectedCat} setSelctedCat={setSelctedCat}></NavBar>
          <Outlet></Outlet>
        </div>
      </div>
    )

}

export default AppLayout