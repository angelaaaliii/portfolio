import logo from './logo.svg';
import { ChakraProvider } from '@chakra-ui/react';
import './Home.css';
import NavBar from './components/NavBar';
import About from './about/About';
import Work from './work/Work';
import Fun from './fun/Fun';

function Home() {
  return (
    <div>
        <About></About>

        <Work></Work>

        <Fun></Fun>
    </div>
  );
}

export default Home;
