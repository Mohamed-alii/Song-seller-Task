import React, { useState } from "react";
import { Stepper, Step, StepLabel, Box } from "@mui/material";
import UserSelectionInfo from "../UserSelectionInfo/UserSelectionInfo";
import SteppersButtons from "../SteppersButtons/SteppersButtons";
import Checkout from "../Checkout/Checkout";

const StepperContainer = (props) => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const childrenArray = React.Children.toArray(props.children);
  const currentChild = childrenArray[activeStep];

  const isLastStep = () => {
    return activeStep === childrenArray.length - 1;
  };

  const nextHandler = () => {
    if (isLastStep()) {
      // changing compeleted state to render checkout component
      setCompleted(true);
    } else {
      setActiveStep((prevState) => prevState + 1);
    }
  };

  const backHandler = () => {
    setActiveStep((prevState) => prevState - 1);
  };

  return (
    <Box pt={10}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        style={{
          background: "white",
          paddingTop: "2rem",
          paddingBottom: "1rem",
          color: "white",
          boxShadow: "0px 0px 1px 0px rgba(0,0,0,0.55)",
        }}
      >
        {childrenArray.map((child, index) => {
          const labels = [
            "Select singers",
            "Select Albums",
            "Select songs",
            "User Info",
          ];
          return (
            <Step key={index} completed={activeStep > index || completed}>
              <StepLabel>{labels[index]}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {completed ? (
        <Checkout />
      ) : (
        <>
          <UserSelectionInfo />
          {currentChild}
          <SteppersButtons
            isLastStep={isLastStep}
            nextBtnHandler={nextHandler}
            backBtnHandler={backHandler}
            activeStep={activeStep}
          />
        </>
      )}
    </Box>
  );
};

export default StepperContainer;
