import React from "react";
import { useState } from "react";
import BigCalender from "src/@core/components/bic_calender";
import { useAuth } from "src/hooks/useAuth";
import AddEvent from "./components/addEvent";
import { ConfirmOverlay, SuccessOverlay } from "src/@core/components/overlays";
import ShowEvents from "./components/showEvents";

const Meetings = () => {
  const { setPages } = useAuth();
  setPages("CRM Meetings & Calendar");

  //** handle overlay */
  const [showAdd, setShowAdd] = useState(false);
  const [successOverlay, setSuccessOverlay] = useState(false);
  const [successDeleteOverlay, setSuccessDeleteOverlay] = useState(false);

  const [showAllEvents, setShowAllEvents] = useState(true);
  const [showConfirmOverlay, setShowConfirmOverlay] = useState(false);

  //** handle show overlay */
  const handleShowAdd = () => {
    setShowAdd(!showAdd);
  };
  //* handle overlay */
  const handleSuccessOverlay = () => {
    setSuccessOverlay(!successOverlay);
  };
  //* handle edit overlay */

  const handleShowAllEvents = () => {
    setShowAllEvents(!showAllEvents);
  };
  const handleDeleteConfirm = () => {
    setShowConfirmOverlay(!showConfirmOverlay);
  }; //** handleDeleteConfirm
  return (
    <div>
      {showAdd && (
        <AddEvent
          handleShowAdd={handleShowAdd}
          handleSuccessOverlay={handleSuccessOverlay}
        />
      )}
      {showAllEvents && (
        <ShowEvents handleShowAllEvents={handleShowAllEvents}  handleDeleteConfirm={handleDeleteConfirm}/>
      )}
      {successOverlay && (
        <SuccessOverlay
          message={"Added Event Successfully"}
          setState={setSuccessOverlay}
          route={"/crm/meetings"}
        />
      )}
      {successDeleteOverlay && (
        <SuccessOverlay
          message={"Delete Event Successfully"}
          setState={setSuccessDeleteOverlay}
          route={"/crm/meetings"}
        />
      )}


      {showConfirmOverlay && (
        <ConfirmOverlay
          message={"Do you want to delete this event?"}
          setState={setShowConfirmOverlay}
          successSetState={setSuccessDeleteOverlay}
          route={"/crm/meetings"}
          func={handleDeleteConfirm}
        />
      )}
      <BigCalender handleShowAdd={handleShowAdd} />
    </div>
  );
};

export default Meetings;
