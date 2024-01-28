import React, { useState } from "react";
import StyleSheet from "./filter.module.css";
import { MdClose } from "react-icons/md";
import CustomSelect from "src/@core/components/custom-select";
import FilterSelect from "src/@core/components/selectFilter";
import { array } from "yup";
import { leadsSourceData } from "src/fileData/cmsLeadsData";
//** fake assign to data item */
const assignToData = [
  { id: 1, name: "Select assistant", value: "" },
  { id: 2, name: "Mohamed Eslam", value: "Mohamed Eslam" },
  { id: 3, name: "Ahmed Elbakly", value: "Ahmed Elbakly" },
  { id: 4, name: "Omar Ahmed", value: "Omar Ahmed" },
  { id: 5, name: "Sayed Ezzat", value: "Sayed Ezzat" },
  { id: 6, name: "Mohamed Ezzat", value: "Mohamed Ezzat" },
  { id: 7, name: "Hossam Ezzat", value: "Hossam Ezzat" },
  { id: 8, name: "Ahmed Ezzat", value: "Ahmed Ezzat" },
];
//**status item */
const statusData = [
  { id: 11, name: "New Lead", value: "New Lead" },
  { id: 1, name: "Invalid Lead", value: "Invalid Lead" },
  { id: 2, name: "Closed - Not Converted", value: "Closed - Not Converted" },
  { id: 3, name: "Offer Submitted", value: "Offer Submitted" },
  { id: 4, name: "Duplicate Lead", value: "Duplicate leads" },
  { id: 5, name: "Negotiation Stage", value: "Negotiation Stage" },
  { id: 6, name: "Appointment Scheduled", value: "Appointment Scheduled" },
  { id: 7, name: "Contacted", value: "Contacted" },
  { id: 8, name: "Closed - Converted", value: "Closed - Converted" },
  { id: 9, name: "Contract Signed", value: "Contract Signed" },
  { id: 10, name: "Contract Pending", value: "Contract Pending" },
  { id: 11, name: "Not Converted", value: "Not Converted" },

  { id: 11, name: "Lost Lead", value: "Lost Lead" },
];
const Filter = ({ handleShowFilter }) => {
  const [filterData, setFilterData] = useState({
    leadSource: "",
    leadStatus: "",
    createdAt: "",
    assignTo: "",
  });
  //** HANDLE CHANGE IN FILTER SELECT */
  const handleChangeFilterSelect = (selectedValue, selectName) => {
    setFilterData((prevData) => ({
      ...prevData,
      [selectName]: selectedValue,
    }));
  };

  //**HANDLE REST FILTER STATE */
  //** HANDLE RESET FILTER STATE */
  const handleResetFilterState = () => {
    setFilterData({
      leadSource: "",
      leadStatus: "",
      createdAt: "",
      assignTo: "",
    });
  };
  //** HANDLE API LEADS FILTER   */
  const filterApiLeads = async () => {
    // const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    // const data = await res.json();
    // if (data) {
    //   console.log(data);
    // }
    console.log(filterData);
  };

  return (
    <div className={StyleSheet.FilterContainer}>
      <div className={StyleSheet.filter}>
        {/*Start title and close button*/}
        <div className={StyleSheet.filterTitle}>
          <h5>Filter</h5>
          <MdClose fontSize={25} onClick={handleShowFilter} />
        </div>

        {/*End title and Start close button*/}
        <FilterSelect
          label={"leadSource"}
          array={leadsSourceData}
          fun={handleChangeFilterSelect}
          state={filterData.leadSource}
          selectName={"leadSource"}
        />
        <FilterSelect
          label={"Status"}
          array={statusData}
          fun={handleChangeFilterSelect}
          state={filterData.leadStatus}
          selectName={"leadStatus"}
        />
        <FilterSelect
          label={"Assign To"}
          array={assignToData}
          fun={handleChangeFilterSelect}
          state={filterData.assignTo}
          selectName={"assignTo"}
        />
        <div className={StyleSheet.restAndSubmit}>
          <button
            onClick={() => {
              handleResetFilterState();
            }}
            className={StyleSheet.restBtn}
          >
            Rest All
          </button>
          <button
            onClick={() => {
              filterApiLeads();
              handleShowFilter();
            }}
            className={StyleSheet.submitBtn}
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
