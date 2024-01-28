// menu icon
import { AiOutlineHome } from "react-icons/ai";
import { GoInfo } from "react-icons/go";
import { TiMessages } from "react-icons/ti";
import { LuPhone } from "react-icons/lu";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//main List information

export const mainList = [
  {
    name: "Basic Information",
    icon: <GoInfo />,
    stateValue: "basicInformation",
  },

  {
    name: "Property Location",
    icon: <AiOutlineHome />,
    stateValue: "propertyLocation",
  },
  {
    name: "Extra Information",
    icon: <TiMessages />,
    stateValue: "extraInformation",
  },
  {
    name: "Contact",
    icon: <LuPhone />,
    stateValue: "contact",
  },
];

export const rightIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="34"
    height="33"
    viewBox="0 0 34 33"
    fill="none"
  >
    <path
      d="M7.375 16.5L14.25 23.375L28 9.625"
      stroke="#109351"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const propertyTypeTest = [
  {
    id: 1,
    name: "Apartment",
    value: "apartment",
  },
  {
    id: 2,
    name: "Townhouse",
    value: "townhouse",
  },
  {
    id: 3,
    name: "Villa Compound",
    value: "villa Compound",
  },
  {
    id: 4,
    name: "Residential Plot",
    value: "residential Plot",
  },
  {
    id: 5,
    name: "Residential Building",
    value: "residential Building",
  },
  {
    id: 6,
    name: "Villa",
    value: "Villa",
  },
  {
    id: 7,
    name: "Penthouse",
    value: "Penthouse",
  },
  {
    id: 8,
    name: "Hotel Apartment",
    value: "hotel Apartment",
  },
  {
    id: 9,
    name: "Residential Floor",
    value: "residential Floor",
  },
];
