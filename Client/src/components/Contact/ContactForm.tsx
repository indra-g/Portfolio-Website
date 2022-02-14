import React, { useState } from "react";
import useInput from "../../hooks/useInput";
import LoadingButton from "@mui/lab/LoadingButton";
import "./ContactForm.css";
import TextField from "@mui/material/TextField";

const checkEmail = (email: string) => {
  let re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email)) {
    return true;
  }
  return false;
};

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    value: enteredName,
    hasError: nameInputError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value: string) => value.trim() !== "");
  const {
    value: enteredEmail,
    hasError: emailInputError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(checkEmail);
  const {
    value: enteredPhoneNum,
    hasError: phoneNumInputError,
    valueChangeHandler: phoneNumChangeHandler,
    inputBlurHandler: phoneNumBlurHandler,
    reset: resetPhoneInput,
  } = useInput((value: string) => value.trim().length >= 10);
  const {
    value: enteredMessage,
    hasError: messageInputError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useInput((value: string) => value.trim() !== "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const errorExits =
      emailInputError ||
      phoneNumInputError ||
      messageInputError ||
      nameInputError;
    if (!errorExits) {
      //Send to backend
      resetNameInput();
      resetEmailInput();
      resetPhoneInput();
      resetMessageInput();
      console.log(enteredName, enteredEmail, enteredPhoneNum, enteredMessage);
      setLoading(false);
      return;
    }
    setLoading(false);
    return;
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        type={"text"}
        value={enteredName}
        error={nameInputError}
        onChange={nameChangeHandler}
        onBlur={nameBlurHandler}
        size="small"
        margin="normal"
        className="w-11/12"
        label="Your Name"
        name="name"
        required={true}
      />
      <TextField
        type={"email"}
        error={emailInputError}
        onBlur={emailBlurHandler}
        onChange={emailChangeHandler}
        value={enteredEmail}
        size="small"
        margin="normal"
        className="w-11/12"
        label="Email"
        name="email"
        required={true}
      />
      <TextField
        type={"number"}
        error={phoneNumInputError}
        onBlur={phoneNumBlurHandler}
        onChange={phoneNumChangeHandler}
        value={enteredPhoneNum}
        size="small"
        margin="normal"
        name="phoneNumber"
        className="w-11/12"
        label="Phone Number (Optional)"
      />
      <TextField
        type={"text"}
        error={messageInputError}
        onBlur={messageBlurHandler}
        onChange={messageChangeHandler}
        value={enteredMessage}
        size="small"
        margin="normal"
        className="w-11/12"
        name="message"
        label="Message"
        multiline={true}
        rows={3}
        required={true}
      />
      <div className="px-5 pt-4">
        <LoadingButton
          type="submit"
          style={{
            backgroundColor: "#0057FF",
            borderRadius: "50px",
            textTransform: "capitalize",
            paddingLeft: "40px",
            paddingRight: "40px",
          }}
          loading={loading}
          variant="contained"
        >
          Send
        </LoadingButton>
      </div>
    </form>
  );
};

export default ContactForm;
