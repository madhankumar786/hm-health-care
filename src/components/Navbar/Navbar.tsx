// src/components/Navbar.tsx
import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { Home as HomeIcon, Search as SearchIcon, QuestionAnswer as QuestionAnswerIcon, LibraryBooks as LibraryBooksIcon, HealthAndSafety as HealthAndSafetyIcon } from '@mui/icons-material';

const tabs = [
  { label: 'Knowledge', icon: <HomeIcon /> },
  { label: 'Diagnostics', icon: <SearchIcon /> },
  { label: 'Ask an Expert', icon: <QuestionAnswerIcon /> },
  { label: 'Magazine', icon: <LibraryBooksIcon /> },
  { label: 'Health Summit', icon: <HealthAndSafetyIcon /> },
];

interface NavbarProps {
  selectedTab: number;
  onTabChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const Navbar: React.FC<NavbarProps> = ({ selectedTab, onTabChange }) => {
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', display: 'flex', justifyContent: 'center', boxShadow: '0px 2px 10px rgba(40, 159, 255, 0.3)'}}>
      <Tabs
        value={selectedTab}
        onChange={onTabChange}
        aria-label="nav tabs"
        variant="scrollable"
        scrollButtons="auto"
        TabIndicatorProps={{
            sx: { top: 0 }, // Move the indicator to the top
          }}
        sx={{
          borderBottom: 1,
          borderColor: 'divider'
        }}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={tab.label}
            icon={tab.icon}
            label={tab.label}
            iconPosition="start"
            
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default Navbar;
