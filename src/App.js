import React from "react";
import "./App.css";
import Singers from "./components/Singers/Singers";
import StepperContainer from "./components/StepperContainer/StepperContainer";
import Albums from "./components/Albums/Albums";
import Songs from "./components/Songs/Songs";
import OrderForm from "./components/orderForm/OrderForm";
import { Container, Paper } from "@mui/material";

const App = () => {

  return (
    <Paper style={{ background: "#ECECEC", minHeight: "100vh" }}>
      <Container>
        <StepperContainer>
          <Singers />
          <Albums />
          <Songs />
          <OrderForm />
        </StepperContainer>
      </Container>
    </Paper>
  );
};

export default App;
