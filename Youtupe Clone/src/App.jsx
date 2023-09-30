import NavBar from "./components/NavBar"
import Header from "./components/Header"
import ChannelDetail from "./components/ChannelDetail"
import Feed from "./components/Videos"
import VideoDetail from "./components/VideoDetail"
import SearchFeed from "./components/SearchFeed"
import "./index.css"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import PageNotFound from "./components/PageNotFound"
import { useState } from "react"
import AppLayout from "./components/AppLayout"

function App() {
  const [selectedCat, setSelctedCat] = useState("New")

  return (

    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout selectedCat={selectedCat} setSelctedCat={setSelctedCat}></AppLayout>}>
          <Route exact path='/' element={<Feed selectedCat={selectedCat} setSelctedCat={setSelctedCat} />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
