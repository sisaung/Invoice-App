import React from "react";
import Container from "./components/Container";
import RecordGroup from "./components/RecordGroup";
import Checkoutform from "./components/Checkoutform";
import Footer from "./components/Footer";
import ProductDrawer from "./components/ProductDrawer";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Container>
        <ProductDrawer />
        <Header />
        <Checkoutform />
        <RecordGroup />
        <Footer />
      </Container>
    </>
  );
};

export default App;
