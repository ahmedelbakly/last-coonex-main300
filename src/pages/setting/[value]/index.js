import React from "react";
import Grid from "@mui/material/Grid";
import StyleSheet from "./style.module.css";
import { useState } from "react";
import { mainList, rightIcon } from "../../../fileData/settingData";
import { useAuth } from "src/hooks/useAuth";
import { FaChevronRight } from "react-icons/fa6";
import { useRouter } from "next/router";
import Roles from "../components/roles";
import {
  rolesRows,
  rolesHeadCells,
} from "../../../fileData/setting_data/roles_data";
import Teams from "../components/teams";
import { useEffect } from "react";

const Settings = () => {
  const router = useRouter();
  const { value } = router.query;
  const [page, setPage] = useState(value);
  const auth = useAuth();
  const { setProperty, property, setPages } = auth;
  setPages("Settings");
  useEffect(() => {
    if (value) {
      setPage(value);
    }
  }, [value]);
  console.log("====================================", mainList);

  //** handle change route** */
  const handleChangeRoute = (value) => {
    router.push(`/setting/${value}`);
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
        alignItems: "flex-start",
        paddingTop: "20px",
      }}
    >
      <Grid
        item
        sx={{
          flex: "2 !important",
          display: "flex",
          minWidth: "200px",
          justifyContent: "flex-start",
          flexDirection: "column",
          gap: "30px",
          flexWrap: "wrap",
          minHeight: "min-content",
          borderRight: "solid 1px #E2E2E2",
          padding: "20px 20px",
          border: "1px solid #E2E2E2",
          borderRadius: "10px",
        }}
      >
        {mainList.map((item, index) => (
          <div
            key={index}
            className={item.children ? StyleSheet.itemParent : " notParent"}
          >
            <div
              key={index}
              className={
                page === item.stateValue
                  ? StyleSheet.itemSelected
                  : StyleSheet.item
              }
              onClick={() => handleChangeRoute(item.stateValue)}
            >
              <h5>{item.name}</h5>
              {item.children && <FaChevronRight />}
            </div>

            {/*item.children && value === item.stateValue && (
              <ul className={StyleSheet.subitemContainer}>
                {" "}
                {item.children.map((child, index) => (
                  <li
                    key={index}
                    item
                    className={StyleSheet.subitem}
                    onClick={() => {
                      setProperty(item.stateValue);
                      router.push("/setting/" + child.stateValue);
                    }}
                  >
                    {child.name}
                  </li>
                ))}
              </ul>
                  )*/}
          </div>
        ))}
      </Grid>
      <Grid
        item
        sx={{
          flex: "7 !important",
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "wrap",
          flexDirection: "column",
        }}
      >
        {page === "roles" && (
          <Roles rows={rolesRows} headCells={rolesHeadCells} />
        )}
        {page === "team" && (
          <Teams rows={rolesRows} headCells={rolesHeadCells} />
        )}
      </Grid>
    </Grid>
  );
};

export default Settings;
