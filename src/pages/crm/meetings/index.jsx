import React from "react";
import { useState } from "react";
import BigCalender from "src/@core/components/bic_calender";
import { useAuth } from "src/hooks/useAuth";
import AddEvent from "./components/addEvent";

const Meetings = () => {
  const { setPages } = useAuth();
  setPages("CRM Meetings & Calendar");

  //** handle overlay */
  const [showAdd, setShowAdd] = useState(false);
  //** handle show overlay */
  const handleShowAdd = () => {
    setShowAdd(!showAdd);
  }

  return (
    <div>
      {showAdd && <AddEvent  handleShowAdd={handleShowAdd}/>}
      <BigCalender  handleShowAdd={handleShowAdd}/>
    </div>
  );
};

export default Meetings;
