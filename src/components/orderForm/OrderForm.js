import React, { useState } from "react";
import { TextField, Box, Grid } from "@mui/material";
import { useDispatch } from 'react-redux';
import { saveUsername , saveUserEmail, saveUserMobile } from "../../store/actions";

const OrderForm = () => {
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const dispatch = useDispatch();

  const validateEmail = (email) => {
    let emailValidation = /\S+@\S+\.\S+/;
    return emailValidation.test(email);
  };

  const nameBlurHandler = (e) => {
    const name = e.target.value;
    const hasNumber = /\d/;
    if (hasNumber.test(name)) {
      setNameError("Numbers are not allowed");
      dispatch(saveUsername(''));
    } else {
      setNameError("");
      //dispatch add the value to redux
      dispatch(saveUsername(name));
    }
  };

  const emailBlurHandler = (e) => {
    const email = e.target.value;
    if (validateEmail(email)) {
      setEmailError("");
      //dispatch add the value to redux
      dispatch(saveUserEmail(email));
    } else {
      setEmailError("Invalid Email");
      dispatch(saveUserEmail(''));
    }
  };

  const mobileBlurHandler = (e) => {
    const mobileNumber = e.target.value;
    if (isNaN(mobileNumber)) {
      setMobileError("Only numbers allowed");
      dispatch(saveUserMobile(''));
    } else {
      setMobileError("");
      //dispatch add the value to redux
      dispatch(saveUserMobile(mobileNumber));
    }
  };

  return (
    <Grid container direction="column" alignItems="center" py={12} style={{ boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.55)', marginTop: '1rem' , backgroundColor: 'white' }}>
      <Box p={2} style ={{minWidth: '60%'}}>
        <TextField
          label="Name"
          error={nameError ? true : false}
          helperText={nameError}
          variant="outlined"
          onBlur={nameBlurHandler}
          fullWidth={true}
        />
      </Box>
      <Box p={2} style ={{minWidth: '60%'}}>
        <TextField
          label="Email"
          error={emailError ? true : false}
          helperText={emailError}
          variant="outlined"
          onBlur={emailBlurHandler}
          fullWidth={true}
        />
      </Box>
      <Box p={2} style ={{minWidth: '60%'}}>
        <TextField
          label="Mobile"
          error={mobileError ? true : false}
          helperText={mobileError}
          variant="outlined"
          onBlur={mobileBlurHandler}
          fullWidth={true}
        />
      </Box>
    </Grid>
  );
};

export default OrderForm;
