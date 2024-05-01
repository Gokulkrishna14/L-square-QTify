import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { StyledEngineProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchTopAlbums, fetchNewAlbums, fetchNewSongs } from "./API/api";


function App() {

  const [data, setData] = useState({});

  const generateData = (key , source) => {
    source().then((data) => {
      setData((prevState) => {
        return {...prevState, [key] : data};
      });
    });
  };

  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchNewSongs);
  }, []);

  const {topAlbums=[], newAlbums=[], songs=[]} = data;

  return (
      <>
      <StyledEngineProvider injectFirst>
        <Navbar />
        <Outlet context={{data : {topAlbums, newAlbums, songs}}} />
      </StyledEngineProvider> 
      </>
  );
}

export default App;
