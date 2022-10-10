import React from "react";
import Section from "./Section";

function Home() {
  return (
    <div className="Container">
      <Section
        title="Model S"
        description="Order online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        leftButtonText="Order now"
        rightButtonText="Learn more"
      />
      <Section
        title="Solar for new Roofs"
        description="Solar roof costs less than a new roof plus solar panels"
        backgroundImg="solar-roof.jpg"
        leftButtonText="Order now"
        rightButtonText="Learn more"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftButtonText="Shop now"
        rightButtonText=""
      />
    </div>
  );
}

export default Home;
