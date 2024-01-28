import React from "react";
import StyleSheet from "./style.module.css";
import { InputLayout } from "src/properties/shared-components/input-layout";
import Switch from "@mui/material/Switch";

const AddNewRole = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <div className={StyleSheet.newRoleContainer}>
      <InputLayout>
        <label>title</label>
        <input
          type="text"
          name="title"
          value={""}
          placeholder="e.g. 2000 Sqft House"
          onChange={() => console.log("new")}
        />
      </InputLayout>

      <div className={StyleSheet.cmsPermission}>
        <div className={StyleSheet.header}>
          <h5 className={StyleSheet.text}> CMS Permissions</h5>
          <Switch />
        </div>
        <div className={StyleSheet.content}>
          <div className={StyleSheet.check}>
            <label className={StyleSheet.label}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </label>
            <input
              type="checkbox"
              name="title"
              value={""}
              onChange={() => console.log("new")}
            />
          </div>
          <div className={StyleSheet.check}>
            <label className={StyleSheet.label}>Don't show projects</label>
            <input
              type="checkbox"
              name="title"
              value={""}
              onChange={() => console.log("new")}
            />
          </div>
          <div className={StyleSheet.multiCheck}>
            <label className={StyleSheet.mainLabel}>
              Can manage team member's leaves?
            </label>
            <div className={StyleSheet.checks}>
              <div className={StyleSheet.multiCheckItem}>
                <input
                  type="checkbox"
                  name="title"
                  value={""}
                  onChange={() => console.log("new")}
                />
                <label className={StyleSheet.label}>No</label>
              </div>
              <div className={StyleSheet.multiCheckItem}>
                <input
                  type="checkbox"
                  name="title"
                  value={""}
                  onChange={() => console.log("new")}
                />
                <label className={StyleSheet.label}>Yes, all members</label>
              </div>
              <div className={StyleSheet.multiCheckItem}>
                <input
                  type="checkbox"
                  name="title"
                  value={""}
                  onChange={() => console.log("new")}
                />
                <label className={StyleSheet.label}>
                  Yes, specific members or teams (Excluding his/her own leaves)
                </label>
              </div>
            </div>
          </div>
          <div className={StyleSheet.multiCheck}>
            <label className={StyleSheet.mainLabel}>
              Can manage team member's leaves?
            </label>
            <div className={StyleSheet.checks}>
              <div className={StyleSheet.multiCheckItem}>
                <input
                  type="checkbox"
                  name="title"
                  value={""}
                  onChange={() => console.log("new")}
                />
                <label className={StyleSheet.label}>No</label>
              </div>
              <div className={StyleSheet.multiCheckItem}>
                <input
                  type="checkbox"
                  name="title"
                  value={""}
                  onChange={() => console.log("new")}
                />
                <label className={StyleSheet.label}>Yes, all members</label>
              </div>
              <div className={StyleSheet.multiCheckItem}>
                <input
                  type="checkbox"
                  name="title"
                  value={""}
                  onChange={() => console.log("new")}
                />
                <label className={StyleSheet.label}>
                  Yes, specific members or teams (Excluding his/her own leaves)
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={StyleSheet.nextAndPrev}>
        <button>Cancel</button>
        <button onClick={() => setPage("propertyLocation")}>Save</button>
      </div>
    </div>
  );
};

export default AddNewRole;
