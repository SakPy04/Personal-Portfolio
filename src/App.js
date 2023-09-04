import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Links from "./components/Links";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Portfolio></Portfolio>
      <Experience></Experience>
      <Contact></Contact>
      <Links></Links>
      
    </div>
  );
}

export default App;
