import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import LeftMenu from './components/layout/LeftMenu';
import RightNavbar from './components/layout/RightNavBar';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#E5E5E5]">
      <main className="grow container mx-auto px-4 py-10">        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
