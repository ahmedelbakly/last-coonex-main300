import React, { useState } from "react";
import { InputLayout } from "../shared-components/input-layout";
import StyleSheet from "./styleSheet.module.css";
import { FiUpload } from "react-icons/fi";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import Grid from "@mui/material/Grid";
import { propertyTypeTest } from "src/fileData/addBropertyData";
import CustomSelect from "src/@core/components/custom-select";

const BasicInfo = ({
  setPage,
  handleBasicInformation,
  data,
  handleCustomSelect,
  uploadImages,
}) => {
  const [values, setValues] = useState("");
  // handle upload images

  // files &&
  //   Object.values(files).map((file, index) =>
  //     formData.append("proImg", file)
  //   );

  return (
    <Grid container className={StyleSheet.container}>
      <InputLayout>
        <label>Add title *</label>
        <input
          type="text"
          name="title"
          value={data.title}
          placeholder="e.g. 2000 Sqft House"
          onChange={(e) => handleBasicInformation(e)}
        />
      </InputLayout>
      <Grid container xs={12} className={StyleSheet.radioContainer}>
        <Grid item sx={{ flex: 1 }}>
          <FormControl>
            <FormLabel
              id="demo-controlled-radio-buttons-group"
              sx={{ fontWeight: 600, color: "#3D3D3D" }}
            >
              Category *
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={data.category}
              onChange={(e) => handleBasicInformation(e)}
            >
              <FormControlLabel
                value="residential"
                control={<Radio />}
                label="Residential"
                name="category"
              />
              <FormControlLabel
                name="category"
                value="commercial"
                control={<Radio />}
                label="Commercial"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item sx={{ flex: 1 }}>
          <FormControl>
            <FormLabel
              id="demo-controlled-radio-buttons-group"
              sx={{ fontWeight: 600, color: "#3D3D3D" }}
            >
              Porpouse *
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={data.purpose}
              onChange={(e) => handleBasicInformation(e)}
            >
              <FormControlLabel
                value="rent"
                control={<Radio />}
                label="For Rent"
                name="purpose"
              />
              <FormControlLabel
                name="purpose"
                value="sale"
                control={<Radio />}
                label="For Sale"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>

      {/* <InputLayout>
        <label></label>
        <select
          name="propertyType"
          id="cars"
          placeholder="Describe your property"
          value={data.propertyType}
          onChange={(e) => handleBasicInformation(e)}
        >
          {propertyTypeTest.map(({ name, value }, index) => (
            <option key={index} value={value}>
              {name}
            </option>
          ))}
        </select>
      </InputLayout> */}
      <CustomSelect
        array={propertyTypeTest}
        fun={handleCustomSelect}
        state={data.propertyType}
        label={"Property Type *"}
        selectName={"propertyType"}
        object={"basicInformation"}
      />

      <InputLayout>
        <label>Ad Description *</label>
        <textarea
          name="description"
          value={data.description}
          onChange={(e) => handleBasicInformation(e)}
          cols="30"
          rows="7"
          placeholder="Describe your property"
        ></textarea>
      </InputLayout>
      <InputLayout>
        <label>Ad Images *</label>
        <div className={StyleSheet.addImage}>
          <label htmlFor="addImage">
            <div className={StyleSheet.con}>
              {" "}
              <FiUpload fontSize={30} color="#1DB2FF" />
              <p>
                Upload the image or{" "}
                <span className={StyleSheet.browse}>Browse Your Device</span>
              </p>
            </div>
          </label>
          <input
            name="images"
            className={StyleSheet.fileInput}
            type="file"
            id="addImage"
            multiple
            onChange={uploadImages}
          ></input>
        </div>
      </InputLayout>
      <InputLayout>
        <label>Detailed Video Link *</label>
        <input
          name="videoLink"
          value={data.videoLink}
          onChange={(e) => handleBasicInformation(e)}
          type="url"
          placeholder="https:/www.Haraj X.com"
        />
      </InputLayout>
      <div className={StyleSheet.nextAndPrev}>
        <button className={StyleSheet.hideBtn}>Previous</button>
        <button onClick={() => setPage("propertyLocation")}>Next</button>
      </div>
    </Grid>
  );
};

export default BasicInfo;
