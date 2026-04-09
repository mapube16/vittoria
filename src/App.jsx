import Header from "./components/Header";
import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import SuccessCases from "./components/SuccessCases";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-black text-white">
      <Header />
      <main>
        <Hero />
        <WhoWeAre />
        <SuccessCases />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
