import {
  deleteIcon,
  editIcon,
  instagram,
  facebook,
  googleAds,
  whatsUp,
  snapchat,
} from "src/@core/leadsData/leadsSourceIcon";

export const HandleLeadsSourceIcon = (value) => {
  if (value === "facebook") {
    return facebook;
  } else if (value === "instagram") {
    return instagram;
  } else if (value === "snapchat") {
    return snapchat;
  } else if (value === "googleAds") {
    return googleAds;
  } else if (value === "whatsUp") {
    return whatsUp;
  }
};
