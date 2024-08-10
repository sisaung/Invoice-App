import React from "react";
import Container from "./components/Container";
import RecordGroup from "./components/RecordGroup";
import Checkoutform from "./components/Checkoutform";
import Footer from "./components/Footer";
import ProductDrawer from "./components/ProductDrawer";

const App = () => {
  return (
    <>
      <Container>
        <ProductDrawer />
        <Checkoutform />
        <RecordGroup />
        <Footer />
      </Container>
    </>
  );
};

export default App;
