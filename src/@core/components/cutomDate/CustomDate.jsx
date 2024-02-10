import { Grid } from "@mui/material";
import React from "react";
import { CiCalendar } from "react-icons/ci";
import StyleSheet from "./style.module.css";
import { useState } from "react";
//** import Calendar */
import DateCalendarValue from "../calender/Calender";

const CustomDate = ({ value, label, handleDate,propertyName }) => {
  //** state to handle  show calendar */
  const [showDate, setShowDate] = useState(false);
  //** handle show data  */
  const handleShowDate = () => {
    setShowDate(!showDate);
  };

  return (
    <Grid item>
      <div className={StyleSheet.container}>
        <label className={StyleSheet.label}>{label}</label>
        <div className={StyleSheet.selectTitle} >
          <span className={StyleSheet.selectTitleText}>
            {value ?<span className={StyleSheet.dateValue}>{value} </span>  : "DD - MM - YYYY"}
          </span>
          <CiCalendar fontSize={25}  onClick={handleShowDate}/>
          <div
            className={StyleSheet.calender}
            style={{
              height: showDate ? "max-content" : "0px",
            }}
          >
            <DateCalendarValue handleDate={handleDate} propertyName={propertyName} handleShowDate={handleShowDate}/>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default CustomDate;
