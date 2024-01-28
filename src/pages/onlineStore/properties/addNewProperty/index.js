import React from "react";
import Grid from "@mui/material/Grid";
import StyleSheet from "./style.module.css";
import Link from "next/link";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { mainList, rightIcon } from "../../../../fileData/addBropertyData";
import BasicInfo from "src/properties/basic-information";
import PropertyLocation from "src/properties/property-location";
import ExtraInformation from "src/properties/extra-information";
import Contact from "src/properties/contact";
import { LayoutOverlay } from "src/properties/shared-components/input-layout";
import axios from "axios";
import { useAuth } from "src/hooks/useAuth";
import { useForm } from "react-hook-form";

const AddPropertyPage = () => {
  const [page, setPage] = useState("basicInformation");
  const [overLay, setOverLay] = useState(false);
  const auth = useAuth();
  const { setProperty, property } = auth;
  auth.setPages("Add New Property");
  // start handle new property data

  // handleSubmit property

  //state to store data
  const [propertyDetails, setPropertyDetails] = useState({
    basicInformation: {
      title: "",
      category: "",
      purpose: "",
      propertyType: "",
      description: "",
      videoLink: "",
      images: [],
    },
    propertyLocation: {
      location: "",
      surfaceArea: null,
      price: null,
      paths: null,
      rooms: "",
      floor: "",
    },
    extraInformation: {
      furnished: null,
      PaymentMethod: null,
      amenities: [],
    },
    contact: {
      phone: null,
      whatsUp: null,
    },
  });
  const allData = {
    ...propertyDetails.basicInformation,
    ...propertyDetails.propertyLocation,
    ...propertyDetails.extraInformation,
    ...propertyDetails.contact,
  };
  console.log(allData);
  // method to handle Basic information
  const handleBasicInformation = (e) => {
    setPropertyDetails({
      ...propertyDetails,
      basicInformation: {
        ...propertyDetails.basicInformation,
        [e.target.name]: e.target.value,
      },
    });
  };

  // method to handle property Location
  const handlePropertyLocation = (e) => {
    setPropertyDetails({
      ...propertyDetails,
      propertyLocation: {
        ...propertyDetails.propertyLocation,
        [e.target.name]: e.target.value,
      },
    });
  };

  // method to handle Extra information
  const handleExtraInformation = (e) => {
    setPropertyDetails({
      ...propertyDetails,
      extraInformation: {
        ...propertyDetails.extraInformation,
        [e.target.name]: e.target.value,
      },
    });
  };

  //* HANDLE CUSTOM SELECT PROPERTY TYPE */
  // HANDLE CUSTOM SELECT PROPERTY TYPE */
  const handleCustomSelect = (value, selectName, object) => {
    setPropertyDetails({
      ...propertyDetails,
      [object]: {
        ...propertyDetails[object],
        [selectName]: value,
      },
    });
  };
  // HANDLE CUSTOM SELECT */

  //** handle amenities */

  const handleAmenities = (e, value) => {
    e.preventDefault();
    if (!propertyDetails.extraInformation.amenities.includes(value)) {
      setPropertyDetails({
        ...propertyDetails,
        extraInformation: {
          ...propertyDetails.extraInformation,
          amenities: [...propertyDetails.extraInformation.amenities, value],
        },
      });
    } else {
      const index = propertyDetails.extraInformation.amenities.indexOf(value);

      setPropertyDetails({
        ...propertyDetails,
        extraInformation: {
          ...propertyDetails.extraInformation,
          amenities: propertyDetails.extraInformation.amenities.filter(
            (item) => item !== value
          ),
        },
      });
    }
  };

  // method to handle contact
  const handleContact = (e) => {
    setPropertyDetails({
      ...propertyDetails,
      contact: {
        ...propertyDetails.contact,
        [e.target.name]: e.target.value,
      },
    });
  };
  // end handle new property data

  const api = "http://localhost:3001/user/property/";

  // handleSubmit property
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(allData);
    setProperty([
      { id: 1, title: "house", rooms: 2, path: 3 },
      { id: 2, title: "house", rooms: 2, path: 3 },
      { id: 3, title: "house", rooms: 2, path: 3 },
      { id: 4, title: "house", rooms: 2, path: 3 },
    ]);

    try {
      const res = await axios.post(api, allData);
      console.log(res.data);
      auth.setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(property);
  // end handle new property data
  // handle delete properties
  const deleteApi = "http://localhost:3001/user/property/";

  //** handle upload image*/
  const uploadImages = (e) => {
    const files = e.target.files;
    const formData = new FormData();
    files &&
      Object.values(files).map((file, index) => {
        // send image in formData
        formData.append("proImg", file);
        console.log("====================================");
        console.log(formData.get("proImg").name, index);
        console.log("====================================");
      });
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
        flexWrap: "wrap",
      }}
    >
      {overLay && (
        <LayoutOverlay setState={setOverLay}>
          <span>{rightIcon}</span>
          <h4>Added Property Successfully</h4>
        </LayoutOverlay>
      )}
      <Grid
        item
        sx={{
          flex: 2,
          display: "flex",
          width: "100%",
          justifyContent: "flex-start",
          flexDirection: "column",
          gap: "30px",
          flexWrap: "wrap",
          minHeight: "100vh",
          borderRight: "solid 1px #E2E2E2",
          padding: "20px 0px",
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
            <button className={StyleSheet.icon}>{item.icon}</button>
            <h3>{item.name}</h3>
          </div>
        ))}
      </Grid>
      <Grid
        item
        sx={{
          flex: 5,
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "wrap",
          padding: "20px 0px",
          flexDirection: "column",
        }}
      >
        <form>
          {page === "basicInformation" && (
            <BasicInfo
              setPage={setPage}
              handleBasicInformation={handleBasicInformation}
              data={propertyDetails.basicInformation}
              handleCustomSelect={handleCustomSelect}
              uploadImages={uploadImages}
            />
          )}
          {page === "propertyLocation" && (
            <PropertyLocation
              setPage={setPage}
              data={propertyDetails.propertyLocation}
              handlePropertyLocation={handlePropertyLocation}
              handleCustomSelect={handleCustomSelect}
            />
          )}
          {page === "extraInformation" && (
            <ExtraInformation
              setPage={setPage}
              data={propertyDetails.extraInformation}
              handleExtraInformation={handleExtraInformation}
              propertyDetails={propertyDetails}
              handleAmenities={handleAmenities}
            />
          )}
          {page === "contact" && (
            <Contact
              setPage={setPage}
              data={propertyDetails.contact}
              handleSubmit={handleSubmit}
              handleContact={handleContact}
            />
          )}
        </form>
      </Grid>
    </Grid>
  );
};

export default AddPropertyPage;
