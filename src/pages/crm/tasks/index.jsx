import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useAuth } from "src/hooks/useAuth";
import StyleSheet from "./style.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { TbFilter } from "react-icons/tb";
import Link from "next/link";
import Filter from "./components/filter/filter";
import { useData } from "src/hooks/useData";
import axios from "axios";
import EnhancedTable from "./components/table";
import EmptyData from "src/@core/components/EmptyData/EmptyData";

const Tasks = () => {
  const [overLaySuccess, setOverLaySuccess] = useState(false);
  const [overLayConfirmOne, setOverLayConfirmOne] = useState(false);
  const [showAddList, setShowAddList] = useState(false);
  const [showImportedLeads, setShowImportedLeads] = useState(false);
  const [leadSourceValue, setLeadSourceValue] = useState("");
  //** state handle show filter */
  const [showFilter, setShowFilter] = useState(false);
  const { tasks, setTasks } = useData();
  //** method to handle show filter */
  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  };
  //**////////////////////////////////////////////////////////// */
  // useAuth context
  const { setPages,user } = useAuth();
  console.log("#################", user);

  setPages("CRM Tasks");
  // useData context

  ;
  useEffect(() => {
    axios
      .get("http://195.35.2.218:5000/api/tasks")
      .then((res) => {
        console.log(res.data?.filter((task) => task?.adminId == user?.id));
        setTasks(res.data?.filter((task) => task?.adminId == user?.id));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user?.id, setTasks]);
  ;
  console.log("#################", tasks);
  const handleDeleteItem = (itemId, setConfirm, setSuccess) => {
    axios
      .delete(`http://195.35.2.218:5000/api/task/${itemId}`)
      .then(({ data }) => {
        const { payload, message } = data;
        if (message === "successfully") {
          setTasks(payload?.filter((item) => item?.adminId === (user?.id).toString()));
          setConfirm(false);
          setSuccess(true);
        }
      });
  };

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
      {/**start data table when tasks grater than 0 show the table otherwise show emptyData */}

      {tasks.length > 0 ? (
        <Grid item className={StyleSheet.TasksData}>
          <EnhancedTable
            rows={tasks}
            setTasks={setTasks}
            handleDeleteItem={handleDeleteItem}
          />
        </Grid>
      ) : (
        <Grid item className={StyleSheet.TasksData}>
          <EmptyData message="No.tasks found, please add new task from add button" />
        </Grid>
      )}
    </Grid>
  );
};

export default Tasks;
