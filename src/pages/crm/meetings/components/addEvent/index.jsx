import React, { useState } from "react";
import styleSheet from "./style.module.css";
import { IoClose } from "react-icons/io5";
import CustomDate from "src/@core/components/cutomDate/CustomDate";
import CustomSelect from "src/@core/components/custom-select";
import { relatedToOption } from "src/fileData/tasksData";
import { Grid } from "@mui/material";
import { InputLayout } from "src/properties/shared-components/input-layout";

const AddEvent = ({ handleShowAdd }) => {
  const [addEventData, setAddEventData] = useState({
    title: "",
    teams: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    description: "",
  });
  /** handle custom select */
  const handleCustomSelect = (selectedValue, selectName) => {
    setAddEventData((prev) => {
      return {
        ...prev,
        [selectName]: selectedValue,
      };
    });
  };

  //** handle change event */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setAddEventData({ ...addLeadData, [name]: value });
  };
  /**handle date */
  const handleDate = (selectedDate, propertyName) => {
    setAddEventData((prev) => {
      return {
        ...prev,
        [propertyName]: selectedDate,
      };
    });
  };
  return (
    <div className={styleSheet.addEvent}>
      <div className={styleSheet.content}>
        <IoClose className={styleSheet.close} onClick={() => handleShowAdd()} />
        <Grid container className={styleSheet.towInOneContainer}>
           {/** start task name  */}
        <Grid item sx={{ flex: 1 }}>
          <InputLayout>
            <label>Task Name *</label>
            <input
              type="text"
              name="title"
              value={addEventData.title}
              placeholder=" title"
              onChange={handleChange}
            />
          </InputLayout>
        </Grid>
        {/* End task name  */}
          <Grid item sx={{ flex: 1 }}>
            <CustomSelect
              array={relatedToOption}
              fun={handleCustomSelect}
              state={addEventData.teams}
              label={"Teams"}
              selectName={"teams"}
            />
          </Grid>
        </Grid>
        <Grid container className={styleSheet.towInOneContainer}>
          <Grid item sx={{ flex: 1 }}>
            <CustomDate
              label={"Start Date"}
              value={addEventData.startDate}
              propertyName={"startDate"}
              handleDate={handleDate}
            />
          </Grid>
          <Grid item sx={{ flex: 1 }}>
            <CustomDate
              label={"End Date"}
              value={addEventData.endDate}
              propertyName={"endDate"}
              handleDate={handleDate}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AddEvent;
