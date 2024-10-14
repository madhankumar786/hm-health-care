import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  List,
  ListItem,
  Divider,
  ListItemIcon,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  ShoppingCartOutlined as AddToCartIcon,
  ApartmentOutlined as HouseProcessingIcon,
  HouseOutlined as HouseIcon,
  AssignmentOutlined as KnowledgeInsightIcon,
  Circle as ListIcon,
} from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  RootState,
  getPackageDetails,
  clearPackageDetails,
  AppDispatch,
} from "store/store";
import { BreadcrumbsNav } from "components";

// TypeScript interfaces/types
interface TestPackageProps {
  title: string;
  description: string;
  price: number;
  timeTaken: string;
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
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { data, status, error } = useSelector(
    (state: RootState) => state.viewDetails
  );

  useEffect(() => {
    if (testId) {
      dispatch(getPackageDetails(Number(testId)))
        .unwrap()
        .catch((err) => {
          console.error("Error fetching package details:", err);
          setErrorMessage(
            "Failed to fetch package details. Please try again later."
          );
        });
    }

    return () => {
      dispatch(clearPackageDetails());
    };
  }, [testId, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  console.log(data, "view details data from the redux toolkit store");
 
  const tiles = [
    {
      icon: <HouseProcessingIcon color="primary" sx={{ fontSize: "20px" }} />,
      title: "In-House Processing",
    },
    {
      icon: <HouseIcon color="primary" sx={{ fontSize: "20px" }} />,
      title: "Home Collection",
    },
    {
      icon: <KnowledgeInsightIcon color="primary" sx={{ fontSize: "20px" }} />,
      title: "Knowledge Insights",
    },
  ];

  return (
    <>
      <Box
        sx={{
          background: "#e1f0fc",p:1
        }}
      >
        <BreadcrumbsNav title={data?.title} />
      </Box>
      <Grid
        container
        sx={{
          background: "#e1f0fc",
          px: isMobile ? "0px" : "3rem",
          pt: "0px",
          pb: "1rem",
        }}
      >
        {/* Left Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ px: isMobile ? "1rem" : "2rem" }}
          className="leftsection"
        >
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
              {data?.title}
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{ fontSize: "14px" }}
            >
              {data?.description}
            </Typography>
            {/* Tests Button */}
            <Button
              variant="text"
              sx={{ textTransform: "capitalize", fontSize: "14px" }}
            >
              {data?.testsIncluded.length} Test(s) Included
            </Button>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: "bold", my: 1 }}>
                ₹{data?.price}
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
            {data?.timeTaken}
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
              {data?.samplesRequired.map((sample: string, index: number) => (
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
              {tiles.map((tile, index) => (
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
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      justifyItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "inline-block",
                        verticalAlign: "middle",
                        background: "#ffffff",
                      }}
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
        <Grid
          item
          xs={12}
          md={6}
          sx={{ textAlign: "left", px: isMobile ? "1rem" : "2rem", mt: "1rem" }}
          className="rightsection"
        >
          {/* About This Test */}
          <Typography
            variant="h6"
            sx={{ fontSize: "14px", fontWeight: "bold", my: 1 }}
          >
            About This Test
          </Typography>
          <Divider />
          <Typography
            variant="body2"
            color="textSecondary"
            paragraph
            sx={{ my: 1 }}
          >
            This is a short two-line description about the test. It will have
            ellipses for overflowing content...
          </Typography>

          {/* Tests Included List */}
          <Typography
            variant="h6"
            mt={2}
            sx={{ fontSize: "14px", fontWeight: "bold", my: 1 }}
          >
            {data?.testsIncluded.length} Test(s) Included
          </Typography>
          <Divider />
          <List>
            {data?.testsIncluded
              .slice(0, 10)
              .map((test: string, index: number) => (
                <ListItem disablePadding key={index} sx={{ my: "2px" }}>
                  <ListItemIcon
                    sx={{ display: "inline-block", minWidth: "16px" }}
                  >
                    <ListIcon sx={{ fontSize: "5px", color: "#000000" }} />
                  </ListItemIcon>
                  <Typography sx={{ fontSize: "14px" }}>{test}</Typography>
                </ListItem>
              ))}
            {showMoreTests &&
              data?.testsIncluded
                .slice(10)
                .map((test: string, index: number) => (
                  // <ListItem key={index + 10}>{test}</ListItem>
                  <ListItem disablePadding key={index} sx={{ my: "2px" }}>
                    <ListItemIcon
                      sx={{ display: "inline-block", minWidth: "16px" }}
                    >
                      <ListIcon sx={{ fontSize: "5px", color: "#000000" }} />
                    </ListItemIcon>
                    <Typography sx={{ fontSize: "14px" }}>{test}</Typography>
                  </ListItem>
                ))}
          </List>
          <Button
            variant="text"
            endIcon={<ExpandMoreIcon />}
            onClick={() => setShowMoreTests(!showMoreTests)}
            sx={{ fontSize: "14px", textTransform: "capitalize" }}
            size="small"
          >
            {showMoreTests ? "View Less" : "View More"}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default PackageDetails;
