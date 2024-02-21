import React from "react";
import StyleSheet from "./style.module.css";
import { InputLayout } from "src/properties/shared-components/input-layout";
import Switch from "@mui/material/Switch";
import { useState } from "react";
import { SuccessOverlay } from "src/@core/components/overlays";
import CustomSelect from "src/@core/components/custom-select";
import { useRouter } from "next/router";
import { rolesRows } from "src/fileData/setting_data/roles_data";
import { useEffect } from "react";



//** const fake array for select data  */
const selectData = [
  {
    id: 1,
    name: "Mohamed Eslam",
    value: "Mohamed Eslam",
  },
  {
    id: 2,
    name: "Ahmed Elbakly",
    value: "Ahmed Elbakly",
  },
  {
    id: 3,
    name: "Omar Ahmed",
    value: "Omar Ahmed",
  },
  {
    id: 4,
    name: "Sayed Ezzat",
    value: "Sayed Ezzat",
  },
];
const AddNewRole = () => {
   //** access params value from url */



  const [showGeneralPermission, setShowGeneralPermission] = useState(false);
  const [showWebsitePermission, setShowWebsitePermission] = useState(false);
  const [showAccessPermission, setShowAccessPermission] = useState(false);
  const [showSuccessLay, setShowSuccessLay] = useState(false);
  const [product, setProduct] = useState(null);
  const router  = useRouter();
  const { value, roleId } = router.query;
  console.log("value" , roleId);

  //** handle show  permission data  section*/
  // Add your code here to handle showing permission data section
  const handleShowPermissionData = (state, setState) => {
    setState(!state);
  };

  //** handle show success overlay */
  const handleSuccessOverlay = () => {
    setShowSuccessLay(!showSuccessLay);
  };

  const label = {
    inputProps: { "aria-label": "controlled", size: "small", color: "red" },
  };

  //** state for  new role data */
  const [newRoleData, setNewRoleData] = useState({
    title: "",
    manageTeam: false,
    member: "",
    inviteNewMembers: false,
    activateTeam: false,
    HideMList: false,
    editWebsite: false,
    accessLeadPage: false,
    editLeadsPage: false,
    accessToAdvertising: false,
    createTask: false,
    editTask: false,
    commentTask: false,
    calenderSharing: false,
  });

  console.log(newRoleData);
  //** handle change radio button value */

  //** handle radio to options yes or no */
  const handleRadioChangeFalse = (event) => {
    const { name } = event.target;
    setNewRoleData((prevValue) => ({
      ...prevValue,
      [name]: false,
    }));
  };
  const handleRadioChangeTrue = (event) => {
    const { name } = event.target;
    setNewRoleData((prevValue) => ({
      ...prevValue,
      [name]: true,
    }));
  };
  //** handle radio three options*/
  const handleRadioMangeTeam = (event) => {
    const { name, value } = event.target;
    setNewRoleData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  //* handle set after NewRolData properties is array  values to false */
  const handleSetFalse = (properties) => {
    properties.forEach((property) => {
      setNewRoleData((prevValue) => ({
        ...prevValue,
        [property]: false,
      }));
    });
  };

  //** handle change custom select value in new role data */
  const handleCustomSelect = (selectedValue, selectName) => {
    setNewRoleData((prev) => ({
      ...prev,
      [selectName]: selectedValue,
    }));
  };
  useEffect(() => {
    if(roleId) {
      setProduct(rolesRows.find((item) => item.id == roleId))
      alert("roleId=>" + roleId)
    }
    }, [roleId])

    console.log("====================================",product);

  /** handle submit form and add new role in the database */
  return (
    <div className={StyleSheet.newRoleContainer}>
      {/* START Success Overlay SECTION */}
      {showSuccessLay && (
        <SuccessOverlay
          setState={setShowSuccessLay}
          message={"Role added successfully"}
          route={"/setting"}
        />
      )}
      {/* START Success Overlay SECTION */}
      {/* START TITLE SECTION */}

      <InputLayout>
        <label>title</label>
        <input
          type="text"
          name="title"
          value={newRoleData.title}
          placeholder="e.g. 2000 Sqft House"
          onChange={handleRadioMangeTeam}
        />
      </InputLayout>
      {/* end TITLE SECTION */}
      {/* Start General Permissions */}
      <div className={StyleSheet.section}>
        <div className={StyleSheet.header}>
          <h5 className={StyleSheet.text}> General Permissions</h5>
          <Switch
            onChange={() =>
              handleShowPermissionData(
                showGeneralPermission,
                setShowGeneralPermission
              )
            }
            checked={showGeneralPermission}
            {...label}
          />
        </div>
        <div
          className={
            showGeneralPermission ? StyleSheet.permissionData : StyleSheet.hide
          }
        >
          <div className={StyleSheet.multiCheck}>
            <label className={StyleSheet.mainLabel}>
              Manage team member Leads and Data?
            </label>
            <div className={StyleSheet.checks}>
              <div className={StyleSheet.multiCheckItem}>
                <input
                  type="radio"
                  name="manageTeam"
                  value={"all"}
                  onChange={handleRadioMangeTeam}
                />
                <label className={StyleSheet.label}>Yes, all members</label>
              </div>
              <div className={StyleSheet.multiCheckItem}>
                <input
                  type="radio"
                  name="manageTeam"
                  value={"specific"}
                  onChange={handleRadioMangeTeam}
                />
                <label className={StyleSheet.label}>
                  Yes, specific members or teams
                </label>
              </div>
              <div className={StyleSheet.multiCheckItem}>
                <input
                  type="radio"
                  name="manageTeam"
                  value={"no"}
                  onChange={handleRadioMangeTeam}
                />
                <label className={StyleSheet.label}>No</label>
              </div>
            </div>
          </div>

          {/* Start custom select*/}
          {newRoleData.manageTeam === "specific" && (
            <CustomSelect
              state={newRoleData.member}
              label={"Member"}
              selectName={"member"}
              array={selectData}
              fun={handleCustomSelect}
            />
          )}
          {/* emd custom select*/}
          {/* Start multi check row */}
          <div className={StyleSheet.multiCheckRow}>
            <label className={StyleSheet.mainLabel}>
              Can Add/Invite New Team Members ?
            </label>
            <div className={StyleSheet.checks}>
              <div className={StyleSheet.multiCheckItem}>
                <input
                  type="radio"
                  name="inviteNewMembers"
                  value={""}
                  onChange={handleRadioChangeTrue}
                />
                <label className={StyleSheet.label}>Yes</label>
              </div>
              <div className={StyleSheet.multiCheckItem}>
                <input
                  type="radio"
                  name="inviteNewMembers"
                  value={""}
                  onChange={handleRadioChangeFalse}
                />
                <label className={StyleSheet.label}>No</label>
              </div>
            </div>
          </div>
          {/*   End multi check row */}
          {/* Start multi check row */}
          <div className={StyleSheet.multiCheckRow}>
            <label className={StyleSheet.mainLabel}>
              Can Activate/Deactivate Team Members?
            </label>
            <div className={StyleSheet.checks}>
              <div className={StyleSheet.multiCheckItem}>
                <input
                  type="radio"
                  name="activateTeam"
                  value={""}
                  onChange={handleRadioChangeTrue}
                />
                <label className={StyleSheet.label}>Yes</label>
              </div>
              <div className={StyleSheet.multiCheckItem}>
                <input
                  type="radio"
                  name="activateTeam"
                  value={""}
                  onChange={handleRadioChangeFalse}
                />
                <label className={StyleSheet.label}>No</label>
              </div>
            </div>
          </div>
          {/*   End multi check row */}
          {/* start multi check row */}
          <div className={StyleSheet.multiCheckRow}>
            <label className={StyleSheet.mainLabel}>
              Hide Team Members List?
            </label>
            <div className={StyleSheet.checks}>
              <div className={StyleSheet.multiCheckItem}>
                <input
                  type="radio"
                  name="HideMList"
                  value={""}
                  onChange={handleRadioChangeTrue}
                />
                <label className={StyleSheet.label}>Yes</label>
              </div>
              <div className={StyleSheet.multiCheckItem}>
                <input
                  type="radio"
                  name="HideMList"
                  value={""}
                  onChange={handleRadioChangeFalse}
                />
                <label className={StyleSheet.label}>No</label>
              </div>
            </div>
          </div>
          {/*   End multi check row */}
        </div>
      </div>
      {/* End General Permissions */}

      {/* Start Website Permissions */}
      <div className={StyleSheet.section}>
        <div className={StyleSheet.header}>
          <h5 className={StyleSheet.text}> Website Permissions</h5>
          <Switch
            onChange={() =>
              handleShowPermissionData(
                showWebsitePermission,
                setShowWebsitePermission
              )
            }
            checked={showWebsitePermission}
            {...label}
          />
        </div>
        <div
          className={
            showWebsitePermission ? StyleSheet.permissionData : StyleSheet.hide
          }
        >
          {/* start multi check row */}
          <div className={StyleSheet.multiCheckRow}>
            <label className={StyleSheet.mainLabel}>Edit Website?</label>
            <div className={StyleSheet.checks}>
              <div className={StyleSheet.multiCheckItem}>
                <input
                  type="radio"
                  name="editWebsite"
                  value={true}
                  onChange={handleRadioChangeTrue}
                  id="editWebsite"
                />
                <label htmlFor="editWebsite" className={StyleSheet.label}>
                  Yes
                </label>
              </div>
              <div className={StyleSheet.multiCheckItem}>
                <input
                  type="radio"
                  name="editWebsite"
                  value={false}
                  onChange={(e) => {
                    handleRadioChangeFalse(e);
                    handleSetFalse(["accessLeadPage", "editLeadsPage"]);
                  }}
                  id="editWebsite"
                />
                <label htmlFor="editWebsite" className={StyleSheet.label}>
                  No
                </label>
              </div>
            </div>
          </div>
          {/*   End multi check row */}
          {/* start multi check row */}
          {newRoleData.editWebsite && (
            <div className={StyleSheet.multiCheckRow}>
              <label className={StyleSheet.mainLabel}>Access Lead Page?</label>
              <div className={StyleSheet.checks}>
                <div className={StyleSheet.multiCheckItem}>
                  <input
                    type="radio"
                    name="accessLeadPage"
                    value={true}
                    onChange={handleRadioChangeTrue}
                    id="accessLeadPage"
                  />
                  <label htmlFor="accessLeadPage" className={StyleSheet.label}>
                    Yes
                  </label>
                </div>
                <div className={StyleSheet.multiCheckItem}>
                  <input
                    type="radio"
                    name="accessLeadPage"
                    value={false}
                    onChange={(e) => {
                      handleRadioChangeFalse(e);
                      handleSetFalse(["editLeadsPage"]);
                    }}
                    id="accessLeadPage"
                  />
                  <label htmlFor="accessLeadPage" className={StyleSheet.label}>
                    No
                  </label>
                </div>
              </div>
            </div>
          )}
          {/*   End multi check row */}
          {/* start multi check row */}
          {newRoleData.editWebsite && newRoleData.accessLeadPage && (
            <div className={StyleSheet.multiCheckRow}>
              <label className={StyleSheet.mainLabel}>Edit Leads Page?</label>
              <div className={StyleSheet.checks}>
                <div className={StyleSheet.multiCheckItem}>
                  <input
                    type="radio"
                    name="editLeadsPage"
                    value={true}
                    onChange={handleRadioChangeTrue}
                    id="editLeadsPage"
                  />
                  <label htmlFor="editLeadsPage" className={StyleSheet.label}>
                    Yes
                  </label>
                </div>
                <div className={StyleSheet.multiCheckItem}>
                  <input
                    type="radio"
                    name="editLeadsPage"
                    value={false}
                    onChange={(e) => {
                      handleRadioChangeFalse(e);
                      handleSetFalse(["accessToAdvertising"]);
                    }}
                    id="editLeadsPage"
                  />
                  <label htmlFor="editLeadsPage" className={StyleSheet.label}>
                    No
                  </label>
                </div>
              </div>
            </div>
          )}
          {/*   End multi check row */}
          {/* start multi check row */}
          {newRoleData.editWebsite &&
            newRoleData.accessLeadPage &&
            newRoleData.editLeadsPage && (
              <div className={StyleSheet.multiCheckRow}>
                <label className={StyleSheet.mainLabel}>
                  Access to Advertising?
                </label>
                <div className={StyleSheet.checks}>
                  <div className={StyleSheet.multiCheckItem}>
                    <input
                      type="radio"
                      name="accessToAdvertising"
                      value={true}
                      onChange={handleRadioChangeTrue}
                      id="accessToAdvertising"
                    />
                    <label
                      htmlFor="accessToAdvertising"
                      className={StyleSheet.label}
                    >
                      Yes
                    </label>
                  </div>
                  <div className={StyleSheet.multiCheckItem}>
                    <input
                      type="radio"
                      name="accessToAdvertising"
                      value={false}
                      onChange={(e) => {
                        handleRadioChangeFalse(e);
                        handleSetFalse([]);
                      }}
                      id="accessToAdvertising"
                    />
                    <label
                      htmlFor="accessToAdvertising"
                      className={StyleSheet.label}
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
            )}
          {/*   End multi check row */}
        </div>
      </div>
      {/* End Website Permissions */}
      {/* Start Access Permissions */}
      <div className={StyleSheet.section}>
        <div className={StyleSheet.header}>
          <h5 className={StyleSheet.text}> Access Permissions</h5>
          <Switch
            onChange={() =>
              handleShowPermissionData(
                showAccessPermission,
                setShowAccessPermission
              )
            }
            checked={showAccessPermission}
            {...label}
          />
        </div>
        <div
          className={
            showAccessPermission ? StyleSheet.permissionData : StyleSheet.hide
          }
        >
          {/* start multi check row */}
          <div className={StyleSheet.multiCheckRow}>
            <label className={StyleSheet.mainLabel}>Can create tasks?</label>
            <div className={StyleSheet.checks}>
              <div className={StyleSheet.multiCheckItem}>
                <input
                  type="radio"
                  name="createTask"
                  value={""}
                  onChange={handleRadioChangeTrue}
                />
                <label className={StyleSheet.label}>Yes</label>
              </div>
              <div className={StyleSheet.multiCheckItem}>
                <input
                  type="radio"
                  name="createTask"
                  value={""}
                  onChange={(e) => {
                    handleRadioChangeFalse(e);
                    handleSetFalse([
                      "editTask",
                      "commentTask",
                      "calenderSharing",
                    ]);
                  }}
                />
                <label className={StyleSheet.label}>No</label>
              </div>
            </div>
          </div>
          {/*   End multi check row */}
          {/* start multi check row */}

          {newRoleData.createTask && (
            <div className={StyleSheet.multiCheckRow}>
              <label className={StyleSheet.mainLabel}>Can edit tasks?</label>
              <div className={StyleSheet.checks}>
                <div className={StyleSheet.multiCheckItem}>
                  <input
                    type="radio"
                    name="editTask"
                    value={""}
                    onChange={handleRadioChangeTrue}
                  />
                  <label className={StyleSheet.label}>Yes</label>
                </div>
                <div className={StyleSheet.multiCheckItem}>
                  <input
                    type="radio"
                    name="editTask"
                    value={""}
                    onChange={(e) => {
                      handleRadioChangeFalse(e);
                      handleSetFalse(["commentTask", "calenderSharing"]);
                    }}
                  />
                  <label className={StyleSheet.label}>No</label>
                </div>
              </div>
            </div>
          )}

          {/*   End multi check row */}
          {/* start multi check row */}

          {newRoleData.createTask && newRoleData.editTask && (
            <div className={StyleSheet.multiCheckRow}>
              <label className={StyleSheet.mainLabel}>
                Can comment on tasks?
              </label>
              <div className={StyleSheet.checks}>
                <div className={StyleSheet.multiCheckItem}>
                  <input
                    type="radio"
                    name="commentTask"
                    value={""}
                    onChange={handleRadioChangeTrue}
                  />
                  <label className={StyleSheet.label}>Yes</label>
                </div>
                <div className={StyleSheet.multiCheckItem}>
                  <input
                    type="radio"
                    name="commentTask"
                    value={""}
                    onChange={(e) => {
                      handleRadioChangeFalse(e);
                      handleSetFalse(["calenderSharing"]);
                    }}
                  />
                  <label className={StyleSheet.label}>No</label>
                </div>
              </div>
            </div>
          )}

          {/*   End multi check row */}
          {/* start multi check row */}
          {newRoleData.createTask &&
            newRoleData.editTask &&
            newRoleData.commentTask && (
              <div className={StyleSheet.multiCheckRow}>
                <label className={StyleSheet.mainLabel}>
                  Disable Calnder sharing?
                </label>
                <div className={StyleSheet.checks}>
                  <div className={StyleSheet.multiCheckItem}>
                    <input
                      type="radio"
                      name="calenderSharing"
                      value={""}
                      onChange={handleRadioChangeTrue}
                    />
                    <label className={StyleSheet.label}>Yes</label>
                  </div>
                  <div className={StyleSheet.multiCheckItem}>
                    <input
                      type="radio"
                      name="calenderSharing"
                      value={""}
                      onChange={(e) => {
                        handleRadioChangeFalse(e);
                        handleSetFalse([]);
                      }}
                    />
                    <label className={StyleSheet.label}>No</label>
                  </div>
                </div>
              </div>
            )}

          {/*   End multi check row */}
        </div>
      </div>
      {/* End access Permissions */}
      <div className={StyleSheet.nextAndPrev}>
        <button>Cancel</button>
        <button onClick={handleSuccessOverlay}>Save</button>
      </div>
    </div>
  );
};

export default AddNewRole;

/*

 1-editWebsite


2-{1  && (
div 2
) }
3-{(1 && 2) && (
div
) }
4-{(1 && 2 && 3) && (
div
) }










*/
