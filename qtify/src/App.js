import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { StyledEngineProvider } from '@mui/material';
import { HomePage } from "./pages/HomePage/HomePage";


function App() {
  return (
      <>
      <StyledEngineProvider injectFirst>
        <Navbar />
        <HomePage />
      </StyledEngineProvider> 
      </>
  );
}

export default App;
