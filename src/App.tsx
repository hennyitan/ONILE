import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import Onboarding from "./pages/Onboarding";
import Onboarding from "./pages/Onboarding1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/login-page":
        title = "";
        metaDescription = "";
        break;
      case "/register":
        title = "";
        metaDescription = "";
        break;
      case "/onboarding-1":
        title = "";
        metaDescription = "";
        break;
      case "/onboarding-2":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/onboarding-1" element={<Onboarding />} />
      <Route path="/onboarding-2" element={<Onboarding />} />
    </Routes>
  );
}
export default App;
