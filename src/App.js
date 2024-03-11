import './App.css';
import Contact from './components/contact';
import Home from './components/home';
import Navbar from './components/navbar';
import Projects from './components/projects';
import Skills from './components/skill';

function App() {
  return (
    <div className="min-h-screen">
        <Navbar/>
        <div>
          <Home/>
        </div>
        <div className='p-10'>
          <Skills/>
        </div>
        <div className='p-20'>
          <div id='Projects' className='flex justify-center mb-4'><h1>Projects</h1></div>
          <Projects/>
        </div>
        <div className='px-20'>
          <Contact/>
        </div>
    </div>
  );
}

export default App;
