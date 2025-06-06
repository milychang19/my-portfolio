import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  // useLocation,
} from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Journey from "./pages/Journey";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Magnet from "./pages/reports/Magnet";


function App() {
  return (
    <Router>
    <div className="font-text bg-beige text-center text-calc-size">
      <Routes>
          {/* Main Page with all sections */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Projects />
                <Journey />
                <Contact />
                <Footer />
              </>
            }
          />
          
          {/* Work Term Report Page */}
          <Route 
            path="/F24-work-term-report" 
            element={
              <>
                <Magnet />
                <Footer />
                </>
              } 
              />
          </Routes>
    </div>
    </Router>
  );
}


export default App;
