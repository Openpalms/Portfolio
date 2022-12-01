import './App.css';
import Main from './components/mainSection/Main';
import Navbar from './components/navbar/Navbar.tsx';
import Projects from './components/projects/Projects';
import SkillsSection from './components/skillsSection/SkillsSection';

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <SkillsSection />
      <Projects />
    </>
  );
}

export default App;
