import React from "react";

const User = (props) => {
  console.log(props);
  return (
    <>
      <h1>Hello! {props.data.name}</h1>
    </>
  );
};

export default User;
