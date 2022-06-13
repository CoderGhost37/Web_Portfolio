import './App.scss';
import { About, Contact, Header, Skills, Testimonial, Work } from './container/index';
import { Navbar } from './components/index';
import Footer from './container/Footer/Footer';

function App() {
  return (
    <h1 className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </h1>
  );
}

export default App;