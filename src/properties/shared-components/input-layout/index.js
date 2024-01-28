import React from "react";
import Grid from "@mui/material/Grid";
import StyleSheet from "./style.module.css";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export const InputLayout = ({ children }) => {
  return (
    <Grid item className={StyleSheet.containerInput}>
      {children}
    </Grid>
  );
};
export const RadioLayout = ({ children }) => {
  return (
    <Grid item className={StyleSheet.containerRadio}>
      {children}
    </Grid>
  );
};

export const LayoutOverlay = ({ children ,setState}) => {
  return (
    <div className={StyleSheet.overLayContainer}>
      <div className={StyleSheet.overLayContent}>
        <HighlightOffIcon  className={ StyleSheet.overLayClose} onClick={()=> setState(false)}/>
        {children}

        </div>
    </div>
  );
};
