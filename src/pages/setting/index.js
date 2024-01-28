import React from "react";
import Grid from "@mui/material/Grid";
import StyleSheet from "./style.module.css";
import { useState } from "react";
import { mainList, rightIcon } from "../../fileData/settingData";
import BasicInfo from "src/properties/basic-information";
import PropertyLocation from "src/properties/property-location";
import ExtraInformation from "src/properties/extra-information";
import Contact from "src/properties/contact";
import { LayoutOverlay } from "src/properties/shared-components/input-layout";
import axios from "axios";
import { useAuth } from "src/hooks/useAuth";
import { useForm } from "react-hook-form";
import { FaChevronRight } from "react-icons/fa6";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import EnhancedTable from "./table";
import { ConfirmOverlay, SuccessOverlay } from "src/@core/components/overlays";

const Settings = () => {
  const [page, setPage] = useState("adminRole");
  const [overLay, setOverLay] = useState(false);
  const [deleteAll, setDeleteAll] = useState(false);
  const [successOverlay, setSuccessOverlay] = useState(false);
  const [confirmOverlayAll, setConfirmOverlayAll] = useState(false);
  const [confirmOverlayOne, setConfirmOverlayOne] = useState(false);

  const auth = useAuth();
  const { setProperty, property, setPages } = auth;
  setPages("Settings");

  const handleDeleteOneProperty = (id) => {
    setSuccessOverlay(true);
    setConfirmOverlayOne(false);
    // axios.delete(`${api}/${id}`).then(() => {
    //   console.log(" property deleted");
    // });
  };
  const handleDeleteAllProperty = (id) => {
    setSuccessOverlay(true);
    setConfirmOverlayAll(false);
    // axios.delete(`${api}/${id}`).then(() => {
    //   console.log(" property deleted");
    // });
  };

  const handleDeleteAll = (event) => {
    if (event.target.checked) {
      setDeleteAll(true);
    } else {
      setDeleteAll(false);
    }
  };

  //*   */
  const handleProductId = (id) => {
    setProductId(id);
  };

  //* */
  const handleShowDeleteOneConfirm = () => {
    setConfirmOverlayOne(true);
  };
  const handleShowDeleteAllConfirm = () => {
    setConfirmOverlayAll(true);
  };

  return (
    <Grid
      container-full
      className={StyleSheet.container}
      spacing={12}
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "flex-start",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      {/* start overLay Success */}
      {successOverlay && (
        <SuccessOverlay
          message={"Deleted Successfully"}
          setState={setSuccessOverlay}
        />
      )}
      {/* End overLay Success */}
      {/* start overLay delete all Confirm  */}
      {confirmOverlayAll && (
        <ConfirmOverlay
          message={"Do you want to delete all Roles?"}
          setState={setConfirmOverlayAll}
          successSetState={setSuccessOverlay}
          func={handleDeleteAllProperty}
        />
      )}
      {/*  End overLay delete all Confirm*/}
      {/* start overLay delete all Confirm  */}
      {confirmOverlayOne && (
        <ConfirmOverlay
          message={"Do you want to delete this role?"}
          setState={setConfirmOverlayOne}
          successSetState={setSuccessOverlay}
          func={handleDeleteOneProperty}
        />
      )}
      {/*  End overLay delete all Confirm*/}
      <Grid
        item
        sx={{
          flex: 2,
          display: "flex",
          width: "100%",
          justifyContent: "flex-start",
          flexDirection: "column",
          gap: "30px",
          flexWrap: "wrap",
          minHeight: "100vh",
          borderRight: "solid 1px #E2E2E2",
          padding: "20px 0px",
        }}
      >
        {mainList.map((item, index) => (
          <div
            key={index}
            className={
              page === item.stateValue
                ? StyleSheet.itemSelected
                : StyleSheet.item
            }
            onClick={() => setPage(item.stateValue)}
          >
            <h3>{item.name}</h3>
            <FaChevronRight />
          </div>
        ))}
      </Grid>
      <Grid
        item
        sx={{
          flex: 5,
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "wrap",
          padding: "20px 0px",
          flexDirection: "column",
        }}
      >
        {page === "adminRole" && (
          <div>
            <div className={StyleSheet.subTitle}>
              <div className={StyleSheet.subTitleInput}>
                <input type="search" />
                <SearchIcon className={StyleSheet.subTitleIcon} />
              </div>
              {deleteAll ? (
                <button
                  className={StyleSheet.delBtn}
                  onClick={handleShowDeleteAllConfirm}
                >
                  Delete All
                </button>
              ) : (
                <Link href={"/setting/addNewRole"}>
                  <button className={StyleSheet.addBtn}>Add New Role</button>
                </Link>
              )}
            </div>

            <EnhancedTable
              handleDeleteAll={handleDeleteAll}
              handleShowDeleteOneConfirm={handleShowDeleteOneConfirm}
            />
          </div>
        )}
      </Grid>
    </Grid>
  );
};

export default Settings;
