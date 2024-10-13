import React, { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css';
import {ModalSearch} from 'components';

const SearchBar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

   // Function to handle opening the modal
   const handleSearchClick = () => {
    setIsModalOpen(true);
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
    <TextField
      variant="outlined"
      placeholder="Search by tests or checkups..."
      fullWidth
      className="searchBarStyle"
      onClick={handleSearchClick} // Open modal on click
      sx={{
        backgroundColor:'#ffffff',
        border:'2px solid #289fff',
        borderRadius:'4px',
        width: { xs: '100%', sm: '100%', md: '80%', lg: '90%' },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#289fff', 
          },
          '&:hover fieldset': {
            borderColor: '#289fff', 
          },
          '&.Mui-focused fieldset': {
            borderColor: '#289fff', 
          },
        },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon color="primary" />
          </InputAdornment>
        ),
      }}
    />
    {/* ModalSearch Component */}
    <ModalSearch open={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default SearchBar;
