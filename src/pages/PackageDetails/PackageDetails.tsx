import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Card, CardContent } from '@mui/material';

const PackageDetails: React.FC = () => {
  // Retrieving the package name from the URL
  const { packageName } = useParams<{ packageName: string }>();

  return (
    <Card sx={{ margin: '20px', padding: '20px' }}>
      <CardContent>
        {/* Displaying the title with the package name */}
        <Typography variant="h4" component="div" gutterBottom>
          {`Package Details for ${packageName}`}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {/* Placeholder for additional details */}
          Here you will see the detailed information for the package "{packageName}".
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PackageDetails;
