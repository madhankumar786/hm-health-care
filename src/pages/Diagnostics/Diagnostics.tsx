import React from 'react';
import { Box } from '@mui/material';
import { Banner } from 'components';

const Diagnostics: React.FC = () => {
  return (
    <Box sx={{ padding: '16px',backgroundImage: 'linear-gradient(to bottom right, #faeca5, #e4e7eb, #99d1ff)'  }}>
      <Banner/>
    </Box>
  );
};

export default Diagnostics;
