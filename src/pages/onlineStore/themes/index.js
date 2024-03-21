import React from "react";
import Grid from "@mui/material/Grid";
import MediaCard from "src/@core/components/themesCard";
import themeTwoImage from "../../../../public/images/cms/themeTwoImage.png";
import styles from "./style.module.css";
import Image from "next/image";
import { useAuth } from "src/hooks/useAuth";
import { useState } from "react";
import Link from "next/link";
import { themesData } from "src/fileData/themes_data";
import axios from "axios";

const StoreThemes = () => {
  const { user, setPages } = useAuth();
  setPages("Themes");
  const { email } = user;

  //** start handle select theme */
  const [theme, setTheme] = useState("one");
  const handleSelectTheme = (themeNumber) => {
    setTheme(themeNumber);
  };

  //** start handle select theme */

  const api = "http://195.35.2.218/build/checkuser";
  //** start handle send user date to backend and customize theme  */
  const handleCustomizeTheme = () => {
    axios
      .post(api, user)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //** end handle send user date to backend and customize theme  */

  return (
    <div style={{ width: "100%", padding: "0px 0px" }}>
      <Grid
        container-full
        className={styles.container}
        spacing={12}
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          flexDirection: "column",
          gap: "20px",
          flexWrap: "wrap",
        }}
        my={8}
      >
        <Grid
          className={styles.speed}
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <p>Site Speed</p>
          <div className="activate">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
            >
              <path
                d="M5.34688 2.14356C5.34688 1.60061 5.34199 1.09539 5.34827 0.59087C5.35247 0.262443 5.54813 0.0311471 5.82765 0.00319597C6.16727 -0.0303454 6.42653 0.203047 6.43142 0.565713C6.4384 1.07932 6.43281 1.59222 6.43281 2.12469H16.0665C16.0665 1.6055 16.0623 1.08561 16.0679 0.566412C16.0714 0.233793 16.2887 0.00808742 16.5927 0.00179841C16.919 -0.00449061 17.1461 0.225408 17.151 0.590171C17.1587 1.09469 17.1531 1.59991 17.1531 2.14356C17.2607 2.14356 17.3523 2.14356 17.4445 2.14356C18.1419 2.14356 18.8393 2.13727 19.5367 2.14635C21.1775 2.16871 22.4913 3.47403 22.4941 5.11407C22.5024 9.93495 22.5017 14.7558 22.4941 19.5767C22.492 21.1406 21.1538 22.4906 19.5919 22.4934C14.0309 22.5025 8.46912 22.5025 2.90806 22.4934C1.35812 22.4906 0.0108314 21.1483 0.00733741 19.6026C-0.0024458 14.7467 -0.0024458 9.89093 0.00733741 5.03511C0.0101326 3.49989 1.34973 2.17221 2.8843 2.14775C3.59918 2.13657 4.31405 2.14356 5.02892 2.14286C5.12326 2.14286 5.2176 2.14286 5.34758 2.14286L5.34688 2.14356ZM1.08209 7.51857C1.08209 7.6178 1.08209 7.70235 1.08209 7.7876C1.08209 11.6498 1.09677 15.5119 1.07371 19.3734C1.06672 20.5606 1.98844 21.4299 3.12469 21.4257C8.5376 21.4047 13.9512 21.4166 19.3648 21.4145C19.5465 21.4145 19.7317 21.4061 19.9099 21.3719C20.6506 21.2279 21.4305 20.5229 21.4249 19.3587C21.4067 15.5056 21.4179 11.6519 21.4172 7.79878C21.4172 7.70724 21.4074 7.6157 21.4018 7.51927H1.08209V7.51857ZM21.4109 6.41799C21.4109 5.93723 21.4151 5.48512 21.4095 5.03301C21.4046 4.64589 21.267 4.30139 21.035 3.99532C20.6059 3.42861 20.0231 3.21688 19.3257 3.21758C13.94 3.22317 8.55437 3.22108 3.16871 3.22108C3.07298 3.22108 2.97654 3.22247 2.88151 3.23016C2.08487 3.29305 1.52234 3.70253 1.22116 4.43066C0.956309 5.07005 1.12123 5.74716 1.0793 6.41729H21.4109V6.41799Z"
                fill="#DB6F12"
                stroke="#DB6F12"
                stroke-width="0.3"
              />
            </svg>
            <p>Activitied date : _</p>
          </div>
        </Grid>
        <Grid item className={styles.lastItem} xs={12}>
          <div className={styles.speedRate}>
            <span>0%</span>
            <div>
              <h5>0% Speed Score,you don't have enough traffic yet</h5>
              <h6>
                You'll see your site's average loading speed once you have more
                traffic
              </h6>
            </div>
          </div>
          <p>Learn how to boost your traffic</p>
        </Grid>
      </Grid>
      <Grid
        container-full
        className={styles.container}
        spacing={12}
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          gap: "5px",
          flexWrap: "wrap",
        }}
      >
        {/* start handle select theme */}
        {themesData.map(({ id, name, image }, index) => (
          <Grid
            item
            key={id}
            xs={12}
            width={"32%"}

          >
            <MediaCard
              key={id}
              img={image}
              title={name}
              handleSelectTheme={handleSelectTheme}
            />
          </Grid>
        ))}

        <grid item xs={12} className={styles.themeSelected}>
          <grid item xs={12} className={styles.theme}>
            <Image src={themeTwoImage} alt="themeTwoImage" />
            <p>You Selected Real estate {theme}</p>
          </grid>
          <grid item xs={12} className={styles.theme}>
            <grid item xs={12}>
             {/* <Link href="http://harajx.com/build/checkuser/moe1@hotmail.com"> */}
              <button
                className={styles.customizeBtn}
                onClick={handleCustomizeTheme}
              >
                Customize
              </button>
              {/* </Link> */}
            </grid>
          </grid>
        </grid>
      </Grid>
    </div>
  );
};

export default StoreThemes;

//*https://harajx.com/thebuilder/checkuser/ahmed@gmail.com */
