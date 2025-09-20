import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Outlet } from 'react-router-dom';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FBA
          </Typography>
          <Button color="inherit">{/* insert later */}</Button>
        </Toolbar>
      </AppBar>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 10,
          width: '100%',
          minHeight: 'calc(100vh - 64px)', // account for AppBar height
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',      // center children horizontally
          justifyContent: 'flex-start' // set to 'center' to center vertically as well
        }}
      >
        <Box sx={{ width: '100%', maxWidth: 960 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}