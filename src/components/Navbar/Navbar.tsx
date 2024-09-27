//lib
import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { Home as HomeIcon, Search as SearchIcon, QuestionAnswer as QuestionAnswerIcon, LibraryBooks as LibraryBooksIcon, HealthAndSafety as HealthAndSafetyIcon } from '@mui/icons-material';
//app
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const tabs = [
  { label: 'Diagnostics',link:'diagnostics', icon: <SearchIcon /> },
  { label: 'Knowledge', link:'knowledge', icon: <HomeIcon /> },
  { label: 'Ask an Expert',link:'askAnExpert', icon: <QuestionAnswerIcon /> },
  { label: 'Magazine', link:'magazine', icon: <LibraryBooksIcon /> },
  { label: 'Health Summita', link:'healthSummita', icon: <HealthAndSafetyIcon /> },
];

interface NavbarProps {
  selectedTab: number;
  onTabChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const Navbar: React.FC<NavbarProps> = ({ selectedTab, onTabChange }) => {
  const navigate = useNavigate();

  const handleNavigation = (path:string) => {
    let redirectPath = path.toLowerCase();
    navigate(redirectPath);
  };
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', display: 'flex', justifyContent: 'center', boxShadow: '0px 2px 10px rgba(40, 159, 255, 0.3)'}}>
      <Tabs
        value={selectedTab}
        onChange={onTabChange}
        aria-label="nav tabs"
        variant="scrollable"
        scrollButtons="auto"
        TabIndicatorProps={{
            sx: { top: 0 },
          }}
        sx={{
          borderBottom: 1,
          borderColor: 'divider'
        }}
        className='tabsStyle'
      >
        {tabs.map((tab, index) => (
          <Tab
            key={tab.label}
            icon={tab.icon}
            label={tab.label}
            iconPosition="start"
            sx={{textTransform:'capitalize'}}
            onClick={() => handleNavigation(tab.link)}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default Navbar;
