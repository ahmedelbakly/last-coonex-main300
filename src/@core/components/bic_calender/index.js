import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import styleSheet from "./style.module.css";
const localizer = momentLocalizer(moment);

const MyCalendar = ({ handleShowAdd, handleShowAllEvents }) => {
  const events = [
    {
      id: 0,
      name: "Holiday",
      description: "this is description",
      allDay: true,
      start: new Date(2024, 1, 5),
      end: new Date(2024, 1, 5),
    },
    {
      id: 1,
      name: "Meeting",
      description: "Meeting With Eslam",
      allDay: true,
      start: new Date(2024, 1, 10),
      end: new Date(2024, 1, 10),
    },
    {
      id: 1,
      name: "Meeting",
      description: "Meeting With Eslam",
      allDay: true,
      start: new Date(2024, 1, 10),
      end: new Date(2024, 1, 10),
    },
    {
      id: 1,
      name: "Meeting",
      description: "Meeting With Eslam",
      allDay: true,
      start: new Date(2024, 1, 10),
      end: new Date(2024, 1, 10),
    },
    {
      id: 2,
      name: "Meeting",
      description: "Meeting With Eslam",
      allDay: true,
      start: new Date(2024, 1, 15),
      end: new Date(2024, 1, 15),
    },
    {
      id: 2,
      name: "Omar Birthday",
      description: "My Son Birthday",
      allDay: true,
      start: new Date(2024, 5, 13),
      end: new Date(2024, 5, 13),
    },
  ];
  const event = ({ event }) => {
    return (
      <div
        style={{
          height: "55px",
          background: "#fff",
          color: "#000",
          width: "100%",
          padding: "5px",
        }}
      onClick={handleShowAllEvents} >
        {event.name} <br /> <small>{event.description}</small>{" "}
      </div>
    );
  };
  return (
    <div className={styleSheet.bigCalendar}>
      <button className={styleSheet.addEvent} onClick={handleShowAdd}>
        Add Event
      </button>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ minHeight: 580, background: "#Fff" }}
        components={{
          event: event,
        }}
      />
    </div>
  );
};

export default MyCalendar;
