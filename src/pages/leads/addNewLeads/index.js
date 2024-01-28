import React, { useState } from "react";
import StyleSheet from "./styleSheet.module.css";
import { FiUpload } from "react-icons/fi";
import Grid from "@mui/material/Grid";
import { InputLayout } from "src/properties/shared-components/input-layout";
import Link from "next/link";
import { ConfirmOverlay, SuccessOverlay } from "src/@core/components/overlays";
import { useAuth } from "src/hooks/useAuth";
import { validationAddLeads } from "src/@core/components/validation";
import ImportLeads from "../importLeads";
import { leadsSourceData } from "../../../fileData/cmsLeadsData";
import CustomSelect from "src/@core/components/custom-select";
import { propertiesData } from "src/fileData/propertyData";
import { propertyTypeTest } from "src/fileData/addBropertyData";
import select from "src/@core/theme/overrides/select";

//* leads test data */
const assignToData = [
  { id: 1, name: "Select assistant", value: "" },
  { id: 2, name: "Mohamed Eslam", value: "Mohamed Eslam" },
  { id: 2, name: "Ahmed Elbakly", value: "Ahmed Elbakly" },
  { id: 3, name: "Omar Ahmed", value: "Omar Ahmed" },
];

const financeOptionData = [
  { id: 1, name: "Cash", value: "cash" },
  { id: 2, name: "Installment", value: "installment" },
];

const AddNewLeads = () => {
  const auth = useAuth();
  auth.setPages("Add New Leads");
  const [overLaySuccess, setOverLaySuccess] = useState(false);
  const [emptyItem, setEmptyItem] = useState({});

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

  //** function to handle empty Item */
  const handleEmptyItem = (obj) => {
    setEmptyItem(null);
    Object.keys(obj).forEach((key) => {
      if (obj[key] === "") {
        setEmptyItem((prev) => {
          return {
            ...prev,
            [key]: "This field is required",
          };
        });
      }
    });
  };

  const saveNewLeadApi = "http://localhost:3001/leads/new";
  // * handle save new leads *//
  // const handleSave = async () => {
  //   try {
  //     const res = await axios.post(addLeadsApi, addLeadData);
  //     console.log(res.data);
  //     auth.setUser(res.data);
  //     setOverLaySuccess(true);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  //////////////////////////////////////////////////////////////////////////////////////

  const handleSaveLead = async () => {
    // setOverLaySuccess(true)
    //* FILTER AddNewLeads to remove empty item */
    const validation = validationAddLeads(addLeadData);
    console.log("====================================");
    console.log(validation);
    console.log("====================================");
    setEmptyItem(validation);

    if (Object.keys(validation).length === 0) {
      console.log("====================================");
      // console.log(emptyItem);
      console.log("====================================");
    } else {
      console.log("====================================");
      // console.log(emptyItem);
      console.log("====================================");
    }

    try {
      return;
      const response = await axios.post(saveNewLeadApi, addLeadData);
      console.log("====================================");
      console.log(response.data);
      console.log("====================================");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(emptyItem);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setAddLeadData({ ...addLeadData, [name]: value });
  };

  //*handle custom select */
  // handle custom select
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
        <Link href="/onlineStore/pages">
          <button>Cancel</button>
        </Link>
        <button onClick={() => handleSaveLead()}>Save</button>
      </div>
    </Grid>
  );
};

export default AddNewLeads;

/*  const filteredData = Object.fromEntries(
      Object.entries(addLeadData).filter(([key, value]) => value !== "")
      // * push empty item to emptyItem array * /
    );
    console.log(filteredData); */
