import React, { useState } from "react";
import styleSheet from "./style.module.css";
import { IoClose } from "react-icons/io5";
import CustomDate from "src/@core/components/cutomDate/CustomDate";
import CustomSelect from "src/@core/components/custom-select";
import { relatedToOption } from "src/fileData/tasksData";
import { Grid } from "@mui/material";
import { InputLayout } from "src/properties/shared-components/input-layout";
import Link from "next/link";
import { SuccessOverlay } from "src/@core/components/overlays";
import {useRouter } from "next/router";

const EditEvent = ({ handleShowAdd, handleSuccessOverlay }) => {
  const router = useRouter();
  //** handle overlay */
  const [successEditOverlay, setSuccessEditOverlay] = useState(false);

  const [addEventData, setAddEventData] = useState({
    title: "",
    teams: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    description: "",
  });
  console.log(addEventData);
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

    setAddEventData({ ...addEventData, [name]: value });
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

  const handleSuccess = () => {
    setSuccessEditOverlay(true);
    setTimeout(() => {
      setSuccessEditOverlay(false);
      router.push("/crm/meetings");
    }, 2000);
  };

  return (
    <div className={styleSheet.addEvent}>
      {successEditOverlay && (
        <SuccessOverlay
          message={"Edit Event Successfully"}
          setState={setSuccessEditOverlay}
          route={"/crm/meetings"}
        />
      )}
      <div className={styleSheet.content}>
        <h3 className={styleSheet.title}>Edit Event</h3>
        <Link href="/crm/meetings">
          <IoClose className={styleSheet.close} />
        </Link>
        <Grid container className={styleSheet.towInOneContainer}>
          {/** start task name  */}
          <Grid item sx={{ flex: 1 }}>
            <InputLayout>
              <label> Title</label>
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
        <InputLayout>
          <label>Description</label>
          <textarea
            name="description"
            value={addEventData.description}
            placeholder="description"
            onChange={handleChange}
          />
        </InputLayout>
        <div className={styleSheet.nextAndPrev}>
          <Link href="/crm/meetings">
            <button>Cancel</button>
          </Link>
          <button
            onClick={() => {
              handleSuccess();
            }}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditEvent;
