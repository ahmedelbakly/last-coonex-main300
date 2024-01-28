import React from "react";
import Grid from "@mui/material/Grid";
import styles from "./style.module.css";
import PropertyCard from "src/@core/components/propertyCard";
import { mediaData, propertiesData } from "../../../fileData/mediaLibraryData";
import BasicPagination from "src/@core/components/pagination";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import MediaCard from "src/@core/components/mediaLibCard";
import { ConfirmOverlay, SuccessOverlay } from "src/@core/components/overlays";
import {Box} from "@mui/material"
import { useAuth } from "src/hooks/useAuth";

const MediaLibrary = () => {
  const [overLaySuccess, setOverLaySuccess] = useState(false);
  const [overLayConfirmAll, setOverLayConfirmAll] = useState(false);
  const [overLayConfirmOne, setOverLayConfirmOne] = useState(false);
  const [deleteAll, setDeleteAll] = useState(false);

  //** set page name  */
  const auth = useAuth()
  auth.setPages("Media Library")

 {/* start handle delete media */}
const handleDeleteItem = ()=>{
  setOverLayConfirmOne(true)
}



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
  const handleDeleteAllItem = (id) => {
 setOverLaySuccess(true)
 setOverLayConfirmAll(false)
    // axios.delete(`${api}/${id}`).then(() => {
    //   console.log(" property deleted");
    // });
  }
  const handleConfirmDeleteItem = (id) => {
 setOverLaySuccess(true)
 setOverLayConfirmOne(false)
    // axios.delete(`${api}/${id}`).then(() => {
    //   console.log(" property deleted");
    // });
  }



 {/* end handle delete media */}

  return (
    <div style={{ width: "100%", padding: "0px 0px" }}>
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
          message={"Do you want to delete all Images?"}
          setState={setOverLayConfirmAll}
          successSetState={setOverLaySuccess}
          func= {handleDeleteAllItem}
        />
      )}
      {/*  End overLay delete all Confirm*/}
      {/* start overLay delete all Confirm  */}
      {overLayConfirmOne && (
        <ConfirmOverlay
          message={"Do you want to delete this Image?"}
          setState={setOverLayConfirmOne}
          successSetState={setOverLaySuccess}
          func={handleConfirmDeleteItem}
        />
      )}
      {/*  End overLay delete all Confirm*/}
      <div className={styles.subTitle}>
        <div className={styles.subTitleInput}>
          <input type="search" />
          <SearchIcon className={styles.subTitleIcon} />
        </div>
        {deleteAll ? (
          <button className={styles.delBtn} onClick={()=>setOverLayConfirmAll(true)}>Delete All</button>
        ) : (
          <Link href={"/onlineStore/properties/addNewProperty"}>
            <button className={styles.addBtn} >Upload Image</button>
          </Link>
        )}
      </div>
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
          <h4>{`All Properties (${mediaData.length})`}</h4>
          <FormControlLabel
            control={<Checkbox name="deleteAll" onChange={handleDeleteAll}/>}
            label="Selected All"
          />
        </div>
       {/* <Box className={StyleSheet.cardsContainer}> */}
       {mediaData.map((item, index) => (
          <Grid
            key={index}
            item
            xs={12}
           sx={{width:"18.23%"}}
          >
            <MediaCard img={item.img} deleteAll={deleteAll} handleDeleteItem={handleDeleteItem} />
          </Grid>
        ))}


       {/* </Box> */}
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
        <BasicPagination count={5} color="primary" />
      </Grid>
    </div>
  );
};

export default MediaLibrary;
