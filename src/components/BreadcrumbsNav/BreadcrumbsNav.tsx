import React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

interface BreadcrumbProps {
  title?: string; // Pass the test title dynamically
}

const BreadcrumbsNav: React.FC<BreadcrumbProps> = ({ title }) => {
  const location = useLocation();

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link
        component={RouterLink}
        to="/diagnostics"
        underline="hover"
        color="inherit"
      >
        Diagnostics
      </Link>

      {location.pathname.includes("/tests") && (
        <Link
          component={RouterLink}
          to="/diagnostics/tests"
          underline="hover"
          color="inherit"
        >
          Tests
        </Link>
      )}

      {title && <Typography color="text.primary">{title}</Typography>}
    </Breadcrumbs>
  );
};

export default BreadcrumbsNav;
