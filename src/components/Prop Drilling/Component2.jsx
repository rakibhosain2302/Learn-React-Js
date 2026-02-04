import React from "react";
import Component3 from "./Component3";

// Destructure 'data' directly from props
const Component2 = ({ data }) => {
 return <Component3 data={data} />;
};

export default Component2;