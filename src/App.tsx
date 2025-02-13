import { Suspense, lazy } from "react";
import ScissorsLoader from "./components/loading/ScissorsLoader";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Collections from "./components/pages/Collections";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import ModernNav from "./components/navigation/ModernNav";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<ScissorsLoader />}>
      <div className="relative">
        <ModernNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {import.meta.env.VITE_TEMPO && <Route path="/tempobook/*" />}
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </div>
    </Suspense>
  );
}

export default App;
