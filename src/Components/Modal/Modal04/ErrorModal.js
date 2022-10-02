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
          <h1 className={styles.head}> Delete Alert</h1>
        </header>
        <div className={styles.textBody}>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione delectus commodi, voluptatum blanditiis, maiores ipsum ut iste consequuntur omnis natus eius, officia nobis consequatur ullam! Est nulla fugit dolores ex?</p>
        </div>
        <button className={styles.btn} onClick={props.onConfirm}>Delete</button>
    </Card>
    </div>
  )
};

export default ErrorModal;
