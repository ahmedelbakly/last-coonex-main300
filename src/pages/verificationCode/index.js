// ** Next Import
import Link from "next/link";

// ** MUI Components
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled, useTheme } from "@mui/material/styles";
 //* import router from next *//
 import { useRouter } from 'next/router'
// ** Custom Component Import
import CustomTextField from "src/@core/components/mui/text-field";

// ** Icon Imports
import Icon from "src/@core/components/icon";

// ** Layout Import
import BlankLayout from "src/@core/layouts/BlankLayout";

// ** Demo Imports
import FooterIllustrationsV2 from "src/views/pages/auth/FooterIllustrationsV2";
import { useSettings } from "src/@core/hooks/useSettings";
import { fontSize, letterSpacing, textAlign } from "@mui/system";
import { verify } from "jsonwebtoken";
import { useState } from "react";
import Alert from "src/@core/theme/overrides/alerts";

// Styled Components
const ForgotPasswordIllustration = styled("img")(({ theme }) => ({
  zIndex: 2,
  maxHeight: 650,
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
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  justifyContent: "center",
  color: theme.palette.primary.main,
  fontSize: theme.typography.body1.fontSize,
}));

const ForgotPassword = () => {
  const [verifyCode,setVerifyCode]=useState("");
  const [error,setError]=useState("")
  // ** Hooks
  const theme = useTheme();
  const { settings } = useSettings();
 const router = useRouter()
  const { skin } = settings;

  // ** Vars
  const hidden = useMediaQuery(theme.breakpoints.down("md"));
  const imageSource =
    skin === "bordered"
      ? "auth-v2-login-illustration-bordered"
      : "auth-v2-login-illustration";
  // handle verification code
  const verificationCodeUrl = "http://localhost:3001/user/vericationCode/";
  const handleVerificationCode = async() => {
    try {
      if(verifyCode.length === 4){
        console.log(verifyCode);
        router.push("/restPassword")
        //await axios
        // .post(verificationCodeUrl, verifyCode)
        // .then((res) => {
        //   console.log(res.data);
        // })
        // .catch((err) => {
        //   console.log(err);
        // });
      }else {
        setError("code must be 4 digits")
      }
    } catch (error) {
     console.log('====================================');
     console.log(error);
     console.log('====================================');
    }



    // axios.post(verificationCodeUrl, verifyCode);
  };
  const handleResendCode = () => {
    alert("resend  Verification Code ");
  };

// handle change code input
const handleChangeCodeInput = (e) => {
  const code = e.target.value;
  setVerifyCode(code);
  console.log(verifyCode);
};


  return (
    <Box className="content-right" sx={{ backgroundColor: "background.paper" }}>
      <RightWrapper >
        <Box onClick = {()=> console.log("")}
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
              <g clip-path="url(#clip0_457_55879)">
                <path
                  d="M95.5392 0.340637C96.0115 0.552994 96.5335 0.556147 97.0259 0.703325C99.5639 1.46129 101.362 3.03925 102.427 5.43719C102.822 6.32446 103.036 7.27376 103.039 8.24723C103.051 12.3766 103.036 16.5071 103.051 20.6364C103.054 21.5037 103.373 22.2333 104.172 22.7137C105.432 23.4707 106.975 22.74 107.378 21.4112C107.45 21.1736 107.477 20.9403 107.477 20.6953C107.476 14.2552 107.482 7.81621 107.464 1.37614C107.463 0.871528 107.585 0.736966 108.097 0.746427C109.926 0.781119 111.758 0.767453 113.588 0.753786C113.919 0.751684 114.041 0.827375 114.04 1.18376C114.029 7.72791 114.069 14.2731 114.006 20.8173C113.988 22.7169 113.34 24.4431 111.919 25.856C110.703 27.065 109.456 28.1614 107.716 28.5241C107.284 28.6145 106.854 28.7133 106.422 28.809H104.097C102.965 28.7438 101.881 28.5199 100.871 27.9669C97.9695 26.3785 96.4046 23.9406 96.3454 20.6606C96.2725 16.6711 96.3243 12.6804 96.3317 8.68982C96.3327 7.94972 96.1457 7.29373 95.5667 6.81225C94.9929 6.33603 94.3315 6.14049 93.5971 6.42013C92.8194 6.71553 92.3957 7.30319 92.2509 8.10216C92.2002 8.37969 92.2171 8.66038 92.2171 8.94002C92.2171 15.0836 92.2171 21.2262 92.2171 27.3698C92.2171 28.5252 92.1928 28.5493 91.0421 28.5504C89.4403 28.5504 87.8384 28.5557 86.2376 28.5483C85.4525 28.5451 85.3447 28.4421 85.3447 27.6726C85.3405 21.1968 85.3004 14.721 85.3595 8.24618C85.3933 4.60248 87.8194 1.65157 91.3972 0.556147C91.9191 0.396355 92.476 0.457328 93.0064 0.341688H95.5424L95.5392 0.340637Z"
                  fill="#1DB2FF"
                />
                <path
                  d="M34.1601 0.340637H38.1743C39.3302 0.424739 40.464 0.600301 41.5682 0.978758C43.5652 1.66419 45.3563 2.69758 46.826 4.19354C49.064 6.47269 50.4514 9.20073 50.8677 12.384C51.2745 15.4999 50.8772 18.5003 49.4233 21.3061C47.7622 24.5146 45.2453 26.799 41.8102 28.05C40.5982 28.4915 39.3545 28.7417 38.0686 28.8069H34.2658C32.9978 28.7417 31.7615 28.5199 30.5749 28.0616C25.4545 26.0831 22.5022 22.3384 21.5618 17.0054C21.1074 14.4287 21.2998 11.8689 22.2264 9.41204C24.0185 4.66451 27.4399 1.72306 32.3945 0.536173C32.9746 0.397406 33.5779 0.455226 34.1612 0.340637H34.1601Z"
                  fill="#1DB2FF"
                />
                <path
                  d="M65.6427 0.340637H69.6568C70.9068 0.407918 72.122 0.636044 73.3012 1.06601C76.618 2.27602 79.0842 4.43218 80.7759 7.51975C82.2171 10.15 82.6958 12.9653 82.4538 15.8942C81.9508 21.9978 77.8416 27.0555 71.6824 28.5599C70.9798 28.7312 70.257 28.6902 69.5512 28.809H65.7483C64.6283 28.7218 63.5199 28.584 62.4527 28.1982C57.0385 26.2418 53.9108 22.4026 53.0317 16.773C52.5562 13.7286 52.9461 10.7577 54.3197 7.98021C55.817 4.95256 58.1215 2.72597 61.2661 1.37614C62.6714 0.772709 64.119 0.419482 65.6416 0.340637H65.6427Z"
                  fill="#1DB2FF"
                />
                <path
                  d="M0.248413 12.1053C0.502006 11.3631 0.586537 10.5789 0.860207 9.83774C1.66959 7.64374 2.88473 5.7462 4.70954 4.23448C6.77633 2.52196 9.13369 1.50223 11.7732 1.0649C14.121 0.675931 16.4868 0.777904 18.8484 0.755828C19.1158 0.753725 19.1675 0.864109 19.1665 1.09959C19.1591 2.7627 19.1538 4.42476 19.1707 6.08787C19.1739 6.43373 19.0027 6.43689 18.7491 6.43584C17.3057 6.42953 15.8613 6.39273 14.419 6.44319C12.6713 6.50522 11.1001 7.12337 9.73386 8.20302C7.94286 9.61803 7.11445 11.5177 6.8915 13.7569C6.6918 15.7616 7.11128 17.6003 8.19222 19.2708C9.31437 21.0043 10.9796 21.9988 12.9714 22.5003C13.8664 22.7253 14.7698 22.7137 15.6774 22.7126C16.6813 22.7105 17.684 22.7263 18.6868 22.7053C19.046 22.6979 19.1749 22.7915 19.1696 23.1689C19.1496 24.7437 19.1506 26.3195 19.1696 27.8943C19.1739 28.2739 19.0841 28.4116 18.6762 28.4011C17.498 28.3737 16.3157 28.4347 15.1386 28.3821C13.1257 28.2928 11.1223 28.1151 9.19603 27.4486C6.92003 26.6612 4.91664 25.4396 3.34436 23.6241C1.73933 21.7686 0.708051 19.6093 0.334001 17.1661C0.327661 17.122 0.277999 17.0841 0.248413 17.0431C0.248413 15.3969 0.248413 13.7516 0.248413 12.1053Z"
                  fill="#1DB2FF"
                />
                <path
                  d="M168.645 2.33589C165.75 5.61164 162.856 8.8874 159.959 12.1632C159.343 12.8591 159.044 12.9074 158.234 12.4417C157.14 11.8131 156.043 11.1897 154.96 10.5421C154.226 10.1027 154.145 9.48031 154.714 8.84535C156.921 6.38748 159.137 3.93697 161.34 1.4749C161.646 1.13323 161.997 0.988159 162.45 0.98921C164.104 0.995518 165.759 0.998672 167.413 0.970287C167.962 0.960826 168.369 1.12798 168.644 1.6V2.33483L168.645 2.33589Z"
                  fill="#1DB2FF"
                />
                <path
                  d="M160.616 28.8087C160.527 28.6362 160.339 28.6909 160.199 28.6383C159.102 28.2178 158.544 27.3653 158.651 26.2457C158.756 25.1544 159.538 24.325 160.645 24.1284C161.672 23.9465 162.833 24.4553 163.196 25.3668C163.746 26.7503 163.295 28.3314 161.574 28.7067C161.491 28.7245 161.396 28.7067 161.355 28.8087H160.615H160.616Z"
                  fill="#1DB2FF"
                />
                <path
                  d="M148.784 0.340637C148.824 0.464687 148.947 0.463636 149.039 0.497276C150.387 0.99768 150.963 2.30546 150.424 3.65003C149.975 4.77174 148.385 5.34468 147.197 4.81379C145.942 4.25241 145.443 2.89838 146.038 1.66103C146.283 1.15011 146.702 0.812657 147.201 0.576122C147.329 0.515148 147.463 0.489917 147.516 0.340637H148.784Z"
                  fill="#1DB2FF"
                />
                <path
                  d="M131.322 0.760434C133.223 0.760434 135.124 0.769895 137.025 0.752024C137.397 0.74887 137.497 0.850843 137.492 1.21879C137.472 2.79359 137.471 4.36944 137.492 5.94424C137.497 6.33321 137.399 6.4436 136.998 6.44254C133.567 6.42572 130.134 6.43413 126.702 6.43308C125.534 6.43308 124.323 7.37923 124.177 8.687C124.03 10.0063 124.878 11.189 126.137 11.4739C126.462 11.5475 126.787 11.5811 127.121 11.5811C129.955 11.5748 132.789 11.5854 135.623 11.5685C136.059 11.5654 136.238 11.6421 136.226 12.1341C136.191 13.6385 136.195 15.145 136.226 16.6493C136.235 17.0835 136.088 17.1602 135.692 17.1581C132.859 17.1424 130.025 17.1434 127.191 17.1529C126.067 17.1571 125.19 17.6354 124.566 18.5773C123.68 19.9167 124.296 21.8132 125.781 22.4229C126.298 22.6352 126.808 22.7172 127.354 22.7172C130.557 22.713 133.761 22.7236 136.965 22.7057C137.381 22.7036 137.5 22.8192 137.494 23.2303C137.472 24.7882 137.473 26.3462 137.494 27.9032C137.499 28.2942 137.386 28.4046 136.99 28.4025C133.382 28.3878 129.773 28.4172 126.165 28.3878C123.673 28.3668 121.439 27.6141 119.694 25.768C118.316 24.312 117.577 22.5732 117.506 20.5485C117.423 18.2031 118.247 16.2498 119.965 14.6687C120.258 14.3986 120.189 14.2713 119.946 14.0411C118.856 13.0067 118.057 11.7662 117.774 10.2997C117.322 7.95742 117.751 5.7834 119.288 3.86588C120.622 2.20278 122.359 1.26504 124.423 0.877125C124.883 0.79092 125.36 0.769895 125.83 0.766741C127.66 0.754126 129.491 0.761485 131.322 0.761485V0.760434Z"
                  fill="#1DB2FF"
                />
                <path
                  d="M163.959 27.5937C164.743 26.4709 164.743 25.7529 163.9 24.6144C162.86 23.212 161.449 22.2259 159.977 21.3387C157.231 19.6829 154.371 18.23 151.541 16.7236C149.215 15.4852 146.976 14.1164 145.065 12.2799C144.775 12.0023 144.511 11.6975 144.247 11.3957C143.626 10.6851 143.301 9.89979 143.347 8.91265C143.421 7.30526 143.362 5.69261 143.383 4.08312C143.399 2.87521 143.943 2.18768 145.23 1.76086C144.663 2.41055 144.499 3.07916 144.741 3.83397C144.966 4.53937 145.402 5.1039 145.94 5.58433C147.134 6.65032 148.497 7.48292 149.848 8.32919C153.885 10.8596 158.04 13.1892 162.198 15.5157C163.754 16.3861 164.922 17.6424 165.564 19.3339C165.702 19.6976 165.77 20.075 165.77 20.4619C165.774 22.0724 165.778 23.6819 165.775 25.2925C165.773 26.2859 165.043 27.2026 163.958 27.5927L163.959 27.5937Z"
                  fill="#1DB2FF"
                />
                <path
                  d="M143.839 28.3359C142.871 28.3359 141.903 28.3328 140.937 28.337C140.489 28.3391 140.022 28.2623 139.894 27.8008C139.758 27.3141 139.677 26.7811 140.067 26.3101C141.97 24.0078 143.862 21.6971 145.757 19.3886C146.489 18.4971 147.215 17.5993 147.948 16.7089C148.519 16.0161 148.902 15.953 149.67 16.4145C150.915 17.163 152.162 17.9115 153.406 18.6642C154.197 19.1436 154.351 19.8953 153.769 20.6175C151.819 23.0407 149.853 25.4512 147.895 27.8681C147.61 28.2192 147.261 28.3853 146.798 28.3769C145.813 28.359 144.827 28.3717 143.841 28.3717C143.841 28.359 143.841 28.3464 143.841 28.3338L143.839 28.3359Z"
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
                <clipPath id="clip0_457_55879">
                  <rect
                    width="168.428"
                    height="28.4894"
                    fill="white"
                    transform="translate(0.234619 0.330078)"
                  />
                </clipPath>
              </defs>
            </svg>
            <Box sx={{ my: 6 }}>
              <Typography
                sx={{
                  mb: 1.5,
                  fontWeight: 500,
                  fontSize: "1.625rem",
                  lineHeight: 1.385,
                }}
              >
                Verification Code 💬
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                We sent a verification code to your mobile. Enter the code from
                your email sa**********@gmail.com.
              </Typography>
            </Box>
            <form
              noValidate
              autoComplete="off"
              onSubmit={(e) => e.preventDefault()}
            >
              { error && <span style={{color:"red",marginBottom:"7px",fontWeight:600,display:"inline-block"}} >{error}</span>}
              <CustomTextField
                autoFocus
                type="text"
                label="Verification Code"
                placeholder="enter your code"
                onChange= {handleChangeCodeInput}
                value={verifyCode}

                sx={{
                  display: "flex",
                  mb: 4,
                  textAlign: "center",
                  fontSize: "25px",
                  letterSpacing: "2px",
                }}
              />
              <Button
                onClick={handleVerificationCode}
                fullWidth
                type="submit"
                variant="contained"
                sx={{ mb: 4 }}
              >
                Verify
              </Button>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "& svg": { mr: 1 },
                }}
              >
                <LinkStyled href="/login">
                  <Icon fontSize="1.25rem" icon="tabler:chevron-left" />
                  <span>
                    Didn't get the code?
                    <Button onClick={handleResendCode}>Resend</Button>
                  </span>
                </LinkStyled>
              </Typography>
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
          <ForgotPasswordIllustration
            alt="forgot-password-illustration"
            src={`/images/pages/${imageSource}-${theme.palette.mode}.png`}
          />
          <FooterIllustrationsV2 />
        </Box>
      ) : null}
    </Box>
  );
};
ForgotPassword.getLayout = (page) => <BlankLayout>{page}</BlankLayout>;
ForgotPassword.guestGuard = true;

export default ForgotPassword;
