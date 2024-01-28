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
import { amenities } from "./data";

const ExtraInformation = ({
  setPage,
  handleExtraInformation,
  data,
  propertyDetails,
  handleAmenities,
}) => {
  const [values, setValues] = useState("");
  const handleChange = (e) => {
    setValues(e.target.value);
  };

  const amenitiesArray = propertyDetails.extraInformation.amenities;

  return (
    <Grid container className={StyleSheet.container}>
      <Grid container xs={12} className={StyleSheet.radioContainer}>
        <Grid item sx={{ flex: 1 }}>
          <FormControl>
            <FormLabel
              id="demo-controlled-radio-buttons-group"
              sx={{ fontWeight: 600, color: "#3D3D3D" }}
            >
              Furnished / Unfurnished *
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={data.furnished}
              onChange={(e) => handleExtraInformation(e)}
            >
              <FormControlLabel
                value="furnished"
                control={<Radio />}
                label="furnished"
                name="furnished"
              />
              <FormControlLabel
                value="unfurnished"
                control={<Radio />}
                label="unfurnished"
                name="furnished"
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
              Payment Method *
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={data.PaymentMethod}
              onChange={(e) => handleExtraInformation(e)}
            >
              <FormControlLabel
                value="cash"
                control={<Radio />}
                label="Cash"
                name="PaymentMethod"
              />
              <FormControlLabel
                value="installment"
                control={<Radio />}
                label="Installment"
                name="PaymentMethod"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>

      <Grid item className={StyleSheet.amenities}>
        {amenities.map(({ name, value }, index) => (
          <button
            key={index}
            className={
              propertyDetails.extraInformation.amenities.includes(value)
                ? StyleSheet.amenitiesIn
                : StyleSheet.amenitiesOut
            }
            onClick={(e) => handleAmenities(e,value)}
          >
            {name}
          </button>
        ))}
      </Grid>
      <div className={StyleSheet.nextAndPrev}>
        <button onClick={() => setPage("propertyLocation")}>Previous</button>
        <button onClick={() => setPage("contact")}>Next</button>
      </div>
    </Grid>
  );
};

export default ExtraInformation;
