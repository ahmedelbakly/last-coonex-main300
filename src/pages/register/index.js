// ** React Imports
import { useState } from "react";
import axios from "axios";
// ** Next Import
import Link from "next/link";
import { useRouter } from "next/router";

import { FaUserGroup } from "react-icons/fa6";

import styles from "./style.module.css";
// ** MUI Components
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled, useTheme } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import MuiFormControlLabel from "@mui/material/FormControlLabel";

// ** Custom Component Import
import CustomTextField from "src/@core/components/mui/text-field";

// ** Icon Imports
import Icon from "src/@core/components/icon";

// ** Layout Import
import BlankLayout from "src/@core/layouts/BlankLayout";

// ** Hooks
import { useSettings } from "src/@core/hooks/useSettings";

// ** Demo Imports
import FooterIllustrationsV2 from "src/views/pages/auth/FooterIllustrationsV2";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// ** Styled Components
const RegisterIllustration = styled("img")(({ theme }) => ({
  zIndex: 2,
  maxHeight: 600,
  marginTop: theme.spacing(12),
  marginBottom: theme.spacing(12),
  [theme.breakpoints.down(1540)]: {
    maxHeight: 550,
  },
  [theme.breakpoints.down("lg")]: {
    maxHeight: 500,
  },
}));

const RightWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.up("md")]: {
    maxWidth: 450,
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: 600,
  },
  [theme.breakpoints.up("xl")]: {
    maxWidth: 750,
  },
}));

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: `${theme.palette.primary.main} !important`,
}));

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  marginTop: theme.spacing(1.5),
  marginBottom: theme.spacing(1.75),
  "& .MuiFormControlLabel-label": {
    color: theme.palette.text.secondary,
  },
}));

// use form validation
const schema = yup.object().shape({
  firstName: yup.string().required(),
  // lastName: yup.string().required(),
  // email: yup.string().email().required(),
  // password: yup.string().min(8).required(),
  // confirmPassword: yup.string()
  //   .label("confirm password")
  //   .required()
  //   .oneOf([yup.ref("password"), null], "Passwords must match"),
  // domain: yup.string(),
  // jobTitle: yup.string().required(),
  // phoneNumber: yup.number().required(),
  // conditionAgree: yup.boolean().oneOf([true]),
  // role: yup.string().required(),
  // city: yup.string(),
});

/* 
// conditionAgree: yup.boolean().oneOf([true]),
  //role: yup.string().required(),
  // city: yup.string(),
  
*/

const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  domain: "",
  conditionAgree: false,
  confirmPassword: null,
  phoneNumber: null,
  city: "aga",
  jobTitle: "",
};

const Register = () => {
  // ** States
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPersonal, setShowPersonal] = useState(false);
  const [notFull, setNotFull] = useState([]);
  const [showErorr, setShowErorr] = useState(false);
  // ** Hooks
  const theme = useTheme();
  const { settings } = useSettings();
  const hidden = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();

  // ** Vars
  const { skin } = settings;
  const imageSource =
    skin === "bordered"
      ? "auth-v2-register-illustration-bordered"
      : "auth-v2-register-illustration";
  ////////////////////////////////////////////////////////////////////////////////////////////////////
  //** start  handle useForm */

  const {
    control,
    setError,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  //** end handle useForm    */

  //* handle on submit   /*/
  const api = "http://195.35.2.218:81/api/do-register";
  const onSubmit = (data) => {
    // console.log(data);
    // setError("phoneNumber", {
    //   type: "manual",
    //   message: `${data.phoneNumber}`,
    // });
    // try {
    //   axios.post(api, data).then((response) => {
    //     console.log(response.data);
    //     if (response.data.status === "success register") {
    //       console.log("success register");
    //       router.push("/login");
    //     }
    //   });
    // } catch (error) {
    //   setError("phoneNumber", {
    //     type: "manual",
    //     message: `${error.response.data.message}`,
    //   });
    // }
    console.log(data);
  };

  // handle checkbox

  // handle select

  // handle api route

  // handle submit function

  //** filter register data */

  return (
    <Box className="content-right" sx={{ backgroundColor: "background.paper" }}>
      <RightWrapper>
        <Box
          sx={{
            p: [6, 12],
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "100%", maxWidth: 400 }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="169"
              height="29"
              viewBox="0 0 169 29"
              fill="none"
            >
              <g clip-path="url(#clip0_457_53520)">
                <path
                  d="M95.5392 0.34082C96.0115 0.553177 96.5335 0.556331 97.0259 0.703508C99.5639 1.46147 101.362 3.03943 102.427 5.43737C102.822 6.32465 103.036 7.27394 103.039 8.24742C103.051 12.3768 103.036 16.5072 103.051 20.6366C103.054 21.5039 103.373 22.2335 104.172 22.7139C105.432 23.4708 106.975 22.7402 107.378 21.4114C107.45 21.1738 107.477 20.9404 107.477 20.6955C107.476 14.2554 107.482 7.8164 107.464 1.37632C107.463 0.871711 107.585 0.737149 108.097 0.74661C109.926 0.781302 111.758 0.767636 113.588 0.753969C113.919 0.751867 114.041 0.827558 114.04 1.18394C114.029 7.72809 114.069 14.2733 114.006 20.8174C113.988 22.7171 113.34 24.4433 111.919 25.8562C110.703 27.0651 109.456 28.1616 107.716 28.5243C107.284 28.6147 106.854 28.7135 106.422 28.8092H104.097C102.965 28.744 101.881 28.5201 100.871 27.9671C97.9695 26.3787 96.4046 23.9408 96.3454 20.6608C96.2725 16.6712 96.3243 12.6806 96.3317 8.69C96.3327 7.94991 96.1457 7.29392 95.5667 6.81243C94.9929 6.33621 94.3315 6.14067 93.5971 6.42031C92.8194 6.71572 92.3957 7.30338 92.2509 8.10234C92.2002 8.37988 92.2171 8.66057 92.2171 8.9402C92.2171 15.0838 92.2171 21.2264 92.2171 27.37C92.2171 28.5253 92.1928 28.5495 91.0421 28.5506C89.4403 28.5506 87.8384 28.5558 86.2376 28.5485C85.4525 28.5453 85.3447 28.4423 85.3447 27.6728C85.3405 21.197 85.3004 14.7211 85.3595 8.24637C85.3933 4.60267 87.8194 1.65175 91.3972 0.556331C91.9191 0.396538 92.476 0.457511 93.0064 0.341872H95.5424L95.5392 0.34082Z"
                  fill="#1DB2FF"
                />
                <path
                  d="M34.1601 0.34082H38.1743C39.3302 0.424922 40.464 0.600484 41.5682 0.978941C43.5652 1.66437 45.3563 2.69777 46.826 4.19372C49.064 6.47287 50.4514 9.20092 50.8677 12.3842C51.2745 15.5001 50.8772 18.5004 49.4233 21.3063C47.7622 24.5148 45.2453 26.7992 41.8102 28.0502C40.5982 28.4917 39.3545 28.7419 38.0686 28.8071H34.2658C32.9978 28.7419 31.7615 28.5201 30.5749 28.0617C25.4545 26.0832 22.5022 22.3386 21.5618 17.0055C21.1074 14.4289 21.2998 11.869 22.2264 9.41222C24.0185 4.66469 27.4399 1.72324 32.3945 0.536356C32.9746 0.397589 33.5779 0.455409 34.1612 0.34082H34.1601Z"
                  fill="#1DB2FF"
                />
                <path
                  d="M65.6427 0.34082H69.6568C70.9068 0.408102 72.122 0.636227 73.3012 1.0662C76.618 2.27621 79.0842 4.43236 80.7759 7.51994C82.2171 10.1502 82.6958 12.9655 82.4538 15.8943C81.9508 21.998 77.8416 27.0557 71.6824 28.56C70.9798 28.7314 70.257 28.6904 69.5512 28.8092H65.7483C64.6283 28.7219 63.5199 28.5842 62.4527 28.1984C57.0385 26.242 53.9108 22.4028 53.0317 16.7732C52.5562 13.7287 52.9461 10.7578 54.3197 7.98039C55.817 4.95274 58.1215 2.72615 61.2661 1.37632C62.6714 0.772892 64.119 0.419666 65.6416 0.34082H65.6427Z"
                  fill="#1DB2FF"
                />
                <path
                  d="M0.248413 12.1054C0.502006 11.3632 0.586537 10.5789 0.860207 9.8378C1.66959 7.64381 2.88473 5.74626 4.70954 4.23454C6.77633 2.52202 9.13369 1.50229 11.7732 1.06496C14.121 0.675992 16.4868 0.777965 18.8484 0.755889C19.1158 0.753786 19.1675 0.86417 19.1665 1.09965C19.1591 2.76276 19.1538 4.42482 19.1707 6.08793C19.1739 6.43379 19.0027 6.43695 18.7491 6.4359C17.3057 6.42959 15.8613 6.3928 14.419 6.44326C12.6713 6.50528 11.1001 7.12343 9.73386 8.20308C7.94286 9.61809 7.11445 11.5177 6.8915 13.7569C6.6918 15.7617 7.11128 17.6004 8.19222 19.2708C9.31437 21.0044 10.9796 21.9989 12.9714 22.5003C13.8664 22.7253 14.7698 22.7138 15.6774 22.7127C16.6813 22.7106 17.684 22.7264 18.6868 22.7053C19.046 22.698 19.1749 22.7915 19.1696 23.169C19.1496 24.7438 19.1506 26.3196 19.1696 27.8944C19.1739 28.2739 19.0841 28.4116 18.6762 28.4011C17.498 28.3738 16.3157 28.4348 15.1386 28.3822C13.1257 28.2928 11.1223 28.1152 9.19603 27.4487C6.92003 26.6613 4.91664 25.4397 3.34436 23.6242C1.73933 21.7687 0.708051 19.6094 0.334001 17.1662C0.327661 17.122 0.277999 17.0842 0.248413 17.0432C0.248413 15.3969 0.248413 13.7517 0.248413 12.1054Z"
                  fill="#1DB2FF"
                />
                <path
                  d="M168.645 2.3357C165.75 5.61146 162.856 8.88721 159.959 12.163C159.343 12.8589 159.044 12.9073 158.234 12.4416C157.14 11.8129 156.043 11.1895 154.96 10.5419C154.226 10.1025 154.145 9.48013 154.714 8.84516C156.921 6.38729 159.137 3.93679 161.34 1.47471C161.646 1.13305 161.997 0.987976 162.45 0.989027C164.104 0.995335 165.759 0.998489 167.413 0.970104C167.962 0.960643 168.369 1.12779 168.644 1.59981V2.33465L168.645 2.3357Z"
                  fill="#1DB2FF"
                />
                <path
                  d="M160.616 28.8087C160.527 28.6362 160.339 28.6909 160.199 28.6383C159.102 28.2178 158.544 27.3653 158.651 26.2457C158.756 25.1544 159.538 24.325 160.645 24.1284C161.672 23.9465 162.833 24.4553 163.196 25.3668C163.746 26.7503 163.295 28.3314 161.574 28.7067C161.491 28.7245 161.396 28.7067 161.355 28.8087H160.615H160.616Z"
                  fill="#1DB2FF"
                />
                <path
                  d="M148.784 0.34082C148.824 0.46487 148.947 0.463819 149.039 0.497459C150.387 0.997864 150.963 2.30564 150.424 3.65022C149.975 4.77192 148.385 5.34486 147.197 4.81397C145.942 4.25259 145.443 2.89856 146.038 1.66121C146.283 1.1503 146.702 0.81284 147.201 0.576305C147.329 0.515331 147.463 0.490101 147.516 0.34082H148.784Z"
                  fill="#1DB2FF"
                />
                <path
                  d="M131.322 0.760434C133.223 0.760434 135.124 0.769895 137.025 0.752024C137.397 0.74887 137.497 0.850843 137.492 1.21879C137.472 2.79359 137.471 4.36944 137.492 5.94424C137.497 6.33321 137.399 6.4436 136.998 6.44254C133.567 6.42572 130.134 6.43413 126.702 6.43308C125.534 6.43308 124.323 7.37923 124.177 8.687C124.03 10.0063 124.878 11.189 126.137 11.4739C126.462 11.5475 126.787 11.5811 127.121 11.5811C129.955 11.5748 132.789 11.5854 135.623 11.5685C136.059 11.5654 136.238 11.6421 136.226 12.1341C136.191 13.6385 136.195 15.145 136.226 16.6493C136.235 17.0835 136.088 17.1602 135.692 17.1581C132.859 17.1424 130.025 17.1434 127.191 17.1529C126.067 17.1571 125.19 17.6354 124.566 18.5773C123.68 19.9167 124.296 21.8132 125.781 22.4229C126.298 22.6352 126.808 22.7172 127.354 22.7172C130.557 22.713 133.761 22.7236 136.965 22.7057C137.381 22.7036 137.5 22.8192 137.494 23.2303C137.472 24.7882 137.473 26.3462 137.494 27.9032C137.499 28.2942 137.386 28.4046 136.99 28.4025C133.382 28.3878 129.773 28.4172 126.165 28.3878C123.673 28.3668 121.439 27.6141 119.694 25.768C118.316 24.312 117.577 22.5732 117.506 20.5485C117.423 18.2031 118.247 16.2498 119.965 14.6687C120.258 14.3986 120.189 14.2713 119.946 14.0411C118.856 13.0067 118.057 11.7662 117.774 10.2997C117.322 7.95742 117.751 5.7834 119.288 3.86588C120.622 2.20278 122.359 1.26504 124.423 0.877125C124.883 0.79092 125.36 0.769895 125.83 0.766741C127.66 0.754126 129.491 0.761485 131.322 0.761485V0.760434Z"
                  fill="#1DB2FF"
                />
                <path
                  d="M163.959 27.5936C164.743 26.4708 164.743 25.7528 163.9 24.6143C162.86 23.2119 161.449 22.2258 159.977 21.3385C157.231 19.6828 154.371 18.2299 151.541 16.7235C149.215 15.4851 146.976 14.1163 145.065 12.2797C144.775 12.0022 144.511 11.6973 144.247 11.3956C143.626 10.685 143.301 9.89967 143.347 8.91253C143.421 7.30514 143.362 5.69249 143.383 4.083C143.399 2.87509 143.943 2.18756 145.23 1.76074C144.663 2.41043 144.499 3.07903 144.741 3.83385C144.966 4.53925 145.402 5.10378 145.94 5.58421C147.134 6.6502 148.497 7.4828 149.848 8.32907C153.885 10.8595 158.04 13.1891 162.198 15.5155C163.754 16.386 164.922 17.6423 165.564 19.3338C165.702 19.6975 165.77 20.0749 165.77 20.4618C165.774 22.0723 165.778 23.6818 165.775 25.2924C165.773 26.2858 165.043 27.2025 163.958 27.5925L163.959 27.5936Z"
                  fill="#1DB2FF"
                />
                <path
                  d="M143.839 28.3357C142.871 28.3357 141.903 28.3325 140.937 28.3367C140.489 28.3388 140.022 28.2621 139.894 27.8006C139.758 27.3138 139.677 26.7808 140.067 26.3099C141.97 24.0076 143.862 21.6969 145.757 19.3883C146.489 18.4968 147.215 17.5991 147.948 16.7086C148.519 16.0158 148.902 15.9528 149.67 16.4143C150.915 17.1628 152.162 17.9113 153.406 18.664C154.197 19.1434 154.351 19.895 153.769 20.6172C151.819 23.0404 149.853 25.451 147.895 27.8679C147.61 28.219 147.261 28.3851 146.798 28.3767C145.813 28.3588 144.827 28.3714 143.841 28.3714C143.841 28.3588 143.841 28.3462 143.841 28.3336L143.839 28.3357Z"
                  fill="#1DB2FF"
                />
                <path
                  d="M44.083 14.4798C44.1749 16.6727 43.5441 18.5955 42.2508 20.2428C41.0272 21.8019 39.3905 22.7596 37.3691 23.0445C35.7292 23.2758 34.1633 23.0792 32.702 22.3454C30.558 21.2689 29.1876 19.5196 28.5959 17.2131C27.8404 14.2695 28.1711 11.4469 30.0128 8.9764C31.4456 7.05468 33.4448 6.05597 35.912 5.99815C37.5879 5.9582 39.1242 6.30933 40.5063 7.2418C42.3142 8.46233 43.3634 10.198 43.878 12.2816C44.0629 13.028 44.1327 13.7849 44.083 14.4798Z"
                  fill="white"
                />
                <path
                  d="M67.5552 6.01703C69.9094 5.9119 71.7638 6.75081 73.2737 8.31825C74.4983 9.58924 75.1978 11.1357 75.481 12.8923C75.7716 14.6942 75.6205 16.4235 74.94 18.115C73.8961 20.7127 72.0343 22.4568 69.2743 22.9782C66.2893 23.5417 63.6762 22.728 61.6771 20.3111C60.5454 18.9434 60.0171 17.3728 59.8163 15.6351C59.5564 13.3854 59.9537 11.2965 61.2079 9.40632C62.4675 7.50773 64.2732 6.40074 66.5228 6.02649C66.899 5.96341 67.2952 6.01808 67.5541 6.01808L67.5552 6.01703Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_457_53520">
                  <rect
                    width="168.428"
                    height="28.4894"
                    fill="white"
                    transform="translate(0.234619 0.330078)"
                  />
                </clipPath>
              </defs>
            </svg>
            <Box
              sx={{
                my: 6,
                display: "flex",
                justifyContent: "space-between",
                gap: "70px",
              }}
            >
              <Typography
                onClick={() => setShowPersonal(false)}
                variant="h6"
                sx={{
                  mb: 1.5,
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: "10px",
                  flex: 1,
                  cursor: "pointer",
                }}
              >
                <Icon
                  icon="tabler:smart-home"
                  hFlip={true}
                  className={!showPersonal ? styles.active : styles.unActive}
                />
                <span className={!showPersonal ? styles.text : ""}>
                  {" "}
                  Account
                </span>
              </Typography>

              <Typography
                onClick={() => setShowPersonal(true)}
                variant="h6"
                sx={{
                  mb: 1.5,
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: "10px",
                  flex: 1,
                  cursor: "pointer",
                }}
              >
                <Icon
                  icon="carbon-user-multiple"
                  hFlip={true}
                  className={showPersonal ? styles.active : styles.unActive}
                />
                <span className={showPersonal ? styles.text : ""}>
                  {" "}
                  Personal
                </span>
              </Typography>
            </Box>
            <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
              {!showPersonal ? (
                <Box>
                  <Box sx={{ mb: 4 }}>
                    <Controller
                      name="firstName"
                      control={control}
                      rules={{ required: false }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <CustomTextField
                          fullWidth
                          autoFocus
                          label="First Name"
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          placeholder="first name"
                          error={Boolean(errors.firstName)}
                          {...(errors.firstName && {
                            helperText: errors.firstName.message,
                          })}
                        />
                      )}
                    />
                  </Box>

                  <Box sx={{ mb: 4 }}>
                    <Controller
                      name="lastName"
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <CustomTextField
                          fullWidth
                          autoFocus
                          label="Last Name"
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          placeholder="LastName"
                          error={Boolean(errors.lastName)}
                          {...(errors.lastName && {
                            helperText: errors.lastName.message,
                          })}
                        />
                      )}
                    />
                  </Box>
                  <Box sx={{ mb: 4 }}>
                    <Controller
                      name="email"
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <CustomTextField
                          fullWidth
                          autoFocus
                          label="Email"
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          placeholder="add your email"
                          error={Boolean(errors.email)}
                          {...(errors.email && {
                            helperText: errors.email.message,
                          })}
                        />
                      )}
                    />
                  </Box>
                  <Box sx={{ mb: 1.5 }}>
                    <Controller
                      name="password"
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <CustomTextField
                          fullWidth
                          value={value}
                          onBlur={onBlur}
                          label="Password"
                          onChange={onChange}
                          id="auth-login-v2-password"
                          placeholder="add your password"
                          error={Boolean(errors.password)}
                          {...(errors.password && {
                            helperText: errors.password.message,
                          })}
                          type={showPassword ? "text" : "password"}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  edge="end"
                                  onMouseDown={(e) => e.preventDefault()}
                                  onClick={() => setShowPassword(!showPassword)}
                                >
                                  <Icon
                                    fontSize="1.25rem"
                                    icon={
                                      showPassword
                                        ? "tabler:eye"
                                        : "tabler:eye-off"
                                    }
                                  />
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                      )}
                    />
                  </Box>
                  <Box sx={{ mb: 1.5 }}>
                    <Controller
                      name="confirmPassword"
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <CustomTextField
                          fullWidth
                          value={value}
                          onBlur={onBlur}
                          label="Confirm Password"
                          onChange={onChange}
                          id="auth-login-v3-password"
                          placeholder="confirm password"
                          error={Boolean(errors.confirmPassword)}
                          {...(errors.confirmPassword && {
                            helperText: errors.confirmPassword.message,
                          })}
                          type={showConfirmPassword ? "text" : "password"}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  edge="end"
                                  onMouseDown={(e) => e.preventDefault()}
                                  onClick={() =>
                                    setShowConfirmPassword(!showConfirmPassword)
                                  }
                                >
                                  <Icon
                                    fontSize="1.25rem"
                                    icon={
                                      showConfirmPassword
                                        ? "tabler:eye"
                                        : "tabler:eye-off"
                                    }
                                  />
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                      )}
                    />
                  </Box>
                  <Button
                    type=""
                    fullWidth
                    variant="contained"
                    sx={{ mb: 4 }}
                    onClick={() => {
                      setShowErorr(true);

                      notFull.length === 0 && setShowPersonal(!showPersonal);
                    }}
                  >
                    Next
                  </Button>
                </Box>
              ) : (
                <Box>
                  {/* Personal Information */}
                  <div></div>
                  <Box sx={{ mb: 4 }}>
                    <Controller
                      name="phoneNumber"
                      control={control}
                      rules={{ required: false }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <CustomTextField
                          type="number"
                          fullWidth
                          autoFocus
                          label="phone Number"
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          placeholder="Phone Number"
                          error={Boolean(errors.phoneNumber)}
                          {...(errors.phoneNumber && {
                            helperText: errors.phoneNumber.message,
                          })}
                        />
                      )}
                    />
                  </Box>
                  <div className={styles.containerInput}>
                    <label>City</label>
                    <select {...register("city")}>
                      <option value="">select city</option>
                      <option value="cairo">Cairo</option>
                      <option value="alex">Alex</option>
                      <option value="mekka">Mekka</option>
                    </select>
                  </div>
                  <Box sx={{ mb: 4 }}>
                    <Controller
                      name="jobTitle"
                      control={control}
                      rules={{ required: false }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <CustomTextField
                          fullWidth
                          autoFocus
                          label="Job Title"
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          placeholder="job title"
                          error={Boolean(errors.jobTitle)}
                          {...(errors.jobTitle && {
                            helperText: errors.jobTitle.message,
                          })}
                        />
                      )}
                    />
                  </Box>

                  <Box sx={{ mb: 4 }}>
                    <Controller
                      name="domain"
                      control={control}
                      rules={{ required: false }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <CustomTextField
                          fullWidth
                          autoFocus
                          label="Domain Name"
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          placeholder="domain"
                          error={Boolean(errors.domain)}
                          {...(errors.domain && {
                            helperText: errors.domain.message,
                          })}
                        />
                      )}
                    />
                  </Box>

                  <FormControlLabel
                    control={<Checkbox />}
                    name="conditionAgree"
                    sx={{
                      mb: 4,
                      mt: 1.5,
                      "& .MuiFormControlLabel-label": {
                        fontSize: theme.typography.body2.fontSize,
                      },
                    }}
                    label={
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          flexWrap: "wrap",
                          justifyContent: "center",
                        }}
                      >
                        <Typography sx={{ color: "text.secondary" }}>
                          I agree to
                        </Typography>
                        <Typography
                          component={LinkStyled}
                          href="/"
                          onClick={(e) => e.preventDefault()}
                          sx={{ ml: 1 }}
                        >
                          privacy policy & terms
                        </Typography>
                      </Box>
                    }
                  />

                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    sx={{ mb: 4 }}
                  >
                    Register
                  </Button>
                </Box>
              )}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ color: "text.secondary", mr: 2 }}>
                  Already have an account?
                </Typography>
                <Typography component={LinkStyled} href="/login">
                  Sign in instead
                </Typography>
              </Box>
              <Divider
                sx={{
                  color: "text.disabled",
                  "& .MuiDivider-wrapper": { px: 6 },
                  fontSize: theme.typography.body2.fontSize,
                  my: (theme) => `${theme.spacing(6)} !important`,
                }}
              >
                or
              </Divider>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconButton
                  href="/"
                  component={Link}
                  sx={{ color: "#497ce2" }}
                  onClick={(e) => e.preventDefault()}
                >
                  <Icon icon="mdi:facebook" />
                </IconButton>
                <IconButton
                  href="/"
                  component={Link}
                  sx={{ color: "#1da1f2" }}
                  onClick={(e) => e.preventDefault()}
                >
                  <Icon icon="mdi:twitter" />
                </IconButton>
                <IconButton
                  href="/"
                  component={Link}
                  onClick={(e) => e.preventDefault()}
                  sx={{
                    color: (theme) =>
                      theme.palette.mode === "light" ? "#272727" : "grey.300",
                  }}
                >
                  <Icon icon="mdi:github" />
                </IconButton>
                <IconButton
                  href="/"
                  component={Link}
                  sx={{ color: "#db4437" }}
                  onClick={(e) => e.preventDefault()}
                >
                  <Icon icon="mdi:google" />
                </IconButton>
              </Box>
            </form>
          </Box>
        </Box>
      </RightWrapper>
      {!hidden ? (
        <Box
          sx={{
            flex: 1,
            display: "flex",
            position: "relative",
            alignItems: "center",
            borderRadius: "20px",
            justifyContent: "center",
            backgroundColor: "customColors.bodyBg",
            margin: (theme) => theme.spacing(8, 0, 8, 8),
          }}
        >
          <RegisterIllustration
            alt="register-illustration"
            src={`/images/pages/${imageSource}-${theme.palette.mode}.png`}
          />
          <FooterIllustrationsV2 />
        </Box>
      ) : null}
    </Box>
  );
};
Register.getLayout = (page) => <BlankLayout>{page}</BlankLayout>;
Register.guestGuard = true;

export default Register;
