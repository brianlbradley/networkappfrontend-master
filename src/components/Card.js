import React, { useState } from "react";

const onUpdateCB = (ischecked, loginuser, userid, setisChecked,event) => {

  console.log(ischecked, loginuser, userid);
  setisChecked(previousValue => !previousValue)

  fetch('http://localhost:3000/cb', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify({
      loginuser,
      userid,
      ischecked: ischecked
    })
  })
};

const Card = props => {
  const [isChecked, setisChecked] = useState(props.ischecked);

  // Similar to componentDidMount and componentDidUpdate:
 
  return (
    <div
      className="pointer bg-light-green dib br3 pa3 ma2 shadow-5"
      onClick={() => props.handleClick(props.id)}
      //onClick={(e) => e.stopPropagation()}

    >
      <div>
        <h3>{props.name}</h3>
        <p>{props.company}</p>
        <p>{props.phone}</p>
        <p>{props.email}</p>
        <p>{props.city}</p>
      </div>
      <div>
        My Network
        <input
          className="largeCheckbox"
          type="checkbox"
          checked={isChecked}
          onClick={(event) =>
            onUpdateCB(!isChecked, props.loginuser.id, props.id, setisChecked,event.stopPropagation())
          }
        />
      </div>
    </div>
  );
};

export default Card;

//.then(response => console.log("cb resp", response, response.json()));
  // .then(res => console.log(`cb resp: ${res}`));

  //   .then(email => {
  //     // debugger;
  //     // if (email.email.email === props.email) {
  //     //   console.log(!ischecked);
  //     //   setIsChecked(!ischecked);

  //     // }
  //   });
