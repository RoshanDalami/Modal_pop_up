import React from 'react';
import Card from './Card';
import Button from './Button';
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
            <h2>
                {content.title}
            </h2>
        </header>
        <div className={styles.content}>
            <p>
                {content.message}
            </p>
        </div>
        <footer className={styles.actions}>
            <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
    </Card>
    </div>
  )
};

export default ErrorModal;
