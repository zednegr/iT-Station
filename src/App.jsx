import './App.css'
import About_us from './components/about_us/about_us';
import { Container } from './components/container/container';
import Course from './components/course/course';
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
      </Container>
    </>
  )
}

export default App
