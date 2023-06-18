import { Route, Routes } from "react-router-dom";
import HomePage from "./Routes/HomePage";
import AboutPage from "./Routes/AboutPage";
import PageLogement from "./Routes/PageLogement";
import NotFoundPage from "./Routes/NotFoundPage";

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/page-logement" element={<PageLogement />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default App;
