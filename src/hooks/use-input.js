import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredInput, setEnteredInput] = useState("");
  const [enteredInputTouch, setEnteredInputTouch] = useState(false);

  const valueIsValid = validateValue(enteredInput);
  const hasError = enteredInputTouch && !valueIsValid;

  const inputOnBlurHandler = () => {
    setEnteredInputTouch(true);
  };

  const onChangeInputValue = (e) => {
    setEnteredInput(e.target.value);
  };

  const reset = () => {
    setEnteredInput("");
    setEnteredInputTouch(false);
  };

  return {
    value: enteredInput,
    isValid: valueIsValid,
    hasError,
    inputOnBlurHandler,
    onChangeInputValue,
    reset,
  };
};

export default useInput;
