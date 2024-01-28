import * as React from "react";
import { useState } from "react";
import { ConfirmOverlay, SuccessOverlay } from "src/@core/components/overlays";
import Grid from "@mui/material/Grid";
import styles from "./style.module.css";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import { MenuItemContainer } from "src/@core/components/menuItem";
import { useAuth } from "src/hooks/useAuth";


export default function Menus() {
  /////////////////////////////////////////////////////////////////////
  // overlay state
  const [overLaySuccess, setOverLaySuccess] = useState(false);
  const [overLayConfirmOne, setOverLayConfirmOne] = useState(false);
  const [deleteAll, setDeleteAll] = useState(false);
  //* set page     */
 const auth = useAuth();
  auth.setPages("Menus")


  return (
    <Grid sx={{ width: "100%", padding: "20px" }}>
      {/* start overLay Success */}
      {overLaySuccess && (
        <SuccessOverlay
          message={"Deleted Successfully"}
          setState={setOverLaySuccess}
        />
      )}
      {/* End overLay Success */}

      {/* start overLay delete all Confirm  */}
      {overLayConfirmOne && (
        <ConfirmOverlay
          message={"Do you want to delete this property?"}
          setState={setOverLayConfirmOne}
          successSetState={setOverLaySuccess}
        />
      )}
      {/*  End overLay delete all Confirm*/}
      {/*  End overLay delete all Confirm*/}
      <div className={styles.subTitle}>
        <div className={styles.subTitleInput}>
          <input type="search" />
          <SearchIcon className={styles.subTitleIcon} />
        </div>

        <Link href={"/onlineStore/menus/addNewMenu"}>
          <button className={styles.addBtn}>Add menu item</button>
        </Link>
      </div>
      {/*  End overLay delete all Confirm*/}
      <Grid
        container-full
        className={styles.radioContainer}
      >


    <MenuItemContainer/>
    <MenuItemContainer/>
    <MenuItemContainer/>
    <MenuItemContainer/>
    <MenuItemContainer/>
    <MenuItemContainer/>
    <MenuItemContainer/>
    <MenuItemContainer/>

      </Grid>
    </Grid>
  );
}
