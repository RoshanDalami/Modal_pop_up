import React, { useState } from "react";

import Button from "./Button";
import ErrorModal from "./ErrorModal";
function Modal01() {

  const [error,setError] = useState();
  const clickHandler = () => {
    
    setError(true)
  };

  const errorHandler = () =>{
    setError(null);
  }
  return (
    <div>
    {error &&  <ErrorModal
      onConfirm={errorHandler}></ErrorModal>}
      <Button type="submit" onClick={clickHandler}>Login</Button>
    </div>
  );
}

export default Modal01;
