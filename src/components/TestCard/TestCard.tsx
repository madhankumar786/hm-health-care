import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Divider,
  Grid,
  Box,
} from "@mui/material";
import PageIcon from "@mui/icons-material/InsertDriveFile"; // Page icon for info section
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; // Arrow icon for View Details button
import "./TestCard.css";

interface TestCardProps {
  type: string; // Dynamic type: test/package
  name: string; // Test or Package Name
  description: string; // Description
  price: number; // Price in Rupees
  timeTaken: string; // Time taken for the test/package
  onBuyNow: () => void;
  onAddToCart: () => void;
  onViewDetails: () => void;
}

const TestCard: React.FC<TestCardProps> = ({
  type,
  name,
  description,
  price,
  timeTaken,
}) => {
  return (
    <Card
      sx={{
        margin: "20px",
        padding: "8px",
        borderRadius: "8px",
        boxShadow: 2,
        textAlign: "left",
        p: 1,
      }}
      className="testCardStyle"
    >
      <CardContent className="cardContentStyle">
        {/* Top-right dynamic type with gold background */}
        <Box
          className="testTypeStyle"
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "10px",
          }}
        >
          <Typography
            variant="caption"
            sx={{
              backgroundColor: "#FFD700",
              color: "#000",
              padding: "4px 16px",
              borderRadius: "0px 0px 4px 4px",
            }}
          >
            {type === "test" ? "Test" : "Package"}
          </Typography>
        </Box>

        {/* Title (Package Name / Test Name) */}
        <Typography
          variant="h6"
          sx={{ fontSize: "14px", fontWeight: 600, lineHeight: "2em" }}
          component="div"
        >
          {name}
        </Typography>

        {/* Description below title, in grey, smaller than title */}
        <Typography
          className="descriptionStyle"
          variant="body2"
          color="text.secondary"
          sx={{ marginBottom: "10px", fontSize: "12px" }}
        >
          {description}
        </Typography>

        {/* Price in Rupees */}
        <Typography
          variant="h5"
          sx={{ marginBottom: "20px", fontWeight: "bold", fontSize: "1rem" }}
        >
          ₹{price}
        </Typography>

        {/* Buttons: Buy Now (outlined), Add to Cart (filled) */}
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              sx={{ width: "100%", textTransform: "capitalize" }}
            >
              Buy Now
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ width: "100%", textTransform: "capitalize" }}
            >
              Add to Cart
            </Button>
          </Grid>
        </Grid>

        {/* Grey horizontal separator line */}
        <Divider sx={{ margin: "20px 0" }} />

        {/* Info section with Page Icon, Time Taken, and View Details button */}
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} className="viewDetailsHolderStyle">
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box sx={{ flex: 1 }}>
                <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',alignContent:"center",alignItems:'center',height:'100%'}}>
                  <PageIcon fontSize="small" color="action" sx={{flex:1}}/>
                  <Typography variant="body2" color="text.secondary" sx={{flex:4}}>
                    {timeTaken}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Button
                  variant="text"
                  endIcon={<ArrowForwardIcon />}
                  color="primary"
                >
                  View Details
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TestCard;

// import React from 'react';
// import { Card, CardContent, Typography, Button, Box, Grid } from '@mui/material';
// import { useTheme, useMediaQuery } from '@mui/material';

// type TestCardProps = {
//   title: string;
//   testsIncluded: string;
//   price: string;
//   onBuyNow: () => void;
//   onAddToCart: () => void;
//   onViewDetails: () => void;
// };

// const TestCard: React.FC<TestCardProps> = ({
//   title,
//   testsIncluded,
//   price,
//   onBuyNow,
//   onAddToCart,
//   onViewDetails
// }) => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   return (
//     <Card
//       sx={{
//         maxWidth: isMobile ? '100%' : 345,
//         margin: '16px auto',
//         boxShadow: 3,
//         borderRadius: 2
//       }}
//     >
//       <CardContent>
//         <Grid container spacing={2}>
//           {/* Test Title */}
//           <Grid item xs={12}>
//             <Typography variant="h6" fontWeight="bold">
//               {title}
//             </Typography>
//           </Grid>

//           <Grid item xs={12}>
//             <Typography variant="body2" color="text.secondary">
//               {testsIncluded}
//             </Typography>
//           </Grid>

//           <Grid item xs={12}>
//             <Typography variant="h5" color="primary">
//               ₹{price}
//             </Typography>
//           </Grid>

//           <Grid item xs={12}>
//             <Box display="flex" justifyContent="space-between" alignItems="center">
//               <Button variant="outlined" color="primary" onClick={onBuyNow}>
//                 Buy Now
//               </Button>
//               <Button variant="contained" color="primary" onClick={onAddToCart}>
//                 Add to Cart
//               </Button>
//             </Box>
//           </Grid>

//           <Grid item xs={12}>
//             <Button variant="text" onClick={onViewDetails}>
//               View Details
//             </Button>
//           </Grid>
//         </Grid>
//       </CardContent>
//     </Card>
//   );
// };

// export default TestCard;
