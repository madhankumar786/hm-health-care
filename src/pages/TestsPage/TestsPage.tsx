import React from 'react';
import { Container, Grid } from '@mui/material';
import { TestCard } from 'components';
import { useNavigate } from 'react-router-dom';

const testsData = [
  {
    title: 'Albumin Serum',
    description: '3 Tests Included: To Evaluate liver disease, Tests Included: To Evaluate liver disease, Tests Included: To Evaluate liver disease',
    price: 1200,
    link:'albumin-serum',
    type:'test',
    timeTaken:'5 hrs'

  },
  {
    title: 'Lipid Profile',
    description: '4 Tests Included: Cholesterol, HDL, LDL',
    price: 1500,
    link:'lipid-profile',
    type:'test',
    timeTaken:'3 hrs'
  },
  {
    title: 'Thyroid Profile',
    description: '3 Tests Included: T3, T4, TSH, 3 Tests Included: T3, T4, TSH, 3 Tests Included: T3, T4, TSH,TSH, 3 Tests Included: T3, T4, TSH',
    price: 800,
    link:'thyroid-profile',
    type:'Test',
    timeTaken:'9 hrs'
  },
  // Add more test data as needed
];

const TestsPage: React.FC = () => {
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
    <Container>
      <Grid container spacing={3}>
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
  );
};

export default TestsPage;
