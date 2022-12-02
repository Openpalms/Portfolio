import './App.css';
import Main from './components/mainSection/Main';
import Navbar from './components/navbar/Navbar.tsx';
import Projects from './components/projects/Projects';
import SkillsSection from './components/skillsSection/SkillsSection';
import ContactForm from './components/contactForm/ContactForm';
import Footer from './components/footer/Footer';
function App() {
  return (
    <>
      <Navbar />
      <Main />
      <SkillsSection />
      <Projects />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
