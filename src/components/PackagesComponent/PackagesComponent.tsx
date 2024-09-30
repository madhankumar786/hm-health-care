import React, { useState } from "react";
import { Box, Grid, Button } from "@mui/material";
import { TileCardComponent } from "components";
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import {
  Favorite as FavoriteIcon,
  PregnantWomanOutlined as Pregnancy,
  BloodtypeOutlined as CancerIcon,
  BrokenImageOutlined as BoneIcon,
  CoronavirusOutlined,
  AccessibleForwardOutlined as AIDSIcon,
  WaterDropOutlined as AnemiaIcon,
  LocalHospitalOutlined as LeukemiaIcon,
  AirlineSeatReclineExtraOutlined as DentalIcon, 
  SickOutlined as DengueIcon, 
  VaccinesOutlined as FeverIcon, 
  PsychologyOutlined as MigraineIcon, 
  HearingOutlined as ENTIcon, 
  VolunteerActivismOutlined as CardiacIcon, 
  TroubleshootOutlined as DialysisIcon, 
  GrassOutlined as HairfallIcon, 
  GrainOutlined as EczemaIcon, 
  BubbleChartOutlined as PsoriasisIcon, 
  AirOutlined as AsthmaIcon, 
  AccessibleOutlined as FractureIcon,
  FilterDramaOutlined as ProstateIcon,
  WidgetsOutlined as DiabetesIcon
} from "@mui/icons-material";
import DownArrow from "@mui/icons-material/KeyboardArrowDown";
import { Item } from "types";
import { useNavigate } from "react-router-dom";


interface PackagesComponentProps {
  data: Item[];
}

const PackagesComponent: React.FC<PackagesComponentProps> = ({ data }) => {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleOnClickPackage = () => {
      navigate('/diagnostics/tests')
  }
  
  const getIconByName = (name: string) => {
    switch (name.toLowerCase()) {
      case "pregnancy":
        return <Pregnancy />;
      case "aids":
        return <AIDSIcon />;
      case "covid-19":
        return <CoronavirusOutlined />;
      case "anemia":
        return <AnemiaIcon/>;
      case "arthritis":
        return <BoneIcon/>;
      case "cancer":
        return <CancerIcon/>;
      case "leukemia":
        return <LeukemiaIcon/>;
      case "dental":
        return <DentalIcon/>;
      case "dengue":
        return <DengueIcon/>;
      case "fever":
        return <FeverIcon/>;
      case "migraine":
        return <MigraineIcon/>;
      case "ent":
        return <ENTIcon/>;
      case "cardiac":
        return <CardiacIcon/>;
      case "dialysis":
        return <DialysisIcon/>;
      case "hairfall":
        return <HairfallIcon/>;
      case "eczema":
        return <EczemaIcon/>;
      case "psoriasis":
        return <PsoriasisIcon/>;
      case "asthma":
        return <AsthmaIcon/>;
      case "fracture":
        return <FractureIcon/>;
      case "prostate":
        return <ProstateIcon/>;
      case "diabetes":
        return <DiabetesIcon/>;
      default:
        return <FavoriteIcon />; 
    }
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Grid
        container
        spacing={2}
        sx={{ alignItems: "center", justifyContent: "left" }}
      >
        {data.slice(0, showMore ? data.length : 10).map((item, index) => (
          <Box key={index}>
            <TileCardComponent
              name={item.name}
              Icon={getIconByName(item.name)}
              handleOnClickPackage={handleOnClickPackage}
            />
          </Box>
        ))}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
        <Button
          variant="text"
          endIcon={<DownArrow />}
          onClick={handleShowMore}
          sx={{
            color: "#289fff",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "#f7fdff73",
            },
          }}
        >
          {showMore ? "Show Less" : "Show More"}
        </Button>
      </Box>
    </Box>
  );
};

export default PackagesComponent;