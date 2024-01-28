import { Box, Grid } from "@mui/material";
import React from "react";
import { useAuth } from "src/hooks/useAuth";
import StyleSheet from "./style.module.css";
import SearchIcon from "@mui/icons-material/Search";

import { IoIosAdd } from "react-icons/io";
import { MdOutlineFileUpload } from "react-icons/md";
import { useState } from "react";
import { Filter1Outlined } from "@mui/icons-material";
import { TbFilter } from "react-icons/tb";
import TasksTable from "./components/table";
import Link from "next/link";
import Filter from "./components/filter/filter";

const Tasks = () => {
  const [overLaySuccess, setOverLaySuccess] = useState(false);
  const [overLayConfirmOne, setOverLayConfirmOne] = useState(false);
  const [showAddList, setShowAddList] = useState(false);
  const [showImportedLeads, setShowImportedLeads] = useState(false);
  const [leadSourceValue, setLeadSourceValue] = useState("");
  //** state handle show filter */
  const [showFilter, setShowFilter] = useState(false);
  //** method to handle show filter */
  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  };
  //**////////////////////////////////////////////////////////// */

  const { setPages } = useAuth();
  setPages("CRM Tasks");

  return (
    <Grid container className={StyleSheet.container}>
      {/**start filter */}
      {showFilter && <Filter handleShowFilter={handleShowFilter} />}
      {/**end filter */}
      <Grid item className={StyleSheet.searchAndAdd}>
        <div className={StyleSheet.subTitle}>
          <div className={StyleSheet.subTitleInput}>
            <SearchIcon className={StyleSheet.subTitleIcon} />
            <input type="search" placeholder="search here" />
          </div>
          <Box className={StyleSheet.right}>
            <div className={StyleSheet.filter} onClick={handleShowFilter}>
              <TbFilter fontSize={25} />
              <span className={StyleSheet.filterText}>filter</span>
            </div>
            <Box className={StyleSheet.addContainer}>
              <Link href={"/crm/tasks/addNewTask"}>
                <button
                  className={StyleSheet.addBtn}
                  style={{
                    borderRadius: "8px",
                  }}
                >
                  Add New Tasks
                </button>
              </Link>
            </Box>
          </Box>
        </div>
      </Grid>
      <Grid item className={StyleSheet.TasksData}>
        <TasksTable />
      </Grid>
    </Grid>
  );
};

export default Tasks;
