import logo from './logo.svg';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CaseStudy3 from './work/CaseStudies/CaseStudy3';
import CaseStudy1 from './work/CaseStudies/CaseStudy1';
import CaseStudy2 from './work/CaseStudies/CaseStudy2';

function App() {
  return (
    <BrowserRouter basename="">
      <ChakraProvider>

        <div className="App">
          <header className="header">
                <Link to="/"><h2 id="name">
                  Angela Li
                </h2></Link>

              <NavBar></NavBar>
            </header>
        </div>


        <Routes>
          <Route path="/website-design" element={<CaseStudy3/>}></Route>
          <Route path="/maps" element={<CaseStudy2/>}></Route>
          <Route path="/iterative-design" element={<CaseStudy1/>}></Route>
          <Route path="/#work" element={<Home/>}></Route>
          <Route path="/" element={<Home/>}></Route>
        </Routes>

      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
