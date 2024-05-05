import logo from './logo.svg';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import NavBar from './components/NavBar';
import About from './about/About';
import Work from './work/Work';
import { Routes, Route } from 'react-router-dom';
import CaseStudy3 from './work/CaseStudies/CaseStudy3';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <header className="header">
              <h2 id="name">
                Angela Li
              </h2>

            <NavBar></NavBar>
          </header>

          <About></About>

          <Work></Work>
      </div>

      <Routes>
        <Route exact path="#work" ></Route>

        <Route path="/website-design" element={<CaseStudy3/>}></Route>
      </Routes>

    </ChakraProvider>
  );
}

export default App;
