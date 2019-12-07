import React from "react";

const Navigation = ({ onRouteChange, isSignedIn, fetchData }) => {
  if (isSignedIn) {
    return (
      <div>
        <h4
          className="fr mr2 navigation underline pointer pa1"
          onClick={() => {
            fetchData();
            onRouteChange("signin");
          }}
        >
          Sign Out
        </h4>
      </div>
    );
  } else {
    return (
      <div>
        <h4
          className="fr mr2 navigation underline pointer"
          onClick={() => onRouteChange("signin")}
        >
          Sign In or Register{" "}
        </h4>
      </div>
    );
  }
};

export default Navigation;
