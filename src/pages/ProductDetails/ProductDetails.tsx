import React from 'react';
import { Box, Typography, Button, Divider, Grid, List, ListItem, ListItemText, Collapse, Link } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useState } from 'react';

const ProductDetails: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggleMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f4f6f8' }}>
      <Grid container spacing={2}>
        {/* Left Section */}
        <Grid item xs={12} md={8}>
          {/* Breadcrumb */}
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Diagnostics &gt; Tests &gt; Complete Blood Count CBC
          </Typography>

          {/* Title and Description */}
          <Typography variant="h4" gutterBottom>
            Complete Blood Count-CBC
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            A complete blood count (CBC) is a blood test used to evaluate your overall health and detect a wide range of disorders, including anemia, infection, and leukemia.
          </Typography>
          <Link href="#" underline="always">
            26 Test(s) Included
          </Link>

          {/* Price and Buttons */}
          <Typography variant="h5" sx={{ marginTop: '16px', marginBottom: '8px' }}>
            ₹430/-
          </Typography>
          <Button variant="outlined" startIcon={<LocalOfferIcon />} sx={{ marginRight: '10px' }}>
            Buy Now
          </Button>
          <Button variant="contained" startIcon={<AddShoppingCartIcon />}>
            Add to Cart
          </Button>

          <Typography variant="body2" color="textSecondary" sx={{ marginTop: '8px' }}>
            *Reported within 6 Hours after sample received
          </Typography>

          {/* Sample Required */}
          <Typography variant="h6" sx={{ marginTop: '24px' }}>
            Sample(s) Required
          </Typography>
          <Typography variant="body1" color="textSecondary">
            • EDTA Blood
          </Typography>

          {/* Feature Buttons */}
          <Box sx={{ display: 'flex', marginTop: '24px', gap: '10px' }}>
            <Button variant="outlined">In-House Processing</Button>
            <Button variant="outlined">Home Collection</Button>
            <Button variant="outlined">Knowledge Insights</Button>
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={4}>
          <Box sx={{ backgroundColor: 'white', padding: '16px', borderRadius: '8px', boxShadow: 1 }}>
            <Typography variant="h6" gutterBottom>
              About This Test
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              CBC is used for screening whenever abnormalities in RBCs, WBCs, or platelets are suspected.
            </Typography>

            <Divider sx={{ marginY: '16px' }} />

            <Typography variant="h6" gutterBottom>
              26 Test(s) Included
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Haemoglobin (Hb)" />
              </ListItem>
              <ListItem>
                <ListItemText primary="RBC Count" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Hematocrit (HCT)" />
              </ListItem>
              <ListItem>
                <ListItemText primary="MCV #" />
              </ListItem>

              {/* Show More / Show Less */}
              <Collapse in={showMore} timeout="auto" unmountOnExit>
                <ListItem>
                  <ListItemText primary="MCH #" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="MCHC #" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="RDW CV" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Total Count" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Neutrophils" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Lymphocytes" />
                </ListItem>
              </Collapse>
              <Button
                variant="text"
                endIcon={showMore ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                onClick={handleToggleMore}
              >
                {showMore ? 'Show Less' : 'View More'}
              </Button>
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetails;
