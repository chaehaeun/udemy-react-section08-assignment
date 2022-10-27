import React, { useState } from "react";
import SubmitUsers from "./component/SubmitUsers";
import styles from "./App.module.css";
import SubmitResult from "./component/SubmitResult/SubmitResult";
// import Modal from "./component/Modal/Modal";

function App() {
  const [userData, setUserData] = useState([]);
  // const [isValid, setIsValid] = useState(true);

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

  return (
    <div className={styles.App}>
      <SubmitUsers addData={addData} />
      <SubmitResult userData={userData} />
      {/* <Modal/> */}
    </div>
  );
}

export default App;
