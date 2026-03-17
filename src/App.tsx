import { Route, Routes } from "react-router"
import { Header } from "./components/Header/Header"
import { Home } from "./Pages/Home/Home"
import { Dish } from "./Pages/Dish/Dish"
import { AddDish } from "./Pages/Add-dish/AddDish"

function App() {
  
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dish/:id" element={<Dish/>}/>
        <Route path="/dish/create" element={<AddDish/>}/>
      </Routes>
    </>
  )
}

export default App
