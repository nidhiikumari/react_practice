import React, { useState } from 'react';
import './App.css';
import { Box, Paper } from '@mui/material';
import CustomizedAccordions from './CustomizedAccordions';
import ButtonAppBar from './Appbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Debounce from './components/Debounce/Debounce';
import Parent from './components/hoc/Parent';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: '100vh' }}>
        <div className="App">
          <ButtonAppBar darkMode={darkMode} change={() => setDarkMode(!darkMode)} />
          <Debounce />
          <Box className='root'>
            <CustomizedAccordions />
          </Box>
          <Parent />
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
