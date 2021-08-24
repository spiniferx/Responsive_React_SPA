import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Features from './components/Features';
import Services from './components/Services';

const Container = styled.div`
   height: 100vh;
   overflow: hidden;
   position: relative;

`
const IntroShape = styled.div`
   clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
   background-color: #ffffd4;
   position: absolute;
   top: 0;
   left: 0;
   height: 100%;
   width: 100%;
   z-index: -1;
`
const FeatureShape = styled.div`
   clip-path: polygon(0% 0, 55% 0%, 45% 100%, 0% 100%);
   background-color: #b9faf6;
   position: absolute;
   top: 0;
   left: 0;
   height: 100%;
   width: 100%;
   z-index: -1;
`
const ServicesShape = styled.div`
   clip-path: polygon(0% 0, 45% 0%, 45% 100%, 0% 100%);
   background-color: #ffddd4;
   position: absolute;
   top: 0;
   left: 0;
   height: 100%;
   width: 100%;
   z-index: -1;
`


function App() {
  return (
     <>
    <Container>
       <Navbar/>
       <Intro/>
       <IntroShape/>
    </Container>
    <Container>
       <Features/>
       <FeatureShape/>
    </Container>
    <Container>
       <Services/>
       <ServicesShape/>
    </Container>
    </>
  );
}

export default App;
