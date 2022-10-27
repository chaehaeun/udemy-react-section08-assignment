import React from "react";
import Box from "../UI/Box";
import Button from "../UI/Button";
import styles from "./Modal.module.css";

export default function Modal() {
  return (
    <div className={styles.modal}>
      <Box>
        <div className={styles.title}>
          <h3>Invalid Input</h3>
        </div>
        <div className={styles.cont}>
          <p>Please enter a valid name and age(non-empty values).</p>
          <Button>Okay</Button>
        </div>
      </Box>
    </div>
  );
}
