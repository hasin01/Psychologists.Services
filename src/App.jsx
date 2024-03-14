
import HomePage from "./components/page/HomePage/HomePage";
import FavoritesPage from "./components/page/FavoritesPage/FavoritesPage";
import PsychologistsPage from "./components/page/PsychologistsPage/PsychologistsPage";
import NotFaund from "./components/page/NotFaund/NotFaund";
import Leyaut from "./components/Leyaut/Leyaut";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css"



function App() {

  return (
    <>
       
      <Routes>
        <Route path="/" element={<Leyaut />}>
          <Route path="Home" element={<HomePage />} />
          <Route path="Favorites" element={ <FavoritesPage />} />
          <Route path="Psychologists" element={<PsychologistsPage />} />
          <Route path="*" element={<NotFaund />} />
        </Route>
      </Routes>
  
    </>
  )
}

export default App
