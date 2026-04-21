import Navigation from './components/Navigation';
import Hero from './components/Hero';
import HowIWork from './components/HowIWork';
import About from './components/About';
import Areas from './components/Areas';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Footer from './components/Footer';
import MobileCTA from './components/MobileCTA';

function App() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />
      <main>
        <Hero />
        <HowIWork />
        <About />
        <Areas />
        <Services />
        <BookingForm />
        <FAQ />
        <Blog />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}

export default App;
