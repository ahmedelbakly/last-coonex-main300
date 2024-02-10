//*import react */
import React, { useState } from "react";
//** import StyleSheet */
import StyleSheet from "./styleSheet.module.css";
import Grid from "@mui/material/Grid";
import { InputLayout } from "src/properties/shared-components/input-layout";
//**import next */
import Link from "next/link";
//**import useAuth that contain all shared data */
import { useAuth } from "src/hooks/useAuth";
import CustomSelect from "src/@core/components/custom-select";
//** property data */
import { SuccessOverlay } from "src/@core/components/overlays";
import { PiMicrosoftExcelLogoThin } from "react-icons/pi";
import { IoIosClose } from "react-icons/io";
import CustomDate from "src/@core/components/cutomDate/CustomDate";
import {
  priorityOptionData,
  relatedToOption,
  statusOption,
} from "../../../../fileData/tasksData";

//* leads test data */
const assignToData = [
  { id: 1, name: "Select assistant", value: "" },
  { id: 2, name: "Mohamed Eslam", value: "Mohamed Eslam" },
  { id: 2, name: "Ahmed Elbakly", value: "Ahmed Elbakly" },
  { id: 3, name: "Omar Ahmed", value: "Omar Ahmed" },
];
//** finance object option data */
const financeOptionData = [
  { id: 1, name: "Cash", value: "cash" },
  { id: 2, name: "Installment", value: "installment" },
];

const AddNewLeads = () => {
  const auth = useAuth();
  auth.setPages("CRM Add New Task");
  const [overLaySuccess, setOverLaySuccess] = useState(false);
  const [emptyItem, setEmptyItem] = useState({});
  //** state as object to handle data of new lead */
  const [addTaskData, setAddTaskData] = useState({
    taskName: "",
    assignTo: "",
    status: "",
    startDate: "",
    description: "",
    endDate: "",
    relatedTo: "",
    priority: "",
    preferPrice: "",
    file: "",
  });

  const [files, setFiles] = useState(null);
  const saveNewLeadApi = "http://localhost:3001/leads/new";

  //////////////////////////////////////////////////////////////////////////////////////
  //* handle change file  */
  const handleChangeFile = (e) => {
    setFiles(Object.values(e.target.files));
  };
  console.log(files);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setAddTaskData({ ...addTaskData, [name]: value });
  };

  //*handle custom select */
  // handle custom select
  const handleCustomSelect = (selectedValue, selectName) => {
    setAddTaskData((prev) => {
      return {
        ...prev,
        [selectName]: selectedValue,
      };
    });
  };

  //**handle delete item */
  const handleFileItem = (index) => {
    const newArray = [...filesData];
    newArray.splice(index, 1);
    setFilesData(newArray);
  };
  //** handle date */
  const handleDate = (selectedDate, propertyName) => {
    setAddTaskData((prev) => {
      return {
        ...prev,
        [propertyName]: selectedDate,
      };
    });
  };

  console.log(addTaskData);

  //**handle show success overlay */
  const handleShowOverlay = () => {
    setOverLaySuccess(!overLaySuccess);
  };

  return (
    <Grid
      container
      className={StyleSheet.container}
      onClick={() => setEmptyItem()}
    >
      <h5 className={StyleSheet.title}>Basic Information</h5>
      {/* start overLay Success */}
      {overLaySuccess && (
        <SuccessOverlay
          message={"Add New Task successfully "}
          setState={setOverLaySuccess}
        />
      )}

      {/* End overLay Success */}
      <Grid className={StyleSheet.radioContainer}>
        {/** start task name  */}
        <Grid item sx={{ flex: 1 }}>
          <InputLayout>
            <label>Task Name *</label>
            <input
              type="text"
              name="taskName"
              value={addTaskData.taskName}
              placeholder=" task name"
              onChange={handleChange}
            />
          </InputLayout>
        </Grid>
        {/* End task name  */}
        {/**Start Related to */}
        <Grid item sx={{ flex: 1 }}>
          <CustomSelect
            array={relatedToOption}
            fun={handleCustomSelect}
            state={addTaskData.relatedTo}
            label={"Related to"}
            selectName={"relatedTo"}
          />
        </Grid>
      </Grid>
      {/**End Related to */}
      <Grid container xs={12} className={StyleSheet.radioContainer}>
        {/**Start assign To */}
        <Grid item sx={{ flex: 1 }}>
          <CustomSelect
            array={assignToData}
            fun={handleCustomSelect}
            state={addTaskData.assignTo}
            label={"Assign To"}
            selectName={"assignTo"}
          />
        </Grid>
        {/**End assign To */}
        {/**Start priority*/}
        <Grid item sx={{ flex: 1 }}>
          <CustomSelect
            array={priorityOptionData}
            fun={handleCustomSelect}
            state={addTaskData.priority}
            label={"Priority"}
            selectName={"priority"}
          />
        </Grid>
        {/**End priority*/}
      </Grid>
      <Grid container xs={12} className={StyleSheet.radioContainer}>
        {/**Start Start Date*/}
        <Grid item sx={{ flex: 1 }}>
          <CustomDate
            value={addTaskData.startDate}
            label="Start Date"
            handleDate={handleDate}
            propertyName="startDate"
          />
        </Grid>
        {/**End Start Date*/}
        {/**Start End Date*/}
        <Grid item sx={{ flex: 1 }}>
          <CustomDate
            value={addTaskData.endDate}
            label="End Date"
            handleDate={handleDate}
            propertyName="endDate"
          />
        </Grid>
      </Grid>
      <Grid container xs={12} className={StyleSheet.radioContainer}>
        {/**Start status*/}
        <Grid item sx={{ flex: 1 }} py={0}>
          <CustomSelect
            array={statusOption}
            fun={handleCustomSelect}
            state={addTaskData.status}
            label={"Status"}
            selectName={"status"}
          />
        </Grid>
        {/**End status*/}
        {/**Start upload file*/}
        <Grid item sx={{ flex: 1 }}>
          <div className={StyleSheet.uploadAndLabel}>
            <label className={StyleSheet.mainLabel}>Attachment Files</label>
            <div className={StyleSheet.fileAndUploadBtn}>
              <div
                className={StyleSheet.uploadFile}
                onChange={handleChangeFile}
              >
                <input
                  type="file"
                  id="file"
                  className={StyleSheet.input}
                  multiple
                />
                <label htmlFor="file" className="label">
                  Upload File
                </label>
              </div>
              <div className={StyleSheet.files}>
                {files !== null &&
                  Object.keys(files).map((file, index) => (
                    <span key={index} className={StyleSheet.file}>
                      <PiMicrosoftExcelLogoThin fontSize={30} color="green" />
                      <IoIosClose
                        className={StyleSheet.removeSheet}
                        fontSize={20}
                        onClick={() => handleFileItem(index)}
                      />
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      {/**End upload file*/}
      {/**Start description*/}
      <Grid container xs={12} className={StyleSheet.radioContainer}>
        <InputLayout>
          <label>Description</label>
          <textarea
            name="description"
            value={addTaskData.description}
            onChange={handleChange}
            placeholder="Description"
            rows={5}
          />
        </InputLayout>
      </Grid>
      {/**End description*/}
      {/**Start next and prev button*/}
      <div className={StyleSheet.nextAndPrev}>
        <Link href="/crm/tasks">
          <button>Cancel</button>
        </Link>
        <button onClick={handleShowOverlay}>Save</button>
      </div>
    </Grid>
  );
};

export default AddNewLeads;
