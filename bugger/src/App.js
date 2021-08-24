import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Features from './components/Features';

const Container = styled.div`
   height: 100vh;
   overflow: hidden;
   position: relative;

`
const IntroShape = styled.div`
   clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
   background-color: #063970;
   position: absolute;
   top: 0;
   left: 0;
   height: 100%;
   width: 100%;
   z-index: -1;
`
const FeatureShape = styled.div`
   clip-path: polygon(0% 0, 55% 0%, 33% 100%, 0% 100%);
   background-color: #b9faf6;
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
    </>
  );
}

export default App;
