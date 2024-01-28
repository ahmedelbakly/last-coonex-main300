import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StyleSheet from "./styleSheet.module.css"

import Image from "next/image";


export default function MediaCard({img,title}) {
  return (
    <Card sx={{ maxWidth: 290,height: 295,position:"relative"
    ,border:"2px solid #E2E8F0",    
    }} >

      <CardMedia sx={{ height: 240 }}  title="themeImage">
       <Image src={img} alt= "themeOneImage" style={{height:"100%"}}/>
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign="center" >
         {title}
        </Typography>
      </CardContent>
      <div className={StyleSheet.overlayItem}>
        <div className={StyleSheet.containerBtn}>
        <button size="small">Select Theme</button>
        <button size="small">Preview</button>
        </div>

      </div>
    </Card>
  );
}
