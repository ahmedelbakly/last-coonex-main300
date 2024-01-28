import React from "react";
import Grid from "@mui/material/Grid";
import MediaCard from "src/@core/components/themesCard";
import themeOneImage from "../../../../public/images/cms/themeOneImage.png";
import addDomainImage from "../../../../public/images/cms/explainBomain.png";
import styles from "./style.module.css";
import Image from "next/image";
import { InputLayout } from "src/properties/shared-components/input-layout";
import { Button } from "@mui/material";
import EnhancedTable from "./table";
import { ConfirmOverlay, SuccessOverlay } from "src/@core/components/overlays";
import { useState } from "react";
import { useAuth } from "src/hooks/useAuth";

const DomainSetting = () => {
  const [showSuccessOverLay, setShowSuccessOverLay] = useState(false);
  const [showConfirmOverLay, setShowConfirmOverLay] = useState(false);
  const [handleSolution, setHandleSolution] = useState(false);
  const [overlayVideo, setOverlayVideo] = useState(false);

  //* set page name */
  const auth = useAuth()
  auth.setPages("Domain Setting")


  const handleDeleteDomain = () => {
    setShowConfirmOverLay(false);
    setShowSuccessOverLay(true);
  };

  //* handle show confirm overLay *//
  const handleShowConfirmOverLay = () => {
    setShowConfirmOverLay(true);
  };
  //** handle show solution   */
  const handleShowSolution = () => {
    setHandleSolution(true);
  };
  const handleShowHowAddDomain = () => {
    setHandleSolution(false);
  };
  //** HANDEL OVERLAY VIDEO */
  const handleOverlayVideo = () => {
    setOverlayVideo(!overlayVideo);
  };

  return (
    <div style={{ width: "100%", padding: "20px 0px", background: "#F7F8F8" }}>
      {showSuccessOverLay && (
        <SuccessOverlay
          message={"Deleted Successfully"}
          setState={setShowSuccessOverLay}
        />
      )}
      {showConfirmOverLay && (
        <ConfirmOverlay
          message={"Do you want to delete this domain?"}
          successSetState={setShowSuccessOverLay}
          setState={setShowConfirmOverLay}
          func={handleDeleteDomain}
        />
      )}
      <Grid
        container-full
        className={styles.container}
        spacing={12}
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            gap: 20,
          }}
          className={styles.addAndInput}
        >
          <InputLayout>
            <label>Domain</label>
            <input type="url" placeholder="Example: Google.com" />
          </InputLayout>
          <button>Add</button>
        </Grid>
        <EnhancedTable handleShowConfirmOverLay={handleShowConfirmOverLay} />
      </Grid>
      <Grid
        container-full
        className={styles.container}
        spacing={12}
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        <div className={styles.solution}>
          <div className={styles.header}>
            <button
              className={`${styles.button} ${
                handleSolution ? styles.activeBtn : ""
              }`}
              onClick={handleShowSolution}
            >
              Solution 1 (Preferred)
            </button>
            <button
              className={`${styles.button} ${
                !handleSolution ? styles.activeBtn : ""
              }`}
              onClick={handleShowHowAddDomain}
            >
              How to add your custom domain
            </button>
          </div>
          {handleSolution ? (
            <div className={styles.content}>
              <Image
                className={styles.domainImage}
                src={addDomainImage}
                alt="add Domain"
              />
            </div>
          ) : (
            <div className={styles.content}>
              <div className={styles.nots}>
                <p>
                  1- Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua
                </p>
                <p>
                  2- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p>
                  3- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <p>
                  4- Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua
                </p>
              </div>
              <div
                className={`${
                  overlayVideo ? styles.overPlay : styles.videoCon
                }`}
              >
                <video
                  className={`${styles.video}`}
                  style={{ backgroundColor: "black" }}
                  width="714"
                  height="488"
                  controls
                  onPlay={handleOverlayVideo}
                  onPause={handleOverlayVideo}
                >
                  <source
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          )}
        </div>
      </Grid>
    </div>
  );
};

export default DomainSetting;
