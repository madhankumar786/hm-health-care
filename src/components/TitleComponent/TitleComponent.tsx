import React from "react";
import { Typography, Box, Grid } from "@mui/material";

interface TitleComponentProps {
  title: string; 
}

const TitleComponent: React.FC<TitleComponentProps> = ({ title }) => {
  return (
    <Grid container spacing={4} alignItems="center">
      {/* Left Section */}
      <Grid item xs={12} md={12} py={3}>
        <Box sx={{ position: "relative", width: "100%" }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold", 
              paddingBottom: "8px", 
              textAlign:"left",
            }}
          >
            {title}
          </Typography>
         
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              height: "2px",
              backgroundColor: "#289fff",
              width: "100%", 
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default TitleComponent;
