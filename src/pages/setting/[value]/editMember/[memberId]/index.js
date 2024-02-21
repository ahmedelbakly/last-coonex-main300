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
import CustomDate from "src/@core/components/cutomDate/CustomDate";
import { generatePassword } from "src/@core/components/helperFunction";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useRouter } from "next/router";
import { rolesRows } from "src/fileData/setting_data/roles_data";
import { useEffect } from "react";


//* leads test data */
const genderOption = [
  { id: 1, name: "Select option", value: "" },
  { id: 2, name: "Male", value: "male" },
  { id: 2, name: "Female", value: "female" },
  { id: 3, name: "Other", value: "Other" },
];
const jobOption = [
  { id: 1, name: "Select option", value: "" },
  { id: 2, name: "Designer", value: "designer" },
  { id: 2, name: "Developer", value: "developer" },
  { id: 3, name: "Team Leader", value: "teamLeader" },
];

const AddNewMember = () => {
  const auth = useAuth();
  const router  = useRouter();
  const { value, memberId } = router.query;
  console.log("value" , memberId);
  auth.setPages("Add New Member");
  const [overLaySuccess, setOverLaySuccess] = useState(false);
  const [ShowPass, setShowPass] = useState(false);
  const [product, setProduct] = useState(null);

  //** state as object to handle data of new lead */

  const [newMemberData, setNewMemberData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    hireDate: "",
    role: "",
    email: "",
    password: "",
    gender: "",
    phone: "",
  });

  /** HANDLE CHANGE */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewMemberData({ ...newMemberData, [name]: value });
  };

  //*handle custom select */

  const handleCustomSelect = (selectedValue, selectName) => {
    setNewMemberData((prev) => {
      return {
        ...prev,
        [selectName]: selectedValue,
      };
    });
  };

  //** handle date */
  const handleDate = (selectedDate, propertyName) => {
    setNewMemberData((prev) => {
      return {
        ...prev,
        [propertyName]: selectedDate,
      };
    });
  };

  //** handle generate password */
  const handleGeneratePassword = () => {
    setNewMemberData((prev) => {
      return {
        ...prev,
        password: generatePassword(),
      };
    });
  };

  //**handle show success overlay */
  const handleShowOverlay = () => {
    console.log(newMemberData);
    setOverLaySuccess(!overLaySuccess);
  };

  //** handle show password */
  const handleShowPassword = () => {
    setShowPass(!ShowPass);
  };

  //** filter product */
  useEffect(() => {
  if(memberId) {
    setProduct(rolesRows.find((item) => item.id == memberId))
    alert("memberId=>" + memberId)
  }
  }, [memberId])

  console.log("====================================",product);


  return (
    <Grid container className={StyleSheet.container}>
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
            <label>First Name *</label>
            <input
              type="text"
              name="firstName"
              value={newMemberData.firstName}
              placeholder=" first name"
              onChange={handleChange}
            />
          </InputLayout>
        </Grid>
        {/* End task name  */}
        {/** start task name  */}
        <Grid item sx={{ flex: 1 }}>
          <InputLayout>
            <label>Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={newMemberData.lastName}
              placeholder=" last name"
              onChange={handleChange}
            />
          </InputLayout>
        </Grid>
        {/* End task name  */}

        {/**Start Related to */}
      </Grid>
      {/**End Related to */}
      <Grid container xs={12} className={StyleSheet.radioContainer}>
        {/**Start Phone */}
        <Grid item sx={{ flex: 1 }}>
          <InputLayout>
            <label>Phone *</label>
            <input
              type="text"
              name="phone"
              value={newMemberData.phone}
              placeholder=" phone"
              onChange={handleChange}
            />
          </InputLayout>
        </Grid>
        {/**End Phone */}
        {/**Start priority*/}
        <Grid item sx={{ flex: 1 }}>
          <CustomSelect
            array={genderOption}
            fun={handleCustomSelect}
            state={newMemberData.gender}
            label={"Gender"}
            selectName={"gender"}
          />
        </Grid>
        {/**End priority*/}
      </Grid>
      <Grid container xs={12} className={StyleSheet.radioContainer}>
        {/**Start Start Date*/}
        <Grid item sx={{ flex: 1 }}>
          <InputLayout>
            <label>Job Title *</label>
            <input
              type="text"
              name="jobTitle"
              value={newMemberData.jobTitle}
              placeholder=" job Title"
              onChange={handleChange}
            />
          </InputLayout>
        </Grid>
        {/**End Start Date*/}
        {/**Start End Date*/}
        <Grid item sx={{ flex: 1 }}>
          <CustomDate
            value={newMemberData.hireDate}
            label="Date of hire"
            handleDate={handleDate}
            propertyName="hireDate"
          />
        </Grid>
      </Grid>
      <h5 className={StyleSheet.title2}>Account settings</h5>
      <Grid container xs={12} className={StyleSheet.radioContainer}>
        {/**Start status*/}
        <Grid item sx={{ flex: 1 }}>
          <InputLayout>
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={newMemberData.email}
              placeholder=" email"
              onChange={handleChange}
            />
          </InputLayout>
        </Grid>
      </Grid>
      <Grid container xs={12} className={StyleSheet.radioContainer}>
        {/**Start status*/}
        <Grid
          item
          sx={{
            flex: 1,
            display: "flex !important",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "10px",
          }}
        >
          <div className={StyleSheet.genPassword}>
            {!ShowPass ? (
              <FiEyeOff
                className={StyleSheet.genPasswordIcon}
                onClick={handleShowPassword}
              />
            ) : (
              <FiEye
                className={StyleSheet.genPasswordIcon}
                onClick={handleShowPassword}
              />
            )}
            <InputLayout>
              <label>Password *</label>
              <input
                type={ ShowPass ? "text" : "password"}
                name="password"
                value={newMemberData.password}
                placeholder=" password"
                onChange={handleChange}
              />
            </InputLayout>
          </div>
          <button
            className={StyleSheet.genButton}
            onClick={handleGeneratePassword}
          >
            Generate
          </button>
        </Grid>
      </Grid>
      <Grid container xs={12} className={StyleSheet.radioContainer}>
        {/**Start status*/}
        <Grid item sx={{ flex: 1 }} py={0}>
          <CustomSelect
            array={jobOption}
            fun={handleCustomSelect}
            state={newMemberData.role}
            label={"Role"}
            selectName={"role"}
          />
        </Grid>
        {/**End status*/}
        {/**Start upload file*/}
      </Grid>
      {/**End upload file*/}

      {/**Start next and prev button*/}
      <div className={StyleSheet.nextAndPrev}>
        <Link href=" /setting/team">
          <button>Cancel</button>
        </Link>
        <button onClick={handleShowOverlay}>Save</button>
      </div>
    </Grid>
  );
};

export default AddNewMember;
