import React, { useState } from 'react';
import { Box, Grid, Button } from '@mui/material';
import {TileCardComponent} from 'components'; // Ensure TileCardComponent is imported correctly
import FavoriteIcon from '@mui/icons-material/Favorite'; // Example icon for the card
import DownArrow from '@mui/icons-material/KeyboardArrowDown'; // Example icon for the "Show More" button

// Define the type for the props
interface PackagesComponentProps {
  data: string[]; // The data array will be an array of strings (titles)
}

const PackagesComponent: React.FC<PackagesComponentProps> = ({ data }) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Grid
        container
        spacing={2}
        sx={{ alignItems: 'center', justifyContent: 'left' }}
      >
        {data.slice(0, showMore ? data.length : 10).map((item, index) => (
          <Box key={index}>
            <TileCardComponent title={item} Icon={<FavoriteIcon />} />
          </Box>
        ))}
      </Grid>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
        <Button
          variant="text"
          endIcon={<DownArrow />}
          onClick={handleShowMore}
          sx={{
            color: '#289fff',
            textTransform: 'capitalize',
            '&:hover': {
              backgroundColor: '#f7fdff73',
            },
          }}
        >
          {showMore ? 'Show Less' : 'Show More'}
        </Button>
      </Box>
    </Box>
  );
};

export default PackagesComponent;
