import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Footer from "./Components/Footer/Footer";
import PromoModal from "./Components/PromoModal/PromoModal";
import ReviewPage from "./Pages/ReviewPage/ReviewPage";
import HomePage from "./Pages/HomePage/HomePage";
import BonusPage from "./Pages/BonusPage/BonusPage";
import SpinsPage from "./Pages/SpinsPage/SpinsPage";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <Router>
      {isLoading && (
        <div id="preloader" aria-hidden="true">
          <div className="preloader-logo">
            <img
              src="/imgs/logo.png"
              alt="Cosmobet"
              width="180"
              height="auto"
            />
          </div>
        </div>
      )}

      <Header />

      <main className="site-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/bonus" element={<BonusPage />} />
          <Route path="/spins" element={<SpinsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />

      <Login />
      <Register />
      <PromoModal />
    </Router>
  );
}
