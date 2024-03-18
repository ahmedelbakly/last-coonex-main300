import * as React from "react";
import dayjs from "dayjs";
// import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

function DateCalendarValue({ handleDate, propertyName, handleShowDate }) {
  const focusDate = dayjs(new Date());
  const [value, setValue] = React.useState(focusDate);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* <DemoContainer components={["DateCalendar", "DateCalendar"]}> */}

      {/* <DemoItem > */}
      <DateCalendar
        value={value}
        onChange={({ $y, $M, $D }) => {
          handleDate(`${$y}-${$M + 1}-${$D}`, propertyName);
          handleShowDate();
        }}
      />
      {/* </DemoItem> */}
      {/* </DemoContainer> */}
    </LocalizationProvider>
  );
}

export default DateCalendarValue;
