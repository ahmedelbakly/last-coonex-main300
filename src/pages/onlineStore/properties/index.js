import React from "react";
import Grid from "@mui/material/Grid";
import styles from "./style.module.css";
import PropertyCard from "src/@core/components/propertyCard";
import { propertiesData } from "../../../fileData/propertyData";
import BasicPagination from "src/@core/components/pagination";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { ConfirmOverlay, SuccessOverlay } from "src/@core/components/overlays";
import { useAuth } from "src/hooks/useAuth";

const Properties = () => {
  const [overLaySuccess, setOverLaySuccess] = useState(false);
  const [overLayConfirmAll, setOverLayConfirmAll] = useState(false);
  const [overLayConfirmOne, setOverLayConfirmOne] = useState(false);
  const [deleteAll, setDeleteAll] = useState(false);
  const [productId, setProductId] = useState(null);

  //**set page name */
  const auth = useAuth();
  auth.setPages("Properties");

  /* start handle delete media */

  const handleShowDeleteConfirm = () => {
    setOverLayConfirmOne(true);
  };

  const openModal = (id) => {
    setOverLay(id);
  };
  const closeModal = () => {
    setOverLay(false);
  };
  // handle check box for select all media
  const handleDeleteAll = (event) => {
    if (event.target.checked) {
      setDeleteAll(true);
    } else {
      setDeleteAll(false);
    }
  };

  // * handle delete property     **/
  const handleDeleteProperty = (id) => {
    setOverLaySuccess(true);
    setOverLayConfirmOne(false);
    // axios.delete(`${api}/${id}`).then(() => {
    //   console.log(" property deleted");
    // });
  };

  // * handle product id *//
  const handleProductId = (id) => {
    setProductId(id);
  };

  return (
    <div
      style={{
        width: "100%",
        padding: "0px 0px",
        background: "#F7F7F7",
        paddingBottom: "20px",
      }}
    >
      {/* start overLay Success */}
      {overLaySuccess && (
        <SuccessOverlay
          message={"Deleted Successfully"}
          setState={setOverLaySuccess}
        />
      )}
      {/* End overLay Success */}
      {/* start overLay delete all Confirm  */}
      {overLayConfirmAll && (
        <ConfirmOverlay
          message={"Do you want to delete all properties?"}
          setState={setOverLayConfirmAll}
          successSetState={setOverLaySuccess}
          func={handleDeleteProperty}
        />
      )}
      {/*  End overLay delete all Confirm*/}
      {/* start overLay delete all Confirm  */}
      {overLayConfirmOne && (
        <ConfirmOverlay
          message={"Do you want to delete this property?"}
          setState={setOverLayConfirmOne}
          successSetState={setOverLaySuccess}
          func={handleDeleteProperty}
        />
      )}
      {/*  End overLay delete all Confirm*/}
      {/*  start sub title */}

      <div className={styles.subTitle}>
        <div className={styles.subTitleInput}>
          <input type="search" placeholder="search here" />
          <SearchIcon className={styles.subTitleIcon} />
        </div>
        {deleteAll ? (
          <button
            className={styles.delBtn}
            onClick={() => setOverLayConfirmAll(true)}
          >
            Delete All
          </button>
        ) : (
          <Link href={"/onlineStore/properties/addNewProperty"}>
            <button className={styles.addBtn}>Add New Property</button>
          </Link>
        )}
      </div>
      {/*  End sub title */}
      {/*  start properties cards */}
      <Grid
        container-full
        className={styles.container}
        spacing={12}
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div className={styles.countAndSelect}>
          <h4>{`All Properties (${propertiesData.length})`}</h4>
          <FormControlLabel
            control={<Checkbox name="deleteAll" onChange={handleDeleteAll} />}
            label="Selected All"
          />
        </div>
        {propertiesData.map((item, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "31.5%",
            }}
          >
            <PropertyCard
              img={item.img}
              deleteAll={deleteAll}
              handleDeleteProperty={handleDeleteProperty}
              handleShowDeleteConfirm={handleShowDeleteConfirm}
              handleProductId={handleProductId}
              id={index}
            />
          </Grid>
        ))}
      </Grid>
      <Grid
        container-full
        spacing={12}
        sx={{
          marginTop: "30px",
          display: "flex",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {/*  start properties cards */}
        {/*  start Pagination */}
        <BasicPagination count={5} color="primary" />
        {/*  end Pagination */}
      </Grid>
    </div>
  );
};

export default Properties;
