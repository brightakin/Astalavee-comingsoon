import { useRef } from "react";
import { useDispatch } from "react-redux";
import Modal from "../UI/modal";
import { userAction } from "../../Store/index-slice";
import useInput from "../../hooks/use-input";

const PopUp = (props) => {
  const dispatch = useDispatch();

  //ref values
  const affiliateRef = useRef();
  const creatorRef = useRef();

  // custom hook consumed
  const {
    value: nameInput,
    isValid: nameInputIsValid,
    hasError: nameInputError,
    inputOnBlurHandler: nameInputBlurHandler,
    onChangeInputValue: nameInputChangeHandler,
    reset: resetNameInput,
  } = useInput((value) => value !== "");

  const {
    value: emailInput,
    isValid: emailInputIsValid,
    hasError: emailInputError,
    inputOnBlurHandler: emailInputBlurHandler,
    onChangeInputValue: emailInputChangeHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  //checklist values
  const jobFinder = () => {
    if (affiliateRef.current.checked && !creatorRef.current.checked) {
      return "affiliate";
    }
    if (creatorRef.current.checked && !affiliateRef.current.checked) {
      return "creator";
    }
    if (creatorRef.current.checked && affiliateRef.current.checked) {
      return "affiliate creator";
    }
    return null;
  };

  //validating form

  let formIsValid = false;
  if (nameInputIsValid && emailInputIsValid) {
    formIsValid = true;
  }

  //handling form submission
  const userDetailsHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }
    const action = {
      firstName: nameInput,
      email: emailInput,
      job: jobFinder(),
    };
    dispatch(userAction.saveUserDetails(action));
    console.log(action);
    resetNameInput();
    resetEmailInput();
    props.onClose();
  };

  return (
    <Modal onClickOverlay={props.onClose}>
      <h2 className="h-[55px] w-[100%] text-4xl font-bold leading-8 sm:leading-5 text-center text-[#9900cc] pt-6">
        Which One Are <span className="text-[#e07a5f]">You</span>?
      </h2>
      <h3 className="h-[30px] w-[100%] text-[15px] sm:text-[20px] font-medium sm:font-bold leading-4 text-center text-[#9900cc] pt-10 sm:pt-6">
        We want to serve you better, help us improve on Astalavee.
      </h3>
      <form onSubmit={userDetailsHandler}>
        <div className="flex justify-around sm:justify-evenly">
          <div>
            <input
              type={"checkbox"}
              id="affiliate"
              name="affiliate"
              ref={affiliateRef}
            />
            <label htmlFor="affiliate">Affiliate Marketing</label>
          </div>
          <div>
            <input
              type={"checkbox"}
              id="creator"
              name="creator"
              ref={creatorRef}
            />
            <label htmlFor="creator">Content Creator</label>
          </div>
        </div>

        <div>
          <input
            type={"text"}
            id="nameInput"
            name="name"
            placeholder="First Name"
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            value={nameInput}
            className="h-[50px] w-[100%] sm:w-[80%] left-4 sm:left-[401px] top-[646px] rounded-3xl ml-[3px] sm:ml-[50px] mt-[30px] p-[10px] border-[0.86px] border-[#9900cc]"
          />
          {nameInputError && (
            <p className="text-[#b40e0e]">Enter a valid name</p>
          )}
        </div>
        <div className="relative">
          <input
            type={"email"}
            id="emailInput"
            name="email"
            placeholder="Enter your email address"
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler}
            value={emailInput}
            className="h-[50px] w-[100%] sm:w-[80%] left-[401px] top-[646px] rounded-3xl ml-[3px] sm:ml-[50px] mt-[30px] p-[10px] border-[0.86px] border-[#9900cc]"
          />
          {emailInputError && (
            <p className="text-[#b40e0e]">Enter valid email address</p>
          )}
          <button
            className="sm:absolute h-[40px]  sm:w-[200px] w-[100%] left-[195px] sm:left-[325px] mt-[20px] sm:mt-[0px] top-[35px] rounded-3xl bg-[#9900cc] text-[15px] sm:text-[20px] leading-3 text-center text-[#ffffff] hover:bg-[#ffffff] hover:text-[#9900cc] hover:border-2 hover:border-[#9900cc]"
            disabled={!formIsValid}
            id="submit"
          >
            Join Waiting List
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default PopUp;
