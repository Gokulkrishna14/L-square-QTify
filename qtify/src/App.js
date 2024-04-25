import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from "./components/Hero/Hero";
import { StyledEngineProvider } from '@mui/material';

function App() {
  return (
      <>
      <StyledEngineProvider injectFirst>
        <Navbar />
        <Hero />
      </StyledEngineProvider> 
      </>
  );
}

export default App;
