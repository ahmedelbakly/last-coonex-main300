// ** React Imports
import { useState } from "react";

// ** MUI Imports
import Box from "@mui/material/Box";

// ** Third Party Imports
import DatePicker from "react-datepicker";
import CustomInputs from "src/pages/forms/form-elements/custom-inputs";

// ** Custom Component Imports

const PickersTime = ({ popperPlacement }) => {
  // ** States
  const [time, setTime] = useState(new Date());
  const [dateTime, setDateTime] = useState(new Date());

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }} className="demo-space-x">
      <div>
      
      </div>
    </Box>
  );
};

export default PickersTime;
