import React, { useState } from "react";
import StyleSheet from "./styleSheet.module.css";
import { FiUpload } from "react-icons/fi";
import Grid from "@mui/material/Grid";
import { InputLayout } from "src/properties/shared-components/input-layout";
import Link from "next/link";
import { ConfirmOverlay, SuccessOverlay } from "src/@core/components/overlays";
import { useAuth } from "src/hooks/useAuth";

const AddNewPage = ({ setPage, handleBasicInformation }) => {
  const [overLaySuccess, setOverLaySuccess] = useState(false);
  const auth = useAuth();
  auth.setPages("Add New Page");



  const handleDeleteItem = () => {
    setOverLayConfirmOne(true);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const data = {
    title: "",
    category: "commercial",
    purpose: "sale",
    propertyType: "",
    description: "",
    videoLink: "",
    images: [],
  };

  return (
    <Grid container className={StyleSheet.container}>
       {/* start overLay Success */}
       {overLaySuccess && (
        <SuccessOverlay
          message={"Edited Terms and conditions Page Successfully"}
          setState={setOverLaySuccess}
        />
      )}
      {/* End overLay Success */}

      <InputLayout>
        <label>Name *</label>
        <input
          type="text"
          name="title"
          value={data.title}
          placeholder="e.g. 2000 Sqft House"
          onChange={(e) => handleBasicInformation(e)}
        />
      </InputLayout>
      <InputLayout>
        <label>Slug *</label>
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
          <InputLayout>
            <label>Meta title </label>
            <input type="text" placeholder="Meta title"/>
          </InputLayout>
        </Grid>
        <Grid item sx={{ flex: 1 }}>
          <InputLayout>
            <label>Meta keywords * </label>
            <input type="text" />
          </InputLayout>
        </Grid>
      </Grid>

      <InputLayout>
        <label>Meta description</label>
        <textarea
          name="description"
          value={data.description}
          onChange={(e) => handleBasicInformation(e)}
          cols="30"
          rows="7"
          placeholder="Type your description"
        ></textarea>
      </InputLayout>
      <InputLayout>
        <label>Meta images</label>
        <div className={StyleSheet.addImage}>
          <label htmlFor="addImage">
            <FiUpload fontSize={30} color="#1DB2FF" />
          </label>
          <input
            onChange={(e) => handleBasicInformation(e)}
            name="images"
            className={StyleSheet.fileInput}
            type="file"
            id="addImage"
          ></input>
        </div>
      </InputLayout>
      <div className={StyleSheet.nextAndPrev}>
       <Link href= "/onlineStore/pages">
       <button >Cancel</button>
       </Link>
        <button onClick={() => setOverLaySuccess(true)}>Next</button>
      </div>
    </Grid>
  );
};

export default AddNewPage;
