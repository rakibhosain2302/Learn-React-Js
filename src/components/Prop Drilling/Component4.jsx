import React from "react";

const Component4 = ({ data }) => {
  console.log("Data received:", data);

  // The safety check is good practice!
  if (!data) {
    return <p>No data available yet...</p>;
  }

  return (
    <div className="mt-5">
      <h2 className="text-center">Prop Drilling Example</h2>
      <div
        style={{ border: "1px solid #ccc", padding: "10px" }}
        
      >
        <h3>User Profile</h3>
        <p>
          <strong>Username:</strong> {data.userName}
        </p>
        <p>
          <strong>Age:</strong> {data.age}
        </p>
      </div>
    </div>
  );
};

export default Component4;
