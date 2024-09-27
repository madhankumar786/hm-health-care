import React from 'react';
import { Card, CardContent, Typography, Button, Box, Grid } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';

type TestCardProps = {
  title: string;
  testsIncluded: string;
  price: string;
  onBuyNow: () => void;
  onAddToCart: () => void;
  onViewDetails: () => void;
};

const TestCard: React.FC<TestCardProps> = ({ 
  title, 
  testsIncluded, 
  price, 
  onBuyNow, 
  onAddToCart, 
  onViewDetails 
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Mobile screen check

  return (
    <Card 
      sx={{ 
        maxWidth: isMobile ? '100%' : 345, // Full width on mobile
        margin: '16px auto',
        boxShadow: 3,
        borderRadius: 2
      }}
    >
      <CardContent>
        <Grid container spacing={2}>
          {/* Test Title */}
          <Grid item xs={12}>
            <Typography variant="h6" fontWeight="bold">
              {title}
            </Typography>
          </Grid>
          
          {/* Tests Included */}
          <Grid item xs={12}>
            <Typography variant="body2" color="text.secondary">
              {testsIncluded}
            </Typography>
          </Grid>

          {/* Price */}
          <Grid item xs={12}>
            <Typography variant="h5" color="primary">
              ₹{price}
            </Typography>
          </Grid>

          {/* Buy Now & Add to Cart buttons */}
          <Grid item xs={12}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Button variant="outlined" color="primary" onClick={onBuyNow}>
                Buy Now
              </Button>
              <Button variant="contained" color="primary" onClick={onAddToCart}>
                Add to Cart
              </Button>
            </Box>
          </Grid>

          {/* View Details */}
          <Grid item xs={12}>
            <Button variant="text" onClick={onViewDetails}>
              View Details
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TestCard;
