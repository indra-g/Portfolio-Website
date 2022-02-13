import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const ContactForm = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submited");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        onChange={handleChange}
        size="small"
        margin="normal"
        className="w-11/12"
        label="Your Name"
        name="name"
        required={true}
      />
      <TextField
        onChange={handleChange}
        size="small"
        margin="normal"
        className="w-11/12"
        label="Email"
        name="email"
        required={true}
      />
      <TextField
        onChange={handleChange}
        size="small"
        margin="normal"
        name="phoneNumber"
        className="w-11/12"
        label="Phone Number (Optional)"
      />
      <TextField
        onChange={handleChange}
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
        <Button
          type="submit"
          variant="contained"
          style={{
            backgroundColor: "#0057FF",
            borderRadius: "50px",
            textTransform: "capitalize",
            paddingLeft: "40px",
            paddingRight: "40px",
          }}
        >
          Send
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
