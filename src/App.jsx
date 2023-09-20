import './app.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
    
  );
}

export default App;
