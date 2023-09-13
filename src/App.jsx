import './App.css'
import About_us from './components/about_us/about_us';
import { Container } from './components/container/container';
import Course from './components/course/course';
import FreeCourse from './components/free_course/free_course';
import Hero from './components/hero/hero';
import Navbar from './components/navbar/navbar';

function App() {

  return (
    <>
      <Container>
        <Navbar />
        <Hero />
        <About_us />
        <Course />
        <FreeCourse />
      </Container>
    </>
  )
}

export default App
