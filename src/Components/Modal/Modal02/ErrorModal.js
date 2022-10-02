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
  
    <form className={styles.form_part} >
        <div className={styles.welcome}>
          <h1 className={styles.welcome_text}> Welcome to Debuginit !</h1>
        </div>
        
        <div className={styles.input_box}>
          <label htmlFor="name ">Name</label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            className={styles.text_input}
          />
        </div>
        <br />
        <div className={styles.input_box}>
          <label htmlFor="email">Email</label>
         <br />
          <input
            type="email"
            name="email"
            id="email"
            className={styles.text_input}
          />
        </div>
        <br />
        <div className={styles.input_box}>
          <label htmlFor="password">Password</label>
         <br />
          <input
            type="password"
            name="password"
            id="password"
            className={styles.text_input}
          />
        </div>
        <Button onClick={props.onConfirm} className={styles.login_btn}>Login</Button>
      </form>
    </Card>
    </div>
  )
};

export default ErrorModal;
