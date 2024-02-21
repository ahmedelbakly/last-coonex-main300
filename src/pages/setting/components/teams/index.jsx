import React from "react";
import StyleSheet from "./style.module.css";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import EnhancedTable from "../table";
import { ConfirmOverlay, SuccessOverlay } from "src/@core/components/overlays";

const Teams = ({ rows, headCells }) => {
  const [deleteAll, setDeleteAll] = useState(false);
  const [successOverlay, setSuccessOverlay] = useState(false);
  const [confirmOverlayAll, setConfirmOverlayAll] = useState(false);
  const [confirmOverlayOne, setConfirmOverlayOne] = useState(false);
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
    <div>
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
          message={"Do you want to delete all Member?"}
          setState={setConfirmOverlayAll}
          successSetState={setSuccessOverlay}
          func={handleDeleteAllProperty}
        />
      )}
      {/*  End overLay delete all Confirm*/}
      {/* start overLay delete all Confirm  */}
      {confirmOverlayOne && (
        <ConfirmOverlay
          message={"Do you want to delete this Member?"}
          setState={setConfirmOverlayOne}
          successSetState={setSuccessOverlay}
          func={handleDeleteOneProperty}
        />
      )}
      {/*  End overLay delete all Confirm*/}
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
          <Link href={"/setting/team/addNewMember"}>
            <button className={StyleSheet.addBtn}>Add New Member</button>
          </Link>
        )}
      </div>

      <EnhancedTable
        handleDeleteAll={handleDeleteAll}
        handleShowDeleteOneConfirm={handleShowDeleteOneConfirm}
        rows={rows}
        headCells={headCells}
        editRoute={"/setting/team/editMember/"}
      />
    </div>
  );
};

export default Teams;
