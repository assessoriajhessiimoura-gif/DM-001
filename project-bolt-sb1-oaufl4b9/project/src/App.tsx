import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Differentials } from './components/Differentials';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { FloatingButtons } from './components/FloatingButtons';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <About />
      <Services />
      <Differentials />
      <Gallery />
      <Reviews />
      <CTA />
      <Contact />
      <FloatingButtons />
    </div>
  );
}

export default App;
