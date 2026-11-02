
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import App from "./App";
import ProjetDetails from "./pages/ProjetDetails";

function PortfolioAccueil() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#projects") {
      const timer = setTimeout(() => {
        document.getElementById("projects")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location]);

  return <App />;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioAccueil />} />
      <Route path="/projets/:nom" element={<ProjetDetails />} />
    </Routes>
  );
}

export default AppRoutes;
