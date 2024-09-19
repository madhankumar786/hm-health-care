import React, { useState } from "react";
import { Box, useMediaQuery,useTheme } from "@mui/material";
import { Banner, TitleComponent, PackagesComponent, AccordionComponent } from "components";

const data = [
  "Pregnancy",
  "AIDS",
  "Covid-19",
  "Anemia",
  "SARS",
  "Arthritis",
  "Cancer",
  "Hairfall",
  "Dental",
  "Dengue",
  "Fever",
  "ENT",
  "Psoriasis",
  "Eczema",
  "Fracture",
  "Prostate",
  "Dialysis",
  "Cardiac",
  "Asthma",
  "Diabetes",
];
const accordionData = [
  { title: 'What is React?', content: 'React is a JavaScript library for building user interfaces.' },
  { title: 'What is TypeScript?', content: 'TypeScript is a superset of JavaScript that adds static typing.' },
  { title: 'What is Material UI?', content: 'Material UI is a popular React UI framework.' },
];
const checkupData = [];

const Diagnostics: React.FC = () => {
  const [showMore, setShowMore] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  // Toggle to show more or less items
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Box
      sx={{
        padding: isMobile ? '16px' : "40px",
        backgroundImage:
          "linear-gradient(to bottom right, #faeca5, #e4e7eb, #99d1ff)",
      }}
    >
      <Banner />
      <TitleComponent title="Disease Specific Packages" />
      <PackagesComponent data={data} />
      <TitleComponent title="Body Organ Checkup Packages" />
      <PackagesComponent data={data} />
      <TitleComponent title="DiagnosticS - FAQ" />
      <AccordionComponent data={accordionData} />
    </Box>
  );
};

export default Diagnostics;
