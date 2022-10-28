import React, { useState } from "react";
import SubmitUsers from "./component/SubmitUsers";
import styles from "./App.module.css";
import SubmitResult from "./component/SubmitResult/SubmitResult";
import Modal from "./component/Modal/Modal";

function App() {
  const [userData, setUserData] = useState([]);
  const [type, setType] = useState("success");
  const [isValid, setIsValid] = useState(false);
  // invalidNum, noValue, success
  const addData = (userName, userAge) => {
    setUserData(
      (prev) =>
        (prev = [
          ...prev,
          {
            id: new Date().getTime(),
            name: userName,
            age: userAge,
          },
        ])
    );
  };

  const modalHandler = (resultType) => {
    if (resultType === "success") return;
    else if (resultType === "invalidNum") {
      setIsValid(true);
      setType("invalidNum");
    } else if (resultType === "noValue") {
      setIsValid(true);
      setType("noValue");
    }
  };

  const stateHandler = (data) => {
    if (data === false) {
      setIsValid((prev) => (prev = false));
    }
  };

  return (
    <div className={styles.App}>
      <SubmitUsers addData={addData} modalHandler={modalHandler} />
      <SubmitResult userData={userData} />
      {isValid === false ? (
        ""
      ) : (
        <Modal type={type} stateHandler={stateHandler} />
      )}
    </div>
  );
}

export default App;
