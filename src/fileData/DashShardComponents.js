import React from "react";
import Image from "next/image";
import styleSheet from "./dash.module.css";
import { MdAccessTime } from "react-icons/md";

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

export const MeetingItem = ({text, time}) => {
  return (
    <div className={styleSheet.meetingItem}>
      <h6 className={styleSheet.title}>{text}</h6>
      <div className={styleSheet.time}>
        <MdAccessTime className={styleSheet.icon} />
        <p className={styleSheet.text}>{time}</p>
      </div>
    </div>
  );
};
