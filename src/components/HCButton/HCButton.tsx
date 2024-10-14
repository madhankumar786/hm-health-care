import React from 'react';
import { Button as MUIButton, ButtonProps as MUIButtonProps } from '@mui/material';

interface ButtonProps extends MUIButtonProps {
  label: string; 
  onClick: () => void; 
  startIcon?: React.ReactNode; 
  endIcon?: React.ReactNode; 
}

const HCButton: React.FC<ButtonProps> = ({ label, onClick, startIcon, endIcon, ...props }) => {
  return (
    <MUIButton
      variant="outlined"
      onClick={onClick}
      startIcon={startIcon} 
      endIcon={endIcon}
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
      {...props} 
    >
      {label}
    </MUIButton>
  );
};

export default HCButton;
