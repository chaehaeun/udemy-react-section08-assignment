import React from "react";
import { useState } from "react";
import styles from "./SubmitUsers.module.css";
import Box from "./UI/Box";
import Button from "./UI/Button";

export default function SubmitUsers({ addData }) {
  const [nameVal, setNameValue] = useState("");
  const nameChangeHandler = (e) => {
    setNameValue((prev) => (prev = e.target.value));
  };

  const [ageVal, setAgeValue] = useState("");
  const ageChangeHandler = (e) => {
    setAgeValue((prev) => (prev = e.target.value));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addData(nameVal, ageVal);
    setNameValue("");
    setAgeValue("");
  };

  return (
    <Box className={styles.submitCont}>
      <form onSubmit={submitHandler}>
        <div>
          <label>Username</label>
          <input type="text" value={nameVal} onChange={nameChangeHandler} />
        </div>
        <div>
          <label>Age (Year)</label>
          <input
            type="number"
            min={1}
            value={ageVal}
            onChange={ageChangeHandler}
          />
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Box>
  );
}
