import Header from './components/Header';
import Hero from './components/Hero';
import { Story, Services, Portfolio, Contact, Footer } from './components/Sections';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 selection:bg-emerald-200 selection:text-emerald-900">
      <Header />
      <main>
        <Hero />
        <Story />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
