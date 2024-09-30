import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  SvgIcon,
} from "@mui/material";
import FamilyImage from "../../assets/png/smallFamily.png";
import { ReactComponent as ContactIcon } from "../../assets/svg/callBack.svg";
import { HCButton, SearchBar } from "components";
import {
  Biotech as TestIcon,
  ArrowForward as ArrowForwardIcon,
  ManOutlined as CheckupIcon,
} from "@mui/icons-material";

const Banner: React.FC = () => {
  const handleClick = () => {
    console.log("Inside HandleClick");
  };
  return (
    <Box sx={{ padding: { xs: "8px", sm: "8px", md: "0px" } }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Section */}
        <Grid item xs={12} md={6}>
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
          <Box sx={{ display: "flex", justifyContent: "left" }}>
            <SearchBar />
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

        {/* Second Section - Card */}
        <Grid item xs={12} md={3}>
          <Card
            sx={{
              maxWidth: "400px",
              margin: "0 auto",
              padding: "24px",
              borderRadius: "5px",
              backgroundImage: "linear-gradient(to right, #ffe396 , #fac534)",
            }}
          >
            <CardContent>
              <Typography variant="h5" color="textPrimary" gutterBottom>
                Book a Home Collection
              </Typography>
              <SvgIcon
                component={ContactIcon}
                sx={{ fontSize: 60, color: "#289fff", marginBottom: "16px" }}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ textTransform: "capitalize", borderRadius: "30px" }}
              >
                Request a Callback
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={9}>
          <Box
            sx={{
              display: "flex",
              jutifyContent: "center",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ py: 3, flex: 1 }}>
              <HCButton
                label="Test"
                onClick={handleClick}
                startIcon={<TestIcon />}
                endIcon={<ArrowForwardIcon />}
              />
            </Box>
            <Box sx={{ p: 3, flex: 1 }}>
              <HCButton
                label="Smart Health Check-up"
                onClick={handleClick}
                startIcon={<CheckupIcon />}
                endIcon={<ArrowForwardIcon />}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
