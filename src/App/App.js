import { Route, Routes } from "react-router-dom";
import HomePage from "../Routes/HomePage";
import AboutPage from "../Routes/AboutPage";
import PageLogement from "../Routes/PageLogement";
import NotFoundPage from "../Routes/NotFoundPage";
import LogementContext from "../component-logement/LogementContext";
import logements from "../data/logements.json";

const App = () => (
  <LogementContext.Provider value={logements}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/logement/:id" element={<PageLogement />} /> {}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </LogementContext.Provider>
);

export default App;
