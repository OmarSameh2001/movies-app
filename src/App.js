import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router";
import LanguageContext from "./context/language";
import React, { Suspense, useState } from "react";

function App() {
  const [lang, setLang] = useState("en");
  const Movies = React.lazy(() => import("./pages/Movies/Movies"));
  const MoviePage = React.lazy(() => import("./pages/MoviePage/MoviePage"));
  const Favourites = React.lazy(() => import("./pages/Favourites/Favourites"));
  const Register = React.lazy(() => import("./pages/Register/Register"));
  const NotFound = React.lazy(() => import("./pages/NotFound/NotFound"));
  return (
    <div className="App" dir={lang === "en" ? "ltr" : "rtl"}>
      <BrowserRouter>
        <LanguageContext.Provider value={{ lang, setLang }}>
          <Navbar />
          <Suspense fallback={<p>Loading...</p>}>
            <Routes>
              <Route path="/" element={<Movies />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/movies/:id" element={<MoviePage />} />
              <Route path="/favourites" element={<Favourites />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </LanguageContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
