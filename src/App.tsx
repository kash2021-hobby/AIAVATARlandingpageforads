import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBrands from './components/TrustedBrands';
import Problem from './components/Problem';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Demo from './components/Demo';
import TrustedWorldwide from './components/TrustedWorldwide';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Problem />
      <Features />
      <TrustedBrands />
      <UseCases />
      <Demo />
      <TrustedWorldwide />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
