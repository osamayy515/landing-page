import React from 'react'
import './App.css';
import { Container, CssBaseline } from '@mui/material';
import GridLayout from './GridLayout';

function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <Container>
        <main>
          <GridLayout/>
        </main>
      </Container>

    </div>
  );
}

export default App;
