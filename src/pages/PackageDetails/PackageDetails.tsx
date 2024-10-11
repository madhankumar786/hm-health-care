import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  Divider,
  IconButton,
  CircularProgress,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  ShoppingCartOutlined as AddToCartIcon,
  ApartmentOutlined as HouseProcessingIcon,
  HouseOutlined as HouseIcon,
  AssignmentOutlined as KnowledgeInsightIcon,
  Circle as ListIcon,
} from "@mui/icons-material";
import CheckIcon from "@mui/icons-material/Check"; // Placeholder for tile icons
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTestPackageData, RootState } from "store/store";

// TypeScript interfaces/types
interface TestPackageProps {
  title: string;
  description: string;
  price: number;
  shortDescription: string;
  samplesRequired: string[];
  testsIncluded: string[];
  tiles: Tile[];
}

interface Tile {
  icon: JSX.Element;
  title: string;
}

const PackageDetails: React.FC = () => {
  const [showMoreTests, setShowMoreTests] = useState(false);
  const { testId } = useParams<{ testId: string }>();
  const dispatch = useDispatch();

  // const { testPackageData, loading, error } = useSelector((state: RootState) => state.testsPackageDetails);
  //temporary package details data starts
  const testPackageData = {
    title: "Health Checkup Package",
    description: "This package includes a variety of essential health tests.",
    price: 500,
    shortDescription: "Reported within 6 hours after sample is received",
    samplesRequired: ["Blood Sample","Saliva Sample"],
    testsIncluded: Array.from({ length: 26 }, (_, i) => `Test ${i + 1}`),
    tiles: [
      {
        icon: <HouseProcessingIcon color="primary" />,
        title: "In-House Processing",
      },
      { icon: <HouseIcon color="primary" />, title: "Home Collection" },
      {
        icon: <KnowledgeInsightIcon color="primary" />,
        title: "Knowledge Insights",
      },
    ],
  };
  //temporary package details data ends
  // useEffect(() => {
  //   if (testId) {
  //     dispatch(fetchTestPackageData(testId));
  //   }
  // }, [dispatch, testId]);

  // if (loading) {
  //   return <CircularProgress />;
  // }

  // if (error) {
  //   return <Typography color="error">{error}</Typography>;
  // }

  // if (!testPackageData) {
  //   return <Typography>No test package data found.</Typography>;
  // }
  return (
    <Grid container spacing={3} padding={3} sx={{ background: "#e1f0fc" }}>
      {/* Left Section */}
      <Grid item xs={12} md={6}>
        {/* Title and Description */}
        <Box sx={{ textAlign: "left" }}>
          <Typography
            sx={{
              fontSize: "24px",
              color: "primary",
              fontWeight: "bold",
              py: 2,
            }}
          >
            {testPackageData.title}
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ fontSize: "14px" }}
          >
            {testPackageData.description}
          </Typography>
          {/* Tests Button */}
          <Button
            variant="text"
            sx={{ textTransform: "capitalize", fontSize: "14px" }}
          >
            {testPackageData.testsIncluded.length} Test(s) Included
          </Button>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", my: 1 }}>
              ₹{testPackageData.price}
            </Typography>
          </Box>
        </Box>

        {/* Price and Action Buttons */}
        <Box display="flex" alignItems="center" mt={2}>
          <Button
            variant="outlined"
            color="primary"
            sx={{ flex: 1, borderRadius: "30px" }}
            size="small"
          >
            Buy Now
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddToCartIcon />}
            sx={{ flex: 1, ml: 2, borderRadius: "30px" }}
            size="small"
          >
            Add to Cart
          </Button>
        </Box>

        {/* Short Description */}
        <Typography
          variant="body2"
          color="textSecondary"
          my={3}
          sx={{ textAlign: "left" }}
        >
          {testPackageData.shortDescription}
        </Typography>

        {/* Sample(s) Required Section */}
        <Box mt={3} sx={{ textAlign: "left" }}>
          <Typography
            variant="h6"
            sx={{ fontSize: "14px", fontWeight: "bold", my: 1 }}
          >
            Sample(s) Required
          </Typography>
          <Divider />
          <List>
            {testPackageData.samplesRequired.map((sample, index) => (
              <ListItem disablePadding key={index} sx={{ my: "2px" }}>
                <ListItemIcon
                  sx={{ display: "inline-block", minWidth: "16px" }}
                >
                  <ListIcon sx={{ fontSize: "5px", color: "#000000" }} />
                </ListItemIcon>
                <Typography sx={{ fontSize: "14px" }}>{sample}</Typography>
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Card with Tiles */}
        <Box
          sx={{
            mt: 2,
            p: 2,
            pb: 1,
            background: "#ffffff",
            borderRadius: "8px",
          }}
        >
          <Grid container spacing={1} sx={{ display: "flex" }}>
            {testPackageData.tiles.map((tile, index) => (
              <Box
                alignItems="center"
                key={index}
                sx={{
                  flex: "1",
                  m: 1,
                  background: "#e1f0fc",
                  borderRadius: "8px",
                  p: 1,
                }}
              >
                <Box>
                  <Box
                    sx={{ display: "inline-block", verticalAlign: "middle" }}
                  >
                    {tile.icon}
                  </Box>
                  <Box
                    sx={{ display: "inline-block", verticalAlign: "middle" }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        ml: 1,
                        fontSize: "12px",
                        fontWeight: "bold",
                        color: "#1976d2",
                      }}
                    >
                      {tile.title}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>
      </Grid>

      {/* Right Section */}
      <Grid item xs={12} md={6} sx={{ textAlign: "left" }}>
        {/* About This Test */}
        <Typography
          variant="h6"
          sx={{ fontSize: "14px", fontWeight: "bold", my: 1 }}
        >
          About This Test
        </Typography>
        <Divider />
        <Typography variant="body2" color="textSecondary" paragraph>
          This is a short two-line description about the test. It will have
          ellipses for overflowing content...
        </Typography>

        {/* Tests Included List */}
        <Typography
          variant="h6"
          mt={2}
          sx={{ fontSize: "14px", fontWeight: "bold", my: 1 }}
        >
          {testPackageData.testsIncluded.length} Test(s) Included
        </Typography>
        <Divider />
        <List>
          {testPackageData.testsIncluded.slice(0, 10).map((test, index) => (
            <ListItem disablePadding key={index} sx={{my:'2px'}}>
              <ListItemIcon sx={{ display: "inline-block", minWidth: "16px" }}>
                <ListIcon sx={{ fontSize: "5px", color: "#000000" }} />
              </ListItemIcon>
              <Typography sx={{ fontSize: "14px" }}>{test}</Typography>
            </ListItem>
          ))}
          {showMoreTests &&
            testPackageData.testsIncluded
              .slice(10)
              .map((test, index) => (
                <ListItem key={index + 10}>{test}</ListItem>
              ))}
        </List>
        <Button
          variant="text"
          endIcon={<ExpandMoreIcon />}
          onClick={() => setShowMoreTests(!showMoreTests)}
          sx={{fontSize:'14px',textTransform:'capitalize'}}
          size="small"
        >
          {showMoreTests ? "View Less" : "View More"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default PackageDetails;
