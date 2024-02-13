import React from "react";
import StyleSheet from "./styles.module.css";
import { eyeIcon, userIcon } from "../../../../../fileData/crmLeadsData";
import avatar from "../../../../../../public/images/cms/avatar.png";
import Image from "next/image";
//**IMPORT NEXT  */
import { useRouter } from "next/router";
import { useAuth } from "src/hooks/useAuth";

const KanbanCard = ({ leadSource, user, id }) => {
  const auth = useAuth();
  //**ROUTER TO PUSH LINKS */
  const router = useRouter();
  //** HANDLE SHOW LEADS PROFILE */
  const handleShowLead = (id) => {
    router.push(`/crm/crmLeads/${id}`);
    auth.setLeadId(id);
  };

  return (
    <div className={StyleSheet.container}>
      <div className={StyleSheet.cardTitle}>
        <div className={StyleSheet.cardTitleName}>
          <span>{userIcon} </span>
          <h6>{user}</h6>
        </div>
        <span style={{ cursor: "pointer" }} onClick={() => handleShowLead(id)}>
          {eyeIcon}
        </span>
      </div>
      <div className={StyleSheet.cardInfo}>
        <p>Lead Source</p>
        <span>{leadSource} </span>
      </div>
      <div className={StyleSheet.cardInfo}>
        <p>Assign To</p>
        <Image src={avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default KanbanCard;
