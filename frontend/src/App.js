import './App.scss';

import { About, Contact, Header, Skills, Testimonial, Work } from './container/index';
import { Navbar } from './components/index';

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
    </h1>
  );
}

export default App;