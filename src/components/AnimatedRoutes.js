import { Route, Routes, useLocation } from "react-router-dom";

import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Landing from "../pages/landing/Landing";
import Portfolio from "../pages/portfolio/Portfolio";

const AnimatedRoutes = ({ personalDetails }) => {
  console.log(personalDetails.name);
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/"
        element={
          <Landing
            name={personalDetails.name}
            tagline={personalDetails.tagline}
          />
        }
      />
      <Route
        path="/about"
        element={
          <About
            name={personalDetails.name}
            location={personalDetails.location}
            email={personalDetails.email}
            availability={personalDetails.availability}
            brand={personalDetails.brand}
          />
        }
      />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route
        path="/contact"
        element={
          <Contact
            name={personalDetails.name}
            location={personalDetails.location}
            email={personalDetails.email}
          />
        }
      />
    </Routes>
  );
};

export default AnimatedRoutes;
