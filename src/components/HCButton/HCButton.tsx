import React from 'react';
import { Button as MUIButton, ButtonProps as MUIButtonProps } from '@mui/material';

interface ButtonProps extends MUIButtonProps {
  label: string; // The label for the button
  onClick: () => void; // The function to handle the button click
  startIcon?: React.ReactNode; // Optional icon on the left side
  endIcon?: React.ReactNode; // Optional icon on the right side
}

const HCButton: React.FC<ButtonProps> = ({ label, onClick, startIcon, endIcon, ...props }) => {
  return (
    <MUIButton
      variant="outlined"
      onClick={onClick}
      startIcon={startIcon} // Icon on the left
      endIcon={endIcon} // Icon on the right
      sx={{
        borderColor: '#289fff', 
        backgroundColor: '#d9f3fa', 
        color: '#289fff', 
        fontWeight:'bold',
        border: '2px solid #289fff', 
        '&:hover': {
          backgroundColor: '#cce7ff', 
          border: '2px solid #289fff',
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent:'space-between',
        gap: '8px',
        minHeight:'60px',
        width:'100%',
        textTransform:'capitalize'
      }}
      {...props} // Pass other props to MUIButton
    >
      {label}
    </MUIButton>
  );
};

export default HCButton;
