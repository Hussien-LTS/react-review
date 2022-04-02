import React, { useState, useRef } from "react";
import Wrapper from "../Helpers/Wrapper";
import Card from "../UI/Card";
import CustomBtn from "../UI/CustomBtn";
import CustomInput from "../UI/CustomInput";
import CustomLabel from "../UI/CustomLabel";
import ErrorModel from "../UI/ErrorModel";

import classes from "./AddUser.module.css";
const AddUser = (props) => {
  // const nameInputRef = useRef();
  // const ageInputRef = useRef();

  const [entredUsername, setEntredUsername] = useState("");
  const [entredAge, setEntredAge] = useState("");
  const [error, setError] = useState();
  const usernameChangeHandler = (e) => {
    setEntredUsername(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setEntredAge(e.target.value);
  };
  const addUserHandler = (e) => {
    // console.log(nameInputRef);
    e.preventDefault();
    if (entredUsername.trim().length === 0 || entredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        msg: "kindly enter a valid name and age",
      });
      return;
    }
    if (+entredAge < 1) {
      setError({
        title: "Invalid age",
        msg: "kindly enter a valid age (> 0)",
      });
      return;
    }
    props.onAddUser(entredUsername, entredAge);
    setEntredUsername("");
    setEntredAge("");
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModel
          title={error.title}
          msg={error.msg}
          onConfirm={errorHandler}
        />
      )}
      <Card classname={classes.input}>
        <form onSubmit={addUserHandler}>
          <CustomLabel htmlFor="username" labelText="Username" />
          <CustomInput
            id="username"
            value={entredUsername}
            type="text"
            onChange={usernameChangeHandler}
            // ref ={nameInputRef}
          />
          <CustomLabel htmlFor="age" labelText="age (Years)" />
          <CustomInput
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={entredAge}
            // ref ={ageInputRef}
          />
          <CustomBtn type="submit">Add User</CustomBtn>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUser;
