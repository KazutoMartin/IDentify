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

function SignInForm() {
  return (
  <motion.div 
  initial={{ x: 0, opacity: 0, scale: 0.7, y: -500 }}
  animate={{ x: 0, opacity: 1, scale: 1, y:0 }}
  transition={{ ease: "backInOut", duration: 2 }}
  className="flex mx-auto bg-white w-1/3 h-1/2 rounded-xl justify-center flex-col sml:w-2/3 sml:mt-10 mt-20 z-50">
    <div className="w-full h-1/3 flex justify-center items-center"><h1 className="font-signfont text-3xl mdl:text-2xl">Login</h1></div>
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
    <div className="w-full h-1/6 flex justify-end">
      <div className="h-full w-1/2"><a href="#" className="flex justify-center items-start w-full text-gray-500 mdl:text-xs">forgot password?</a></div> 
    </div>
    <div className="w-full h-1/6 flex justify-center items-center mb-4">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-3/4">
  Login
</button>
    </div>
  </motion.div>);
  
}

export default SignInForm;
