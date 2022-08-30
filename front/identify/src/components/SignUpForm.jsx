import React, { useState } from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import CheckIcon from "@mui/icons-material/Check";

function SignUpForm() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [PasswordConfirmation, setPasswordConfirmation] = useState("");
  const [Email, setEmail] = useState("");
  const [errorMessage, seterrorMessage] = useState("");

  const passwrodValidation = () => {
    if (Password.length < 8) {
      seterrorMessage("Password is too short.");
      return false;
    }

    if (!/\d/.test(Password)) {
      seterrorMessage("Password must contaion at least one number.");
      return false;
    }
    if (Password === PasswordConfirmation) {
      seterrorMessage("The password confirmation doesn't match.");
      return false;
    }
    return true;
  };

  const usernameValidation = () => {
    if (Username.length < 4) {
      seterrorMessage("Username is too short.");
      return false;
    }

    if (/\s/.test(Username)) {
      seterrorMessage("Username can't contain whitespace.");
      return false;
    }
    return true;
  };

  const emailValidation = () => {
    if (
      Email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      return true;
    }

    seterrorMessage("Email address is not valid.");
    return false;
  };

  const Validation = () => {
    if (usernameValidation() && passwrodValidation() && emailValidation()) {
      return true;
    } else {
      if (
        Username.length === 0 ||
        Password.length === 0 ||
        PasswordConfirmation.length === 0 ||
        Email.length === 0
      ) {
        seterrorMessage("All fields must be filled");
      }
      return false;
    }
  };

  const sendCredentials = () => {
    if (Validation()) {
      const data = {
        username: Username,
        password: Password,
        email: Email,
      };

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      fetch(
        process.env.REACT_APP_BACKEND_URL + "accounts/token/",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };

  return (
    <motion.div
      initial={{ x: 0, opacity: 0, scale: 0.7, y: 500 }}
      animate={{ x: 0, opacity: 1, scale: 1, y: 0 }}
      transition={{ ease: "backInOut", duration: 2 }}
      exit={{ y: -1200, scale: 0, transition: { duration: 0.5 } }}
      className="flex mx-auto bg-white w-1/3 h-2/3 rounded-xl justify-center flex-col sml:w-5/6 sml:mt-5 mt-8 z-50"
    >
      <div className="w-full h-1/3 flex justify-center items-center">
        <h1 className="font-signfont text-3xl mdl:text-2xl">Sign up</h1>
      </div>
      <div className="w-full h-1/3 flex justify-center items-center">
        <Box sx={{ display: "flex", alignItems: "flex-end", width: "77%" }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Username"
            variant="standard"
            sx={{ width: 1 }}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Box>
      </div>
      <div className="w-full h-1/3 flex justify-center items-center">
        <Box sx={{ display: "flex", alignItems: "flex-end", width: "77%" }}>
          <LockIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            type="password"
            label="Password"
            variant="standard"
            sx={{ width: 1 }}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
      </div>
      <div className="w-full h-1/3 flex justify-center items-center">
        <Box sx={{ display: "flex", alignItems: "flex-end", width: "77%" }}>
          <CheckIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            type="password"
            label="Password Confirmation"
            variant="standard"
            sx={{ width: 1 }}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </Box>
      </div>
      <div className="w-full h-1/3 flex justify-center items-center">
        <Box sx={{ display: "flex", alignItems: "flex-end", width: "77%" }}>
          <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Email"
            variant="standard"
            sx={{ width: 1 }}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
      </div>
      <div className="w-full h-1/6 flex justify-center items-start">
        {errorMessage && (
          <p className="error text-red-600 text-sm"> {errorMessage} </p>
        )}
      </div>
      <div className="w-full h-1/6 flex justify-center items-center mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-3/4"
          onClick={() => sendCredentials()}
        >
          Submit
        </button>
      </div>
    </motion.div>
  );
}

export default SignUpForm;
