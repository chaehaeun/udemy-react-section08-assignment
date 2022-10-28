import React from "react";
import Box from "../UI/Box";
import Button from "../UI/Button";
import styles from "./Modal.module.css";

export default function Modal({ type, stateHandler }) {
  const clickHandler = (e) => {
    if (e.currentTarget === e.target) {
      stateHandler(false);
    }
  };

  const modalCloseBtn = (e) => {
    stateHandler(false);
  };

  return (
    <div className={styles.modal} onClick={clickHandler}>
      <Box>
        <div className={styles.title}>
          <h3>Invalid Input</h3>
        </div>
        <div className={styles.cont}>
          {type === "invalidNum" ? (
            <p>유효한 값이 아닙니다</p>
          ) : (
            <p>값을 입력해주세요.</p>
          )}
          <div onClick={modalCloseBtn}>
            <Button>Okay</Button>
          </div>
        </div>
      </Box>
    </div>
  );
}
