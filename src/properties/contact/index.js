import React, { useState } from "react";
import { InputLayout } from "../shared-components/input-layout";
import StyleSheet from "./styleSheet.module.css";


import Grid from "@mui/material/Grid";

const Contact = ({ setPage,handleSubmit,handleContact }) => {
  const [values, setValues] = useState("");
  const handleChange = (e) => {
    setValues(e.target.value);
  };

  return (
    <Grid container className={StyleSheet.container}>
      <InputLayout>
        <label>Phone Number *</label>
        <input type="tle" name="phone"  onChange={(e)=>{
            handleContact(e)
        }}/>

      </InputLayout>
      <InputLayout>
        <label>What's Number *</label>
        <input type="tle" name="whatsUp"  onChange={(e)=>{
            handleContact(e)
        }}/>
      </InputLayout>


      <div className={StyleSheet.nextAndPrev}>
        <button onClick={() => setPage("extraInformation")}>Previous</button>
        <button onClick={(e)=> handleSubmit(e)}>Next</button>
      </div>
    </Grid>
  );
};

export default Contact;
