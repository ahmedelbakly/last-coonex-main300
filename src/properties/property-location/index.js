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
import CustomSelect from "src/@core/components/custom-select";


//* property location data test */
const propertyLocationData = [
  {
    id:1,
    name:"Cairo",
    value:"cairo"
  },
  {
    id:1,
    name:"Mansoura",
    value:"mansoura"
  },
  {
    id:1,
    name:"Sharm Elshik",
    value:"Sharm Elshik"
  },



]

const handlePropertyLocation = (e) => {

}

const PropertyLocation = ({setPage,handlePropertyLocation,handleCustomSelect,data}) => {
  const [values, setValues] = useState("");
  const handleChange = (e) => {
   setValues(e.target.value)
  };

  return (
    <Grid container className={StyleSheet.container}>
      {/* <InputLayout>
        <label>Add location *</label>
        <select  id="cars" name="location" onChange={(e)=>handlePropertyLocation(e)}>
          <option value="cairo">Cairo</option>
          <option value="mekka">Mekka</option>
          <option value="alex">Alex</option>
          <option value="elmadina elmonwara">Elmadina Elmonwara</option>
        </select>
      </InputLayout> */}
      <CustomSelect
        array={propertyLocationData}
        fun={handleCustomSelect}
        state={data.location}
        label={"Add location *"}
        selectName={"location"}
        object={"propertyLocation"}
      />
      <Grid container xs={12} className={StyleSheet.radioContainer}>
        <Grid item sx={{ flex: 1 }}>
        <InputLayout>
        <label>Surface area *</label>
        <input type="number" name="surfaceArea" onChange={(e)=>handlePropertyLocation(e)}/>
      </InputLayout>
        </Grid>
        <Grid item sx={{ flex: 1 }}>
        <InputLayout>
        <label>Price * </label>
        <input type="number" name="price" onChange={(e)=>handlePropertyLocation(e)}/>
      </InputLayout>
        </Grid>
      </Grid>

      <Grid container xs={12} className={StyleSheet.radioContainer}>
        <Grid item sx={{ flex: 1 }}>
        <InputLayout>
        <label>Baths *</label>
        <input type="number" name="paths" onChange={(e)=>handlePropertyLocation(e)}/>
      </InputLayout>
        </Grid>
        <Grid item sx={{ flex: 1 }}>
        <InputLayout>
        <label>Rooms *</label>
        <input type="number"  name="rooms" onChange={(e)=>handlePropertyLocation(e)}/>
      </InputLayout>
        </Grid>
        <Grid item sx={{ flex: 1 }}>
        <InputLayout>
        <label>Floor *</label>
        <input type="number" name="floor" onChange={(e)=>handlePropertyLocation(e)}/>
      </InputLayout>
        </Grid>
      </Grid>

    <div className={StyleSheet.nextAndPrev}>
      <button onClick={()=>setPage("basicInformation")}>Previous</button>
      <button onClick={()=>setPage("extraInformation")}>Next</button>
      </div>
    </Grid>
  );
};

export default PropertyLocation;
