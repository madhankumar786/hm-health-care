import React from "react";
import {
  Box,
  Grid,
  Typography,
} from "@mui/material";
import FamilyImage from "../../assets/png/smallFamily.png";
import { SearchBar } from "components";


const TestsBanner: React.FC = () => {
  return (
    <Box sx={{ padding: { xs: "8px", sm: "8px", md: "40px" ,textAlign:'center'} }}>
      <Grid container spacing={4} px={2} alignItems="center">
        {/* Left Section */}
        <Grid item xs={12} md={9}>
          <Box sx={{ padding: "32px 0px", borderRadius: "8px", textAlign: "left" }}>
            <Typography
              variant="h5"
              color="textPrimary"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#fccb42" }}
            >
              Unlock health for you and your family
            </Typography>
            <Typography
              variant="h6"
              color="textSecondary"
              sx={{ fontWeight: "bold", textTransform: "capitalize" }}
            >
              With our smart diagnostic services and personalized health
              insights
            </Typography>
          </Box>
        </Grid>
        {/* Right Section - Family Image */}
        <Grid item xs={12} md={3}>
          <Box sx={{ textAlign: "center" }}>
            <img
              src={FamilyImage}
              alt="Family"
              style={{ width: "100%", maxWidth: "400px" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>
          <Box sx={{ display: "flex", justifyContent: "left" }}>
            <SearchBar />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TestsBanner;
