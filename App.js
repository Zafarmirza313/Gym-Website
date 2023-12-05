import "./App.css";
import Hero from "./Components/Hero/Hero";
import Programs from "../src/Components/Programs/Programs";
import Reasons from "./Components/Reasons/Reasons";
import Plans from "./Components/Plans/Plans";
import Testamonial from "./Components/Testamonial/Testamonial";
import Join from "./Components/Join/Join";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testamonial />
      <Join />
      <Footer/>
    </div>
  );
}

export default App;
