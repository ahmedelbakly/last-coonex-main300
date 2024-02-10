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
  auth.setPages("CRM Add New Leads");
  const [overLaySuccess, setOverLaySuccess] = useState(false);
  const [emptyItem, setEmptyItem] = useState({});
  //** state as object to handle data of new lead */
  const [addLeadData, setAddLeadData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    leadsSource: "",
    assignTo: "",
    propertyId: "",
    propertyType: "",
    propertyValue: "",
    preferPrice: "",
    financeOption: "",
  });
  console.log("====================================");
  console.log(auth);
  console.log("====================================");

  const saveNewLeadApi = "http://localhost:3001/leads/new";

  //////////////////////////////////////////////////////////////////////////////////////

  const handleChange = (e) => {
    const { name, value } = e.target;

    setAddLeadData({ ...addLeadData, [name]: value });
  };

  //*handle custom select */
 
  const handleCustomSelect = (selectedValue, selectName) => {
    setAddLeadData((prev) => {
      return {
        ...prev,
        [selectName]: selectedValue,
      };
    });
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
          message={"Edited Terms and conditions Page Successfully"}
          setState={setOverLaySuccess}
        />
      )}

      {/* End overLay Success */}
      <Grid className={StyleSheet.radioContainer}>
        <InputLayout>
          {emptyItem?.fullName && <p>{emptyItem?.fullName}</p>}
          <label>Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={addLeadData.fullName}
            placeholder=" full name"
            onChange={handleChange}
          />
        </InputLayout>
        <InputLayout>
          {emptyItem?.phoneNumber && <p>{emptyItem?.phoneNumber}</p>}
          <label>Phone Number * </label>
          <input
            type="tle"
            name="phoneNumber"
            value={addLeadData.phoneNumber}
            placeholder="phone number"
            onChange={handleChange}
          />
        </InputLayout>
      </Grid>

      <Grid container xs={12} className={StyleSheet.radioContainer}>
        <Grid item sx={{ flex: 1 }}>
          <InputLayout>
            <label> Email Address *</label>
            <input
              type="email"
              placeholder="email"
              name="email"
              value={addLeadData.email}
              onChange={handleChange}
            />
          </InputLayout>
        </Grid>
        <Grid item sx={{ flex: 1 }}>
          <CustomSelect
            array={assignToData}
            fun={handleCustomSelect}
            state={addLeadData.assignTo}
            label={"Assign To"}
            selectName={"assignTo"}
          />
        </Grid>
      </Grid>
      <Grid container xs={12} className={StyleSheet.radioContainer}>
        <Grid item sx={{ flex: 1 }}>
          <CustomSelect
            array={leadsSourceData}
            fun={handleCustomSelect}
            state={addLeadData.leadsSource}
            label={"Lead Source"}
            selectName={"leadsSource"}
          />
        </Grid>
        <Grid item sx={{ flex: 1 }}>
          <InputLayout>
            <label>Property ID </label>
            <input
              type="text"
              placeholder="property Id"
              name="propertyId"
              value={addLeadData.propertyId}
              onChange={handleChange}
            />
          </InputLayout>
        </Grid>
      </Grid>
      <Grid container xs={12} className={StyleSheet.radioContainer}>
        <Grid item sx={{ flex: 1 }} py={0}>
          <CustomSelect
            array={propertyTypeTest}
            fun={handleCustomSelect}
            state={addLeadData.propertyType}
            label={"Property Type"}
            selectName={"propertyType"}
          />
        </Grid>
        <Grid item sx={{ flex: 1 }}>
          <InputLayout>
            <label>Property Value </label>
            <input
              type="text"
              placeholder="property value"
              name="propertyValue"
              value={addLeadData.propertyValue}
              onChange={handleChange}
            />
          </InputLayout>
        </Grid>
      </Grid>
      <Grid container xs={12} className={StyleSheet.radioContainer}>
        <Grid item sx={{ flex: 1 }}>
          <InputLayout>
            <label> Prefer Price Range *</label>
            <input
              type="number"
              placeholder="prefer price range"
              name="preferPrice"
              value={addLeadData.preferPrice}
              onChange={handleChange}
            />
          </InputLayout>
        </Grid>
        <Grid item sx={{ flex: 1 }}>
          <CustomSelect
            array={financeOptionData}
            fun={handleCustomSelect}
            state={addLeadData.financeOption}
            label={"Finance Option"}
            selectName={"financeOption"}
          />
        </Grid>
      </Grid>

      <div className={StyleSheet.nextAndPrev}>
        <Link href="/crm/leads">
          <button>Cancel</button>
        </Link>
        <button>Save</button>
      </div>
    </Grid>
  );
};

export default AddNewLeads;
