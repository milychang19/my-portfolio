import Header from "./pages/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Journey from "./pages/Journey";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="font-text bg-beige text-center text-calc-size">
      <Header />
      <Home />
      <About />
      <Projects />
      <Journey />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
