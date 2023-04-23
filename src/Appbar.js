import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Switch
} from '@mui/material';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function ButtonAppBar({ darkMode, change }) {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          Dark Mode
          <Switch
            {...label}
            checked={darkMode}
            onChange={change}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
