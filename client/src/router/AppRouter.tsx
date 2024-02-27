import { Route, Routes } from "react-router-dom"
import { Main } from "../pages/Main"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/test" element={<div><h1>Esta es una prueba</h1></div>} />
        <Route path="/home" element={<div><h1>Esta es una prueba</h1></div>} />
        
        <Route path="/*" element={<Main />} />
    </Routes>
  )
}
