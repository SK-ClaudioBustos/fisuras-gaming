import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MobileStepper from '@mui/material/MobileStepper';
import { useTheme } from '@mui/material/styles';
import { useState } from "react";
import ReseniasUsuarios from "../data/usersData";
import { UserReview } from "./UserReview";

export default function TextMobileStepper() {

  const cantidadResenias = ReseniasUsuarios.length;

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep === cantidadResenias - 1 ? 0 : activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep === 0 ? cantidadResenias - 1 : activeStep - 1);
  };
  const anterior = activeStep === 0 ? cantidadResenias - 1 : activeStep - 1;
  const siguiente = activeStep === cantidadResenias - 1 ? 0 : activeStep + 1;

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", textAlign: "center", marginBottom: "1rem" }}>
        <Typography fontSize={"3vw"}>
          Reseñas de usuarios
        </Typography>
        <Typography fontSize={"2vw"}>
          Te dejamos algunos comentarios de nuestros mas fieles jugadores
        </Typography>
      </Box>
      <Box sx={{ borderRadius: "5px", backgroundColor: "#485697", padding: "3vw", margin: "auto", justifyItems: "center" }}>

        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
          <UserReview
            title={ReseniasUsuarios[anterior].nombre}
            description={ReseniasUsuarios[anterior].descripcion}
            subtitle={ReseniasUsuarios[anterior].rango}
            thumbnail="./img/user.png" />
          <UserReview title={ReseniasUsuarios[activeStep].nombre} description={ReseniasUsuarios[activeStep].descripcion} subtitle={ReseniasUsuarios[activeStep].rango} thumbnail="./img/user.png" />
          <UserReview
            title={ReseniasUsuarios[siguiente].nombre}
            description={ReseniasUsuarios[siguiente].descripcion}
            subtitle={ReseniasUsuarios[siguiente].rango}
            thumbnail="./img/user.png" />
        </Box>

        <MobileStepper
          variant="dots"
          steps={cantidadResenias}
          position="static"
          activeStep={activeStep}
          sx={{ backgroundColor: "#4E61B6", borderRadius: "10px", height: "5vh", width: "30%", margin: "2vh auto auto auto" }}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>
          }
        />
      </Box>
    </>

  );
}

