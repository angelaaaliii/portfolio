import logo from './logo.svg';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './Home';
import About from './about/About';
import Work from './work/Work';
import Fun from './fun/Fun';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CaseStudy3 from './work/CaseStudies/CaseStudy3';

function App() {
  return (
    <BrowserRouter basename="">
      <ChakraProvider>

        <div className="App">
          <header className="header">
                <h2 id="name">
                  Angela Li
                </h2>

              <NavBar></NavBar>
            </header>
        </div>


        <Routes>
          <Route path="/website-design" element={<CaseStudy3/>}></Route>
          <Route path="/maps" element={<CaseStudy3/>}></Route>
          <Route path="/iterative-design" element={<CaseStudy3/>}></Route>
          <Route path="/" element={<Home/>}></Route>
        </Routes>

      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
