import React, { useState } from "react";
import styleSheet from "./style.module.css";
import { IoClose } from "react-icons/io5";

import Link from "next/link";
import { Grid } from "@mui/material";
import { IoMdTime } from "react-icons/io";
import { deleteIcon, editIcon, eyeIcon } from "src/fileData/PagesData";
import { fakeData } from "src/fileData/calenderEvent";

const ShowEvents = ({ handleShowAllEvents,handleDeleteConfirm }) => {
  return (
    <div className={styleSheet.addEvent}>
      <div className={styleSheet.content}>
        <h3 className={styleSheet.title}>More Events</h3>
        <IoClose
          className={styleSheet.close}
          onClick={() => handleShowAllEvents()}
        />
        <Grid container className={styleSheet.gridContainer}>
          {fakeData.map((item, index) => (
            <div className={styleSheet.gridItem}>

                <div className={styleSheet.title}>
                  <p className={styleSheet.text}>Meeting With Sales Team</p>
                  <div className={styleSheet.btnS}>
                    <Link href="/crm/meetings/2" >
                    <button className={styleSheet.btn}>{editIcon}</button>
                    </Link>
                    <button className={styleSheet.btn}  onClick={()=> handleDeleteConfirm()}>{deleteIcon}</button>

                  </div>
                </div>
                <div className={styleSheet.time}>
                  <IoMdTime className={styleSheet.icon} />
                  <p className={styleSheet.text}>12:00 PM - 02:00 PM</p>
                </div>
              </div>

          ))}
        </Grid>
      </div>
    </div>
  );
};

export default ShowEvents;
