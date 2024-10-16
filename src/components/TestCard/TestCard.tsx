import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Divider,
  Grid,
  Box,
  Modal,
} from "@mui/material";
import PageIcon from "@mui/icons-material/InsertDriveFile"; 
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; 
import "./TestCard.css";
import { useNavigate } from "react-router-dom";
import { RootState, AppDispatch, removeFromCart } from 'store/store';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "store/store";

interface TestCardProps {
  test:{
    type: string;
    title: string; 
    description: string; 
    price: number; 
    timeTaken: string; 
    id:number;
  }
}

const TestCard: React.FC<TestCardProps> = ({ test }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state: RootState) => state.cart.cartItems);

  const navigate = useNavigate();

  const handleAddToCart = async () => {
    try {
      const resultAction = await dispatch(addToCart(test));
  
      if (addToCart.fulfilled.match(resultAction)) {
        setIsAddedToCart(true);
        setModalMessage(`${test.title} has been added to the cart`);
        setModalOpen(true);
      } else if (addToCart.rejected.match(resultAction)) {
        setModalMessage(`Failed to add ${test.title} to the cart. Please try again.`);
        setModalOpen(true);
      }
  
      setModalOpen(true); 
    } catch (error) {
      setModalMessage(`An error occurred while adding ${test.title} to the cart.`);
      setModalOpen(true);
    }
  };

  const handleRemoveFromCart = async () => {
    try {
      // Dispatch the removeFromCart action and handle any potential failure
      const resultAction = await dispatch(removeFromCart(test.id));

      // Check if the action was rejected
      if (!removeFromCart.rejected.match(resultAction)) {
          setIsAddedToCart(false);
          setModalMessage(`Product ${test.title} is removed from cart`);
          setModalOpen(true);
      }
    } catch (error) {
          setModalMessage(`Something went wrong${error}`);
          setModalOpen(true);
    }
   
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };
 
  const handleOnClickViewDetails = (id:number) => {
      navigate(`/diagnostics/tests/${id}`)
  }

  return (
    <>
    <Card
      sx={{
        margin: "20px",
        padding: "8px",
        borderRadius: "8px",
        boxShadow: 2,
        textAlign: "left",
        p: 1,
        m:0,
      }}
      className="testCardStyle"
    >
      <CardContent className="cardContentStyle">
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
            {test.type === "test" ? "Test" : "Package"}
          </Typography>
        </Box>

        <Typography
          variant="h6"
          sx={{ fontSize: "14px", fontWeight: 600, lineHeight: "2em" }}
          component="div"
        >
          {test.title}
        </Typography>

        <Typography
          className="descriptionStyle"
          variant="body2"
          color="text.secondary"
          sx={{ marginBottom: "10px", fontSize: "12px" }}
        >
          {test.description}
        </Typography>

        <Typography
          variant="h5"
          sx={{ marginBottom: "20px", fontWeight: "bold", fontSize: "1rem" }}
        >
          ₹{test.price}
        </Typography>

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
          {isAddedToCart ? (
          <Button
            variant="contained"
            color="error"
            onClick={handleRemoveFromCart}
            size="small"
            sx={{ width: "100%", textTransform: "capitalize" }}
          >
            Remove
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddToCart}
            size="small"
            sx={{ width: "100%", textTransform: "capitalize" }}
          >
            Add to Cart
          </Button> )}
           
          </Grid>
        </Grid>

        <Divider sx={{ margin: "20px 0" }} />

        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} className="viewDetailsHolderStyle">
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box sx={{ flex: 1 }}>
                <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',alignContent:"center",alignItems:'center',height:'100%'}}>
                  <PageIcon fontSize="small" color="action" sx={{flex:1}}/>
                  <Typography variant="body2" color="text.secondary" sx={{flex:4}} className="timeTakenStyle">
                    {test.timeTaken}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ flex: 1 ,textAlign:'right'}}>
                <Button
                  variant="text"
                  endIcon={<ArrowForwardIcon />}
                  color="primary"
                  sx={{textTransform:'capitalize'}}
                  onClick={() => handleOnClickViewDetails(test.id)}
                >
                  View Details
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300,
            bgcolor: 'background.paper',
            borderRadius: 1,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            {modalMessage}
          </Typography>
          <Button onClick={handleModalClose} sx={{ mt: 2 }}>
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default TestCard;