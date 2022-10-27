import React from "react";
import styles from "./Box.module.css";

export default function Box(props) {
  const classes = `${styles.Box} ${props.className}`;
  return <div className={classes}>{props.children}</div>;
}
