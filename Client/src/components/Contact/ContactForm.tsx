import React, { useState, useRef } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import Alert from "@mui/material/Alert";
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
  const name = useRef<HTMLInputElement>(null);
  const phoneNumber = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLInputElement>(null);

  const [enteredemail, setEnteredEmail] = useState<string>("");
  const [emailTouched, setEmailTouched] = useState<boolean>(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneNoError, setPhoneNoError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEnteredEmail(value);
    if (checkEmail(value)) {
      setEmailError(false);
    } else {
      if (emailTouched) {
        setEmailError(true);
      }
    }
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);
    if (!checkEmail(enteredemail)) {
      setEmailError(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const enteredName = name.current!.value;
    const enteredPhoneNumber: any = phoneNumber.current!.value;
    const enteredMessage = message.current!.value;
    console.log(name.current!.value);
    if (enteredPhoneNumber.trim().length < 10) {
      setPhoneNoError(true);
      setLoading(false);
      return;
    }
    setPhoneNoError(false);
    if (emailError) {
      return;
    }
    //Code for Submitting Data to backend
    console.log(enteredName, enteredemail, enteredPhoneNumber, enteredMessage);
    setLoading(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {phoneNoError && (
        <Alert className="m-1" severity="warning">
          Phone number should be minimum 10 characters
        </Alert>
      )}
      <TextField
        type={"text"}
        inputRef={name}
        size="small"
        margin="normal"
        className="w-11/12"
        label="Your Name"
        name="name"
        required={true}
      />
      <TextField
        type={"email"}
        error={emailError}
        onBlur={handleEmailBlur}
        onChange={handleEmailChange}
        size="small"
        margin="normal"
        className="w-11/12"
        label="Email"
        name="email"
        required={true}
      />
      <TextField
        type={"number"}
        inputRef={phoneNumber}
        size="small"
        margin="normal"
        name="phoneNumber"
        className="w-11/12"
        label="Phone Number (Optional)"
      />
      <TextField
        type={"text"}
        inputRef={message}
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
