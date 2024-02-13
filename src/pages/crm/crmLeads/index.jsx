import React from "react";
import StyleSheet from "./style.module.css";
import { useAuth } from "src/hooks/useAuth";
import { Box, Grid, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import Link from "next/link";
import CustomSelect from "src/@core/components/custom-select";
import { GridSearchIcon } from "@mui/x-data-grid";
import { useState } from "react";
import KanbanPage from "./components/Kanban";
import { leadSourceData } from "../../../fileData/crmLeadsData";
import { TbFilter } from "react-icons/tb";
import ImportLeads from "./components/importLeads";
import ListLeads from "./components/leadsList";
import Filter from "./components/filter/filter";

const Leads = () => {
  //** START LEADS STATE  */
  const [overLaySuccess, setOverLaySuccess] = useState(false);
  const [overLayConfirmOne, setOverLayConfirmOne] = useState(false);
  const [showAddList, setShowAddList] = useState(false);
  const [showImportedLeads, setShowImportedLeads] = useState(false);
  const [leadSourceValue, setLeadSourceValue] = useState("");
  const [viewType, setViewType] = useState("Kanban");
  const [showFilter, setShowFilter] = useState(false);
  //** END LEADS STATE  */

  //** handle show imported popUp  */
  const handleShowImportedLeads = () => {
    setShowImportedLeads(!showImportedLeads);
  };

  //* handle show add list *//
  const handleShowAddList = () => {
    setShowAddList(!showAddList);
  };
  //**HANDLE SHOW PAGE NAME */
  const { setPages } = useAuth();
  setPages("CRM Leads");
  //** Handle Show Filter */
  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <Grid container className={StyleSheet.mainContainer}>
      {/* START FILTER */}
      {showFilter && <Filter handleShowFilter={handleShowFilter} />}
      {/* END FILTER */}
      {/* START IMPORTED POPUP OVERLAY */}
      {showImportedLeads && (
        <ImportLeads handleShowImportedLeads={handleShowImportedLeads} />
      )}
      {/* END IMPORTED POPUP OVERLAY */}
      {/* START ADD NEW LIST BUTTON */}
      <Grid
        item
        style={{
          width: "100%",
        }}
      >
        {/* START SUBTITLE */}
        <div className={StyleSheet.subTitle}>
          <div className={StyleSheet.subTitleInput}>
            <input type="search" placeholder="Search by name ,phone ....." />
            <GridSearchIcon className={StyleSheet.subTitleIcon} />
          </div>
          <Box className={StyleSheet.right}>
            <Box className={StyleSheet.addContainer}>
              <button
                className={StyleSheet.addBtn}
                onClick={handleShowAddList}
                style={{
                  borderRadius: showAddList ? "8px 8px 0px 0px" : "8px",
                }}
              >
                Add New Leads
              </button>
              {showAddList && (
                <ul className={StyleSheet.addList} onClick={handleShowAddList}>
                  <Link href="/crm/leads/addNewLeads">
                    <li>
                      <IoIosAdd fontSize={20} />
                      <button>Add New Lead</button>
                    </li>
                  </Link>
                  <li onClick={handleShowImportedLeads}>
                    <MdOutlineFileUpload />
                    <button>Import CSV</button>
                  </li>
                </ul>
              )}
            </Box>
          </Box>
        </div>
        {/* END SUBTITLE */}
      </Grid>
      {/** START TWO TOGGLE BUTTON */}
      <Grid className={StyleSheet.ToggleAndFilter}>
        <Grid item className={StyleSheet.ToggleButton}>
          <button
            style={{
              color: viewType === "List" ? "#1DB2FF" : "black",
              background: viewType === "List" ? "#E8F7FF" : "#fff",
            }}
            className={StyleSheet.btn}
            onClick={() => setViewType("List")}
          >
            List
          </button>
          <button
            style={{
              color: viewType === "Kanban" ? "#1DB2FF" : "black",
              background: viewType === "Kanban" ? "#E8F7FF" : "#fff",
            }}
            className={StyleSheet.btn}
            onClick={() => setViewType("Kanban")}
          >
            Kanban
          </button>
        </Grid>
        {/** END TWO TOGGLE BUTTON */}
        {/** START FILTER SECTION*/}
        <button
          item
          className={StyleSheet.filterBtn}
          onClick={handleShowFilter}
        >
          <TbFilter color="#1db2ff" fontSize={30} />
          <span className={StyleSheet.text}>Filter</span>
        </button>

        {/** END FILTER SECTION*/}
      </Grid>
      {/*START ADD LEADS AS KANBAN COMPONENTS */}
      {viewType === "Kanban" && <KanbanPage data={leadSourceData} />}
      {/*END ADD LEADS AS  KANBAN COMPONENTS */}
      {/*START ADD LEADS AS LIST COMPONENTS */}
      {viewType === "List" && <ListLeads />}
      {/*END ADD LEADS AS LIST COMPONENTS */}
    </Grid>
  );
};

export default Leads;
