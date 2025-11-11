import Navigation from '@/components/sections/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Pricing from '@/components/sections/Pricing';
import Blog from '@/components/sections/Blog';
import Products from '@/components/sections/Products';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Blog />
        <Products />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}