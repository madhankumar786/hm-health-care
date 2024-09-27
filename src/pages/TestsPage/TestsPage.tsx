import React from 'react';
import { Container, Grid } from '@mui/material';
import { TestCard } from 'components';

const testsData = [
  {
    title: 'Albumin Serum',
    testsIncluded: '3 Tests Included: To Evaluate liver disease',
    price: '1200',
  },
  {
    title: 'Lipid Profile',
    testsIncluded: '4 Tests Included: Cholesterol, HDL, LDL',
    price: '1500',
  },
  {
    title: 'Thyroid Profile',
    testsIncluded: '3 Tests Included: T3, T4, TSH',
    price: '800',
  },
  // Add more test data as needed
];

const TestsPage: React.FC = () => {
  const handleBuyNow = (title: string) => {
    alert(`Buy Now clicked for ${title}`);
  };

  const handleAddToCart = (title: string) => {
    alert(`Added ${title} to Cart`);
  };

  const handleViewDetails = (title: string) => {
    alert(`View Details clicked for ${title}`);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {testsData.map((test) => (
          <Grid item xs={12} sm={6} md={4} key={test.title}>
            <TestCard
              title={test.title}
              testsIncluded={test.testsIncluded}
              price={test.price}
              onBuyNow={() => handleBuyNow(test.title)}
              onAddToCart={() => handleAddToCart(test.title)}
              onViewDetails={() => handleViewDetails(test.title)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TestsPage;
