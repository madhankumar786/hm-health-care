import React from 'react';
import { Box, Grid, Typography, Button, Card, CardContent, SvgIcon } from '@mui/material';
import FamilyImage from '../../assets/png/smallFamily.png'; 
import { ReactComponent as ContactIcon } from '../../assets/svg/callBack.svg';
import { SearchBar } from 'components';
import {Biotech as TestIcon, ArrowForward as ArrowForwardIcon, ManOutlined as CheckupIcon } from '@mui/icons-material';

const Banner: React.FC = () => {
  return (
    <Box sx={{ padding: { xs: '8px', sm: '8px', md: '48px' } }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Box sx={{ padding: '32px', borderRadius: '8px' ,textAlign:'left'}}>
            <Typography variant="h5" color="textPrimary" gutterBottom sx={{fontWeight:'bold',color:'#fccb42'}}>
             Unlock health for you and your family
            </Typography>
            <Typography variant="h6" color="textSecondary" sx={{fontWeight:'bold',textTransform:'capitalize'}}>
              With our smart diagnostic services and personalized health insights
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <SearchBar />
          </Box>
         
        </Grid>
        {/* Right Section - Family Image */}
        <Grid item xs={12} md={3}>
          <Box sx={{ textAlign: 'center' }}>
            <img src={FamilyImage} alt="Family" style={{ width: '100%', maxWidth: '400px' }} />
          </Box>
        </Grid>

        {/* Second Section - Card */}
        <Grid item xs={12} md={3}>
          <Card sx={{ maxWidth: '400px', margin: '0 auto', padding: '24px', borderRadius: '5px', backgroundImage: 'linear-gradient(to right, #ffe396 , #fac534)' }}>
            <CardContent>
              <Typography variant="h5" color="textPrimary" gutterBottom>
                Book a Home Collection
              </Typography>
              <SvgIcon component={ContactIcon} sx={{ fontSize: 60, color: '#289fff', marginBottom: '16px' }} />
              <Button variant="contained" color="primary" fullWidth sx={{textTransform:'capitalize',borderRadius:'30px'}}>
                Request a Callback
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={9}>
        <Box sx={{display:'flex', jutifyContent:'center', flexDirection:'row',flexWrap:'wrap'}}>
          <Box sx={{p:3, flex:1}}>
            <Button
              variant="outlined"
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
              startIcon={<TestIcon sx={{ color:'#289fff'}} />} 
              endIcon={<ArrowForwardIcon sx={{ color:'#289fff'}} />}
            >
              Test
            </Button>
            
          </Box>
          <Box sx={{p:3 , flex:1}}>
          <Button
              variant="outlined"
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
              startIcon={<CheckupIcon sx={{ color:'#289fff'}} />} 
              endIcon={<ArrowForwardIcon sx={{ color:'#289fff'}} />}
            >
              Smart Health Check-Up
            </Button>
          </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
