import React, { useState } from "react";
import "./SteppersButtons.css";
import { Button, Step } from "@mui/material";
import { useSelector } from "react-redux";

const SteppersButtons = ({
  isLastStep,
  nextBtnHandler,
  backBtnHandler,
  activeStep,
}) => {
  const userSelectionState = useSelector((state) => state);
  let nextBtnDisabled = false;

  const stepOneVerified = userSelectionState.selectedSingers.length > 0;
  const stepTwoVerified = userSelectionState.selectedAlbums.length > 0;
  const stepThreeVerified = userSelectionState.selectedSongs.length > 0;
  const stepFourVerified = userSelectionState.name && userSelectionState.mobile && userSelectionState.email;// check input fileds

    // checking active step status to disable next btn if needed
  switch (activeStep) {
    case 0:
      nextBtnDisabled = !stepOneVerified;
      break;
    case 1:
      nextBtnDisabled = !stepTwoVerified;
      break;
    case 2:
      nextBtnDisabled = !stepThreeVerified;
      break;
    case 3:
      nextBtnDisabled = !stepFourVerified;
      break;
    default:
      break;
  }

  return (
    <div className="stepper-btns">
      {activeStep > 0 ? (
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: "1rem" }}
          onClick={backBtnHandler}
        >
          Back
        </Button>
      ) : null}
      <Button
        disabled={nextBtnDisabled}
        variant="contained"
        color="primary"
        style={{ marginLeft: "1rem" }}
        onClick={nextBtnHandler}
      >
        {isLastStep() ? "Place order" : "Next"}
      </Button>
    </div>
  );
};

export default SteppersButtons;
