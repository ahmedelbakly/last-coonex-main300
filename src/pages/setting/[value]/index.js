import React from "react";
import Grid from "@mui/material/Grid";
import StyleSheet from "./style.module.css";
import { useState } from "react";
import { mainList, rightIcon } from "../../../fileData/settingData";
import { useAuth } from "src/hooks/useAuth";
import { FaChevronRight } from "react-icons/fa6";
import { ConfirmOverlay, SuccessOverlay } from "src/@core/components/overlays";
import { useRouter } from "next/router";
import Roles from "../components/roles";

const Settings = () => {
  const router = useRouter();
  const { value } = router.query;

  const [page, setPage] = useState("adminRole");

  const auth = useAuth();
  const { setProperty, property, setPages } = auth;
  setPages("Settings");

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
          padding: "20px 0px",
          border: "1px solid #E2E2E2",
          borderRadius: "10px",
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
            <h5>{item.name}</h5>
            {item.children && <FaChevronRight />}
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
        {value === "roles" && <Roles />}
      </Grid>
    </Grid>
  );
};

export default Settings;
