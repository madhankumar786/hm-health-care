import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

interface TileCardComponentProps {
  name: string; 
  Icon: React.ReactNode; // The SVG icon to be displayed
}

const TileCardComponent: React.FC<TileCardComponentProps> = ({ name, Icon }) => {
  return (
    <Paper
    elevation={3}
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'celnter',
      justifyContent: 'left',
      width: { xs: '65px', sm: '85px', md: '100px', lg: '90px' }, 
      height: { xs: '65px', sm: '85px', md: '100px', lg: '90px' }, 
      textAlign: 'center',
      backgroundColor: '#fff',
      color: '#289fff',
      boxShadow: '0px 4px 6px rgba(40, 159, 255, 0.1)',
      transition: 'box-shadow 0.3s ease',
      marginRight:'24px',
      marginBottom:'24px',
      '&:hover': {
        boxShadow: '0px 8px 12px rgba(40, 159, 255, 0.2)',
      },
      cursor:'pointer'
    }}
  >
    <Box sx={{ fontSize: '28px', color: '#289fff',mt:2 }}>{Icon}</Box> 
    <Typography
      variant="body2"
      sx={{
        marginTop: 1,
        textTransform: 'capitalize',
        fontSize: { xs: '10px', sm: '12px', md: '14px', lg: '12px' }, 
        fontWeight: 400,
      }}
    >
      {name}
    </Typography>
  </Paper>
  );
};

export default TileCardComponent;
