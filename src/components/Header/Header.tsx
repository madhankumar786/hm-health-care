// src/components/Header.tsx
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme, Box, Typography } from '@mui/material';
import { Menu as MenuIcon, Home as HomeIcon, Search as SearchIcon, QuestionAnswer as QuestionAnswerIcon, LibraryBooks as LibraryBooksIcon, HealthAndSafety as HealthAndSafetyIcon } from '@mui/icons-material';
import {Navbar} from 'components';

const tabs = [
  { label: 'Knowledge', icon: <HomeIcon /> },
  { label: 'Diagnostics', icon: <SearchIcon /> },
  { label: 'Ask an Expert', icon: <QuestionAnswerIcon /> },
  { label: 'Magazine', icon: <LibraryBooksIcon /> },
  { label: 'Health Summit', icon: <HealthAndSafetyIcon /> },
];

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <AppBar position="static" sx={{boxShadow:'none'}}>
         {isMobile && (
      <Toolbar>
        {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'block', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Box
          sx={{
            flexGrow: 1,
            display: isMobile ? 'block' : 'none',
            backgroundColor: '#289fff',
            color: '#fff',
            textAlign: 'center',
            padding: '8px',
          }}
        >
          <Typography variant="h6">My Application</Typography>
        </Box>
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <List>
            {tabs.map((tab, index) => (
              <ListItemButton key={tab.label} onClick={() => { setSelectedTab(index); toggleDrawer(false)(); }}>
                <ListItemIcon>{tab.icon}</ListItemIcon>
                <ListItemText primary={tab.label} />
              </ListItemButton>
            ))}
          </List>
        </Drawer>
      </Toolbar>
         )}
      {/* Navbar should be rendered with selectedTab and onTabChange props */}
      {!isMobile && (
        <Navbar selectedTab={selectedTab} onTabChange={handleTabChange} />
      )}
    </AppBar>
  );
};

export default Header;
