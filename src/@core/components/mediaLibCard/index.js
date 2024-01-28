import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StyleSheet from "./styleSheet.module.css";
import { RiDeleteBinLine } from "react-icons/ri";

const deleteCheck = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
  >
    <path
      d="M21.787 2.66699C26.307 2.66699 29.3337 5.84033 29.3337 10.5603V21.455C29.3337 26.1603 26.307 29.3337 21.787 29.3337H10.227C5.70699 29.3337 2.66699 26.1603 2.66699 21.455V10.5603C2.66699 5.84033 5.70699 2.66699 10.227 2.66699H21.787ZM21.5737 12.0003C21.1203 11.547 20.3737 11.547 19.9203 12.0003L14.4137 17.507L12.0803 15.1737C11.627 14.7203 10.8803 14.7203 10.427 15.1737C9.97366 15.627 9.97366 16.3603 10.427 16.827L13.6003 19.987C13.827 20.2137 14.1203 20.3203 14.4137 20.3203C14.7203 20.3203 15.0137 20.2137 15.2403 19.987L21.5737 13.6537C22.027 13.2003 22.027 12.467 21.5737 12.0003Z"
      fill="#1DB2FF"
    />
  </svg>
);

import Image from "next/image";
import { DeleteOutlineOutlined } from "@mui/icons-material";

export default function MediaCard({ img, title, deleteAll ,handleDeleteItem}) {
  return (
    <Card sx={{ maxWidth: 183, height: 240, position: "relative" }}>
      <CardMedia sx={{ height: 190 }} title="themeImage">
        <Image src={img} alt="themeOneImage" style={{ height: "100%" }} />
      </CardMedia>
      <CardContent className={StyleSheet.CardContent}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign="center"
        >
          <p style={{fontSize:14}}>{"Image name"}</p>
        </Typography>
        <RiDeleteBinLine color="#CF2222" fontSize={20} cursor={"pointer"} onClick={()=>handleDeleteItem()}/>
      </CardContent>
      {deleteAll && <span className={StyleSheet.cardCheck}>{deleteCheck}</span>}
    </Card>
  );
}
