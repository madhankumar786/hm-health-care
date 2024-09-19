import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css';

const SearchBar: React.FC = () => {
  return (
    <TextField
      variant="outlined"
      placeholder="Search by tests or checkups..."
      fullWidth
      className="searchBarStyle"
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
  );
};

export default SearchBar;
