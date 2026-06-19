import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Gallery from "./components/Gallery";
import Process from "./components/Process";
import Markets from "./components/Markets";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  // Lock scrolling while the loader is on screen.
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <>
      <Loader onDone={() => setLoading(false)} />
      <Header />
      <main>
        <Hero />
        <Product />
        <Gallery />
        <Process />
        <Markets />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
