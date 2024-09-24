import React, { useState, useEffect } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  Banner,
  TitleComponent,
  PackagesComponent,
  AccordionComponent,
} from "components";
import { fetchPackages, RootState, AppDispatch, fetchFAQ, fetchOrgansPackages, showSnackbar } from "store/store";

const dataa = [
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
  {
    title: "What is React?",
    content: "React is a JavaScript library for building user interfaces.",
  },
  {
    title: "What is TypeScript?",
    content: "TypeScript is a superset of JavaScript that adds static typing.",
  },
  {
    title: "What is Material UI?",
    content: "Material UI is a popular React UI framework.",
  },
];
const checkupData = [];

const Diagnostics: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch<AppDispatch>();
  // const { data, loading, error } = useSelector((state: RootState) => state.packages);
  // Accessing packages data
  const {
    data: packagesData,
    loading: packagesLoading,
    error: packagesError,
  } = useSelector((state: RootState) => state.packages);

  // Accessing FAQ data
  const {
    data: faqData,
    loading: faqLoading,
    error: faqError,
  } = useSelector((state: RootState) => state.faq);

  // Accessing Organs Packages data
  const {
    data: organsData,
    loading: organsLoading,
    error: organsError,
  } = useSelector((state: RootState) => state.organsPackages);

  useEffect(() => {
    dispatch(fetchPackages());
    dispatch(fetchFAQ());
    dispatch(fetchOrgansPackages());
  }, [dispatch]);

  if (packagesLoading || faqLoading || organsLoading) return <div>Loading...</div>;
  if (packagesError) return <div>Error: {packagesError}</div>;
  if (faqError) {
    return <div>Error loading FAQ: {faqError}</div>;
  }
  if (organsError) {
    dispatch(
      showSnackbar({
        message: organsError,
        severity: 'error',
      })
    );
    // return <div>Error loading Organs: {organsError}</div>;
  }

  console.log(organsData, "organsData from redux toolkit786");
  return (
    <Box
      sx={{
        padding: isMobile ? "16px" : "40px",
        backgroundImage:
          "linear-gradient(to bottom right, #faeca5, #e4e7eb, #99d1ff)",
      }}
    >
      <Banner />
      <TitleComponent title="Disease Specific Packages" />
      {packagesData && <PackagesComponent data={packagesData} />}
      <TitleComponent title="Body Organ Checkup Packages" />
      {organsData && <PackagesComponent data={organsData} />}
      <TitleComponent title="DiagnosticS - FAQ" />
      {faqData && <AccordionComponent data={faqData} />}
    </Box>
  );
};

export default Diagnostics;
