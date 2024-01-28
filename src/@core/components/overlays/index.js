import React from "react";
import { rightIcon } from "src/fileData/addBropertyData";
import StyleSheet from "./styleSheet.module.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useRouter } from "next/router";

const confirmOverLayIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="34"
    height="33"
    viewBox="0 0 34 33"
    fill="none"
  >
    <path
      d="M17 11V16.1996"
      stroke="#DB6F12"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17 21.3662L17 21.4316"
      stroke="#DB6F12"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.3749 26.1247H26.6249C27.5359 26.1183 28.3846 25.6612 28.8912 24.904C29.3978 24.1469 29.4966 23.188 29.1549 22.3435L19.3924 5.49972C18.9081 4.62435 17.9866 4.08105 16.9862 4.08105C15.9857 4.08105 15.0642 4.62435 14.5799 5.49972L4.8174 22.3435C4.48245 23.1681 4.56732 24.1039 5.04517 24.8548C5.52303 25.6057 6.33477 26.0789 7.22365 26.1247"
      stroke="#DB6F12"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const LayoutOverlay = ({ children, setState, route }) => {
  const router = useRouter();

  return (
    <div className={StyleSheet.overLayContainer}>
      <div className={StyleSheet.overLayContent}>
        <HighlightOffIcon
          className={StyleSheet.overLayClose}
          onClick={() => {
            setState(false);
            route && router.push(route);
          }}
        />
        {children}
      </div>
    </div>
  );
};
export const SuccessOverlay = ({ message, setState, route }) => {
  return (
    <LayoutOverlay setState={setState} route={route}>
      <span>{rightIcon}</span>
      <h4>{message}</h4>
    </LayoutOverlay>
  );
};
export const ConfirmOverlay = ({
  message,
  setState,
  successSetState,
  func,
}) => {
  return (
    <LayoutOverlay setState={setState}>
      <span>{confirmOverLayIcon}</span>
      <h4>{message}</h4>
      <div className={StyleSheet.containerBtn}>
        <button className={StyleSheet.btn} onClick={() => setState(false)}>
          Cancel
        </button>
        <button
          className={StyleSheet.btn}
          onClick={() => {
            func();
            setState(false);
            successSetState(true);
          }}
        >
          Confirm
        </button>
      </div>
    </LayoutOverlay>
  );
};
