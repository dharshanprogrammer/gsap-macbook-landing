import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero"
import ProductViewer from "./components/ProductViewer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import Showcase from "./components/ShowcaseCard";
import Performance from "./components/Performance";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";
import Features from "./components/Features";

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Features />
      <Highlights />
      <Footer />

    </main>
  );
};

export default App;
