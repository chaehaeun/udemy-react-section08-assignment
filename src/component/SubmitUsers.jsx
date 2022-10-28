import React from "react";
import { useState } from "react";
import styles from "./SubmitUsers.module.css";
import Box from "./UI/Box";
import Button from "./UI/Button";

export default function SubmitUsers({ addData, modalHandler }) {
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
    if (nameVal === "" || ageVal === "") {
      modalHandler("noValue");
      setNameValue("");
      setAgeValue("");
      return;
    } else if (ageVal < 1) {
      modalHandler("invalidNum");
      setNameValue("");
      setAgeValue("");
      return;
    }
    addData(nameVal, ageVal);
    modalHandler("success");
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
            step="1"
            max="120"
            value={ageVal}
            onChange={ageChangeHandler}
          />
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Box>
  );
}
