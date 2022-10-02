import React from "react";
import styles from "./Button.module.css";
function Button(props) {
  return (
    <div className={styles.button}>
    <button
      className={styles.btn1}
      type={props.type || "button"}
      onClick={props.onClick}
    >
        {props.children}
    </button>

    </div>
    
  );
}

export default Button;
