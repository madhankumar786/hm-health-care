import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import { FAQList } from 'types';

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionComponentProps {
  data: FAQList;
}

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  borderBottom: '2px solid black', 
  backgroundColor:'transparent',
  boxShadow:'none',
  textAlign:'left'
}));

const AccordionComponent: React.FC<AccordionComponentProps> = ({ data }) => {
  return (
    <Box>
      {data.map((item, index) => (
        <StyledAccordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: '#289fff' }} />} 
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.description}</Typography>
          </AccordionDetails>
        </StyledAccordion>
      ))}
    </Box>
  );
};

export default AccordionComponent;