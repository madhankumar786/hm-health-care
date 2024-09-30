import React from 'react';
import { Container, Grid, Box, useMediaQuery, useTheme} from '@mui/material';
import { TestCard, TitleComponent } from 'components';
import { useNavigate } from 'react-router-dom';
import {TestsBanner} from 'pages';

const testsData = [
  {
    title: 'Albumin Serum',
    description: '3 Tests Included: To Evaluate liver disease, Tests Included: To Evaluate liver disease, Tests Included: To Evaluate liver disease',
    price: 1200,
    link:'albumin-serum',
    type:'test',
    timeTaken:'Reported with in 8 Hrs after sample has been collected.'

  },
  {
    title: 'Lipid Profile',
    description: '4 Tests Included: Cholesterol, HDL, LDL',
    price: 1500,
    link:'lipid-profile',
    type:'test',
    timeTaken:'Reported with in 3 Hrs after sample has been collected.'
  },
  {
    title: 'Thyroid Profile',
    description: '3 Tests Included: T3, T4, TSH, 3 Tests Included: T3, T4, TSH, 3 Tests Included: T3, T4, TSH,TSH, 3 Tests Included: T3, T4, TSH',
    price: 800,
    link:'thyroid-profile',
    type:'Test',
    timeTaken:'Reported with in 2 Hrs after sample has been collected.'
  },
  
  {
    title: 'Thyroid Profile',
    description: '3 Tests Included: T3, T4, TSH, 3 Tests Included: T3, T4, TSH, 3 Tests Included: T3, T4, TSH,TSH, 3 Tests Included: T3, T4, TSH',
    price: 800,
    link:'thyroid-profile',
    type:'Test',
    timeTaken:'Reported with in 2 Hrs after sample has been collected.'
  },
  {
    title: 'Thyroid Profile',
    description: '3 Tests Included: T3, T4, TSH, 3 Tests Included: T3, T4, TSH, 3 Tests Included: T3, T4, TSH,TSH, 3 Tests Included: T3, T4, TSH',
    price: 800,
    link:'thyroid-profile',
    type:'Test',
    timeTaken:'Reported with in 2 Hrs after sample has been collected.'
  },
  {
    title: 'Thyroid Profile',
    description: '3 Tests Included: T3, T4, TSH, 3 Tests Included: T3, T4, TSH, 3 Tests Included: T3, T4, TSH,TSH, 3 Tests Included: T3, T4, TSH',
    price: 800,
    link:'thyroid-profile',
    type:'Test',
    timeTaken:'Reported with in 2 Hrs after sample has been collected.'
  },
  {
    title: 'Thyroid Profile',
    description: '3 Tests Included: T3, T4, TSH, 3 Tests Included: T3, T4, TSH, 3 Tests Included: T3, T4, TSH,TSH, 3 Tests Included: T3, T4, TSH',
    price: 800,
    link:'thyroid-profile',
    type:'Test',
    timeTaken:'Reported with in 2 Hrs after sample has been collected.'
  },
  {
    title: 'Thyroid Profile',
    description: '3 Tests Included: T3, T4, TSH, 3 Tests Included: T3, T4, TSH, 3 Tests Included: T3, T4, TSH,TSH, 3 Tests Included: T3, T4, TSH',
    price: 800,
    link:'thyroid-profile',
    type:'Test',
    timeTaken:'Reported with in 2 Hrs after sample has been collected.'
  },
  {
    title: 'Thyroid Profile',
    description: '3 Tests Included: T3, T4, TSH, 3 Tests Included: T3, T4, TSH, 3 Tests Included: T3, T4, TSH,TSH, 3 Tests Included: T3, T4, TSH',
    price: 800,
    link:'thyroid-profile',
    type:'Test',
    timeTaken:'Reported with in 2 Hrs after sample has been collected.'
  },
  {
    title: 'Thyroid Profile',
    description: '3 Tests Included: T3, T4, TSH, 3 Tests Included: T3, T4, TSH, 3 Tests Included: T3, T4, TSH,TSH, 3 Tests Included: T3, T4, TSH',
    price: 800,
    link:'thyroid-profile',
    type:'Test',
    timeTaken:'Reported with in 2 Hrs after sample has been collected.'
  },
];

const TestsPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const handleBuyNow = (title: string) => {
    alert(`Buy Now clicked for ${title}`);
  };

  const handleAddToCart = (title: string) => {
    alert(`Added ${title} to Cart`);
  };

  const handleViewDetails = (link: string) => {
    // alert(`View Details clicked for ${title}`);
    navigate(`/diagnostics/tests/${link}`)
  };

  return (
    <Box
    sx={{
      padding: isMobile ? "16px" : "40px",
      backgroundImage:
        "linear-gradient(to bottom right, #faeca5, #e4e7eb, #99d1ff)",
    }}
  >
    <TestsBanner />
    <TitleComponent title="Tests" />
    <Container>
      <Grid container spacing={2}>
        {testsData.map((test) => (
          <Grid item xs={12} sm={6} md={4} key={test.title}>
            <TestCard
              type={test.type}
              name={test.title}
              timeTaken={test.timeTaken}
              description={test.description}
              price={test.price}
              onBuyNow={() => handleBuyNow(test.title)}
              onAddToCart={() => handleAddToCart(test.title)}
              onViewDetails={() => handleViewDetails(test.link)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
    </Box>
  );
};

export default TestsPage;
