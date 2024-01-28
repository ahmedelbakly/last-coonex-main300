import React from "react";
import Image from "next/image";
import styleSheet from "./crmDash.module.css";
import { MdAccessTime } from "react-icons/md";

import { GoDotFill } from "react-icons/go";

export const RentAndSale = ({ value, text, icon }) => {
  return (
    <div className={styleSheet.rentAndSale}>
      <div className={StyleSheet.textCon}>
        <p className={StyleSheet.value}>655</p>
        <p className={StyleSheet.text}>{text}</p>
      </div>
      <span className={StyleSheet.icon}>{icon}</span>
    </div>
  );
};

export const MeetingItem = ({ time, name }) => {
  return (
    <div className={styleSheet.meetingItem}>
      <div className={styleSheet.text}>
        <h6 className={styleSheet.title}>
          <span>{name}</span>
          {` assigned to you new tasks`}
        </h6>
        <GoDotFill  className={styleSheet.icon} />
      </div>

      <p className={styleSheet.time}>{`${time} hours ago`}</p>
    </div>
  );
};
