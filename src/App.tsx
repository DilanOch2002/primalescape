import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import FeatureGrid from "./components/FeatureGrid/FeatureGrid";
import BigCarousel from "./components/BigCarousel/BigCarousel";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <BigCarousel />
      </main>
      <Footer />
    </>
  );
}

export default App;
