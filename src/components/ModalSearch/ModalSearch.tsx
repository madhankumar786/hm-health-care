import React, { useCallback, useEffect, useState } from "react";
import {
  Modal,
  Box,
  TextField,
  Tab,
  Tabs,
  Typography,
  Button,
} from "@mui/material";
import {
  ArrowBackIosRounded,
  ArrowBack,
  Add,
  AccessTime,
} from "@mui/icons-material";
import { styled } from "@mui/system";
import { AppDispatch, fetchSearchResults, RootState } from "store/store";
import { useDispatch, useSelector } from "react-redux";

interface ModalSearchProps {
  open: boolean;
  onClose: () => void;
}

const CustomTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  borderRadius: "10px",
  border: "2px solid orange",
  "& .MuiInputBase-input": {
    color: "grey",
  },
}));

const ModalSearch: React.FC<ModalSearchProps> = ({ open, onClose }) => {
  const [activeTab, setActiveTab] = useState("tests");
  const [searchTerm, setSearchTerm] = useState("");
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  const dispatch = useDispatch<AppDispatch>();
  const { results, loading, error } = useSelector(
    (state: RootState) => state.modalSearch
  );

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  // Handle search input with debouncing
  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchTerm(value);

      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }

      const newTimeout = setTimeout(() => {
        if (value.trim()) {
          dispatch(fetchSearchResults(value)); // Dispatch search action
        }
      }, 500); // Debounce delay

      setDebounceTimeout(newTimeout);
    },
    [debounceTimeout, dispatch]
  );
  
  useEffect(() => {
    return () => {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }
    };
  }, [debounceTimeout]);


  const getDiscountedPrice = (price: number) => {
    return price - (price * 20) / 100;
  };

  const cards = [
    {
      title: "Complete Blood Count (CBC)",
      reportsTime: "6 hours",
      priceOld: 420,
      priceNew: 380,
      alsoKnownAs: "CBC | Hemoglobin | Platelet Test",
      testsIncluded: "Haemoglobin | RBC Count | WBC Count",
    },
    {
      title: "Liver Function Test (LFT)",
      reportsTime: "8 hours",
      priceOld: 500,
      priceNew: 450,
      alsoKnownAs: "LFT | SGOT | SGPT",
      testsIncluded: "Bilirubin | Albumin | Enzyme Levels",
    },
  ];

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "80%", md: "60%", lg: "40%" },
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 3,
          borderRadius: "10px",
        }}
      >
        {/* Search Box */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <CustomTextField
            placeholder="Search for tests or checkups"
            InputProps={{
              startAdornment: <ArrowBackIosRounded sx={{ color: "grey" }} />,
            }}
            value={searchTerm}
            onChange={handleSearch}
          />
        </Box>

        {/* Tabs */}
        <Tabs value={activeTab} onChange={handleTabChange} textColor="inherit">
          <Tab
            label="Tests"
            value="tests"
            sx={{
              width: "50%",
              background:
                activeTab === "tests"
                  ? "linear-gradient(to right, #006400, #228B22)"
                  : "lightgrey",
              color: activeTab === "tests" ? "white" : "grey",
              fontWeight: activeTab === "tests" ? "bold" : "normal",
            }}
          />
          <Tab
            label="Checkups"
            value="checkups"
            sx={{
              width: "50%",
              background:
                activeTab === "checkups"
                  ? "linear-gradient(to right, #006400, #228B22)"
                  : "lightgrey",
              color: activeTab === "checkups" ? "white" : "grey",
              fontWeight: activeTab === "checkups" ? "bold" : "normal",
            }}
          />
        </Tabs>

        {/* Tab Content */}
        <Box sx={{ mt: 2, height: "300px", overflowY: "auto" }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            {activeTab === "tests"
              ? "Tests"
              : "Checkups"}
          </Typography>

          {results?.map((card, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: "white",
                p: 2,
                m: 2,
                borderRadius: "10px",
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              {/* Title and Add Button */}
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    width: "80%",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {card.title}
                </Typography>
                <Button
                  variant="outlined"
                  startIcon={<Add />}
                  sx={{
                    border: "2px solid #006400",
                    color: "#006400",
                    "&:hover": {
                      cursor: "pointer",
                      backgroundColor: '#006400',
                      color:'white',
                      border:"2px solid #006400"
                    },
                  }}
                >
                  Add
                </Button>
              </Box>

              {/* Reports Time and Price */}
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <AccessTime sx={{ color: "grey", mr: 1 }} />
                  {/* <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Reports within
                  </Typography> */}
                  <Typography variant="body2" sx={{ color: "orange", ml: 1 }}>
                    {card.timeTaken}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      textDecoration: "line-through",
                      color: "grey",
                      mr: 1,
                    }}
                  >
                    ₹{card.price}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", color: "black" }}
                  >
                    ₹{getDiscountedPrice(card?.price)}
                  </Typography>
                </Box>
              </Box>

              {/* Also Known As */}
              <Box
                sx={{
                  borderTop: "2px dashed lightgrey",
                  borderBottom: "2px dashed lightgrey",
                  py: 1,
                  mb: 1,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontStyle: "italic", color: "orange", mb: 1 }}
                >
                  Also known as
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontStyle: "italic",
                    color: "grey",
                    borderLeft: "1px solid lightgrey",
                    pl: 1,
                  }}
                >
                  {card.testsIncluded}
                </Typography>
              </Box>

              {/* Tests Included */}
              <Box sx={{ borderBottom: "1px solid lightgrey", py: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    24 tests:
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {card.testsIncluded}
                </Typography>
              </Box>

              {/* View Details Button */}
              <Button
                sx={{
                  mt: 1,
                  color: "#006400",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
                endIcon={<ArrowBack sx={{ transform: "rotate(180deg)" }} />}
              >
                View Details
              </Button>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mt: 1,
          }}
        >
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #006400, #228B22)",
              color: "white",
              fontWeight: "bold",
              fontSize: "14px",
              padding: "0.5rem 2rem",
              borderRadius: "10px",
            }}
            onClick={onClose}
          >
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalSearch;
