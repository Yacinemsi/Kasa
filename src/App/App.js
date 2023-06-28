import { Route, Routes } from "react-router-dom";
import HomePage from "../Routes/HomePage";
import AboutPage from "../Routes/AboutPage";
import PageLogement from "../Routes/PageLogement";
import NotFoundPage from "../Routes/NotFoundPage";
import RedirectToNotFound from "../Routes/RedirectToNotFound";
import LogementContext from "../component-logement/LogementContext";
import logements from "../data/logements.json";

const App = () => (
  <LogementContext.Provider value={logements}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/logement/:id" element={<PageLogement />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<RedirectToNotFound />} />
    </Routes>
  </LogementContext.Provider>
);

export default App;
