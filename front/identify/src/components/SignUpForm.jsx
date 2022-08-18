import React from "react";
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import { motion } from "framer-motion";
import EmailIcon from '@mui/icons-material/Email';
import CheckIcon from '@mui/icons-material/Check';

function SignUpForm() {
  return (
    <motion.div 
    initial={{ x: 0, opacity: 0, scale: 0.7, y: -500 }}
    animate={{ x: 0, opacity: 1, scale: 1, y:0 }}
    transition={{ ease: "backInOut", duration: 2 }}
    className="flex mx-auto bg-white w-1/3 h-2/3 rounded-xl justify-center flex-col sml:w-5/6 sml:mt-5 mt-8 z-50">
      <div className="w-full h-1/3 flex justify-center items-center"><h1 className="font-signfont text-3xl mdl:text-2xl">Sign up</h1></div>
      <div className="w-full h-1/3 flex justify-center items-center">
      <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '77%'}}>
          <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5}} />
          <TextField id="input-with-sx" label="Username" variant="standard" sx={{width:1}}/>
        </Box>
      </div>
      <div className="w-full h-1/3 flex justify-center items-center">
      <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '77%'}}>
          <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5}} />
          <TextField id="input-with-sx" type="password" label="Password" variant="standard" sx={{width:1}}/>
        </Box>
      </div>
      <div className="w-full h-1/3 flex justify-center items-center">
    <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '77%'}}>
        <CheckIcon sx={{ color: 'action.active', mr: 1, my: 0.5}} />
        <TextField id="input-with-sx" type="password" label="Password Confirmation" variant="standard" sx={{width:1}}/>
      </Box>
    </div>
    <div className="w-full h-1/3 flex justify-center items-center">
    <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '77%'}}>
        <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5}} />
        <TextField id="input-with-sx" label="Email" variant="standard" sx={{width:1}}/>
      </Box>
    </div>
      <div className="w-full h-1/6 flex justify-end"></div>
      <div className="w-full h-1/6 flex justify-center items-center mb-4">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-3/4">
    Get Started
  </button>
      </div>
    </motion.div>);
}

export default SignUpForm;
