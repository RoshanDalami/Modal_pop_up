import React from 'react';
import Card from './Card';

import styles from './ErrorModal.module.css';
function ErrorModal(props) {
    const content ={
        title : "Title of Error" ,
        message : " Error Message goes here.....!!!!"
    }
  return (
    <div>
    <div className={styles.backdrop} onClick={props.onConfirm}></div>
    <Card className={styles.modal}>
        <header className={styles.header}>
          <h1 className={styles.head}>Leave a Comment</h1>
        </header>
        <div className={styles.textBody}>
          <textarea name="comment" id="comment" cols="30" rows="10" className={styles.textArea}></textarea>
        </div>
        <button className={styles.btn} onClick={props.onConfirm}>comment</button>
    </Card>
    </div>
  )
};

export default ErrorModal;
