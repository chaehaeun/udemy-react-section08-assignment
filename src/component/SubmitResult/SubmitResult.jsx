import React from "react";
import { useState } from "react";
import Box from "../UI/Box";
import styles from "./SubmitResult.module.css";

export default function SubmitResult({ userData }) {
  const [isExist, setIsExist] = useState(false);

  const dataList = userData.map((data) => (
    <li key={data.id}>
      `${data.name} (${data.age} years old)`
    </li>
  ));
  return (
    <Box className={styles.result}>
      <ul className={isExist ? "" : styles.hide}>{dataList}</ul>
    </Box>
  );
}
