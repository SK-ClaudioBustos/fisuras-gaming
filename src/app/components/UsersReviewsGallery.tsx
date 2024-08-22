"use client"
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MobileStepper from '@mui/material/MobileStepper';
import { useState } from "react";
import Reviews from "../data/reviewsData";
import { UserReview } from "./UserReview";
import { color4 } from '../styles/colors';

const boxReviews = {
  borderRadius: "10px",
  backgroundColor: "#000",
  padding: "3vw",
  margin: "auto",
  justifyItems: "center"
}

const mobileStyles = {
  backgroundColor: color4,
  borderRadius: "10px",
  height: "5vh",
  width: "30%",
  margin: "2vh auto auto auto"
}

export default function TextMobileStepper() {

  const cantidadResenias = Reviews.length;

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
    <Box marginTop={"10vw"}>
      <Box sx={{ display: "flex", flexDirection: "column", textAlign: "center", marginBottom: "1rem" }}>
        <Typography fontSize={"3vw"}>
          Reseñas de usuarios
        </Typography>
        <Typography fontSize={"2vw"}>
          Te dejamos algunos comentarios de nuestros mas fieles jugadores
        </Typography>
      </Box>
      <Box sx={boxReviews}>

        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
          <UserReview
            title={Reviews[anterior].nombre}
            description={Reviews[anterior].descripcion}
            subtitle={Reviews[anterior].rango}
            thumbnail="./img/user.png" />
          <UserReview title={Reviews[activeStep].nombre} description={Reviews[activeStep].descripcion} subtitle={Reviews[activeStep].rango} thumbnail="./img/user.png" />
          <UserReview
            title={Reviews[siguiente].nombre}
            description={Reviews[siguiente].descripcion}
            subtitle={Reviews[siguiente].rango}
            thumbnail="./img/user.png" />
        </Box>

        <MobileStepper
          steps={cantidadResenias}
          position="static"
          activeStep={activeStep}
          sx={mobileStyles}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}>
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack}>
              <KeyboardArrowLeft />
            </Button>
          }
        />
      </Box>
    </Box>

  );
}

