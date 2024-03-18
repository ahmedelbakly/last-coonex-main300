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
import { validationAddLeads } from "src/@core/components/validation";
import CustomSelect from "src/@core/components/custom-select";
//** property data */
import { propertyTypeTest } from "src/fileData/addBropertyData";
//** import leadSource data */
import { leadsSourceData } from "src/fileData/cmsLeadsData";
import { SuccessOverlay } from "src/@core/components/overlays";
import { PiMicrosoftExcelLogoThin } from "react-icons/pi";
import { IoIosClose } from "react-icons/io";
import Calendar from "src/store/apps/calendar";
import CustomDate from "src/@core/components/cutomDate/CustomDate";
import { fi } from "date-fns/locale";
import { priorityOptionData, relatedToOption, rows, statusOption } from "../../../../fileData/tasksData";
import { useEffect } from "react";
import { useData } from "src/hooks/useData";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import axios from "axios";

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

const EditTask = () => {
  const auth = useAuth();
  auth.setPages("Edit Task");
  // store project data
  const { tasks, setTasks } = useData();
  // access params from url
  const router = useRouter();
  const { taskId} = router.query;

  //** states to handle show success overlay  */
  const [overLaySuccess, setOverLaySuccess] = useState(false);

  //** state as object to handle data of new lead */

  const [editTaskData, setEditTaskData] = useState({
    name: "",
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
  //** filter task data by taskId to edit it*/
  useEffect(() => {
    setEditTaskData(tasks.find((task) => task.id === taskId));
  }, [taskId]);
  console.log(editTaskData);
  //**state to handle files  */
  const [files, setFiles] = useState(null);

  //////////////////////////////////////////////////////////////////////////////////////
  //* handle change file  */
  const handleChangeFile = (e) => {
    setFiles(Object.values(e.target.files));
  };
  console.log(files);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setEditTaskData({ ...editTaskData, [name]: value });
  };

  //*handle custom select */
  // handle custom select
  const handleCustomSelect = (selectedValue, selectName) => {
    setEditTaskData((prev) => {
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
    setEditTaskData((prev) => {
      return {
        ...prev,
        [propertyName]: selectedDate,
      };
    });
  };

  //**handle show success overlay */
  const handleShowOverlay = () => {
    setOverLaySuccess(!overLaySuccess);
  };

  // handle send data to api
  const handleEditTask = () => {
    axios
      .put(`http://195.35.2.218:5000/api/task/${taskId}`, editTaskData)
      .then(({ data }) => {
        const { payload, message } = data;
        if (message === "successfully") {
          setTasks(payload);
          setOverLaySuccess(true);
        }
      });
  };

  return (
    <Grid container className={StyleSheet.container}>
      {/* start header */}
      <h5 className={StyleSheet.title}>Basic Information</h5>
      {/* start overLay Success */}
      {overLaySuccess && (
        <SuccessOverlay
          message={"Edit Task successfully "}
          setState={setOverLaySuccess}
          route={"/crm/tasks"}
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
              name="name"
              value={editTaskData.name}
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
            state={editTaskData.relatedTo}
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
            state={editTaskData.assignTo}
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
            state={editTaskData.priority}
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
            value={editTaskData.startDate?.split("T")[0]}
            label="Start Date"
            handleDate={handleDate}
            propertyName="startDate"
          />
        </Grid>
        {/**End Start Date*/}
        {/**Start End Date*/}
        <Grid item sx={{ flex: 1 }}>
          <CustomDate
            value={editTaskData.endDate?.split("T")[0]}
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
            state={editTaskData.status}
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
            value={editTaskData.description}
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
        <button onClick={handleEditTask}>Save</button>
      </div>
    </Grid>
  );
};

export default EditTask;
