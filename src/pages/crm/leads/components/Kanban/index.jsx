import { Grid } from "@mui/material";
import React from "react";
import StyleSheet from "./style.module.css";
import KanbanCard from "../KanbanCard";



const KanbanPage = ({ data, title }) => {
  const OfferSubmittedData = data.slice(0,3)
  const negotiationStage = data.slice(0,5)

  return (


    <Grid container className={StyleSheet.kanbanContainer}>
         {/* START KANBAN */}
      <Grid item className={`${StyleSheet.item} ${StyleSheet.item1}`}>
        <div className={StyleSheet.itemTitle}>
          <h6 className={StyleSheet.itemTitleText}>Appointment Scheduled</h6>
          <p className={StyleSheet.itemTitleCount}>({data.length})</p>
        </div>
        {data.map((item) => (
          <KanbanCard
            key={item.id}
            leadSource={item.leadSource}
            user={item.fullName}
            id={item.id}
          />
        ))}
      </Grid>
      {/* START NEGOTIATION STAGE */}
      <Grid item className={`${StyleSheet.item} ${StyleSheet.item2}`}>
        <div className={StyleSheet.itemTitle} style={{
            color: 'green'
          }}>
          <h6 className={StyleSheet.itemTitleText} >Offer Submitted</h6>
          <p className={StyleSheet.itemTitleCount}>({OfferSubmittedData.length})</p>
        </div>

        {OfferSubmittedData.map((item) => (
          <KanbanCard
            key={item.id}
            leadSource={item.leadSource}
            user={item.fullName}
            id={item.id}
          />
        ))}
      </Grid>

      <Grid item className={`${StyleSheet.item} ${StyleSheet.item3}`}>
        <div className={StyleSheet.itemTitle} style={{
            color: '#DB6F12'
          }}>
          <h6 className={StyleSheet.itemTitleText}>Negotiation Stage</h6>
          <p className={StyleSheet.itemTitleCount}>({negotiationStage.length})</p>
        </div>
        {negotiationStage.map((item) => (
          <KanbanCard
            key={item.id}
            leadSource={item.leadSource}
            user={item.fullName}
            id={item.id}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default KanbanPage;
