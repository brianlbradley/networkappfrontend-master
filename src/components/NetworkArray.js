import React from "react";
import Card from "./Card";

const NetworkArray = ({
  network,
  networkusers,
  handleChange,
  handleClick,
  loginuser
}) => {
  console.log("in network array", networkusers);

  const cardComponent = network.map((user, i) => {
    const ischecked = networkusers.some(n => {
      var nw = n.id === loginuser.id && n.connections === network[i].id;
      return nw;
    });
  


    console.log("i'm checked", ischecked);

    return (
   
      <Card
        key={network[i].id}
        name={network[i].firstname + " " + network[i].lastname}
        company={network[i].company}
        phone={network[i].phone}
        email={network[i].email}
        city={network[i].city}
        ischecked={ischecked}
        handleClick={handleClick}
        id={network[i].id}
        loginuser={loginuser}
      />
    );
  });
  return <div>{cardComponent}</div>;
};

export default NetworkArray;
