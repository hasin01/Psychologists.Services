
import HomePage from "./components/page/HomePage/HomePage";
import FavoritesPage from "./components/page/FavoritesPage/FavoritesPage";
import PsychologistsPage from "./components/page/PsychologistsPage/PsychologistsPage";
import NotFaund from "./components/page/NotFaund/NotFaund";
import Leyaut from "./components/Leyaut/Leyaut";
import {  Route, Routes } from "react-router-dom";
import "./index.css"



function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Leyaut />}>
          <Route index  element={<HomePage />} />
          <Route path="/favorites" element={ <FavoritesPage />} />
          <Route path="/psychologists" element={<PsychologistsPage />} />
          <Route path="*" element={<NotFaund />} />
        </Route>
      </Routes>
  
    </>
  )
}

export default App
