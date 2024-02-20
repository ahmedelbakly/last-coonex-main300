import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import styleSheet from "./style.module.css";
import { useAuth } from "src/hooks/useAuth";
import avatar from "../../../public/images/cms/3.png";
import Image from "next/image";
import CustomInputs from "../forms/form-elements/custom-inputs";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box } from "@mui/system";
import CustomTextField from "src/@core/components/mui/text-field";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material/styles";
import { FaRegCircleUser } from "react-icons/fa6";
//** start  handle useForm ********************************************* */
const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  domain: yup.string().required(),
  jobTitle: yup.string().required(),
  phoneNumber: yup.number().required(),
  city: yup.string().required(),
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const names = ["alex", "cairo", "mekka"];

function getStyles(name, theme) {
  return {};
}

//** start  handle useForm ********************************************* */

const Profile = () => {
  const[file, setFile] = React.useState(true);
  const theme = useTheme();
  const { user, setPages } = useAuth();
  setPages("user profile");





  //** start  handle useForm */



  const defaultValues = {
    firstName: user?.firstname,
    lastName: user?.lastname,
    email: user?.email,
    domain: user?.domain,
    phoneNumber: user?.phone,
    city: user?.city,
    jobTitle: user?.job,
  };

  console.log(defaultValues);
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
  const api = "";
  const onSubmit = (data) => {
    console.log(data);

    try {
      // axios.post(api, data).then((response) => {
      //   console.log(response.data);
      //   if (response.data.status === "success register") {
      //     console.log("success register");
      //     router.push("/login");
      //   }
      // });
    } catch (error) {
      // setError("phoneNumber", {
      //   type: "manual",
      //   message: `${error.response.data.message}`,
      // });
    }
  };
  return (
    <Grid container className={styleSheet.profileContainer}>
      {/** START OF PROFILE title */}
      <h2 className={styleSheet.title}>Profile Details</h2>
      {/** END OF PROFILE title */}
      {/** START PROFILE Image */}
      <div className={`${styleSheet.imageDiv}`}>
        {file ? (
 <Image className={styleSheet.image} src={avatar} alt="avatar" />

        ):<div className={styleSheet.emptyImage}>

            <FaRegCircleUser className={styleSheet.icon} />

          </div>}

        <div className={styleSheet.btnAndText}>
          <div className={styleSheet.btns}>
            <label htmlFor="upload-btn" className={styleSheet.labelBtn}>
              Upload new photo Your Ad
            </label>
            <input id="upload-btn" type="file" style={{ display: "none" }} />
            <button className={styleSheet.restBtn}>Reset</button>
          </div>
          <p className={styleSheet.text}>
            Allowed JPG, GIF or PNG. Max size of 800K
          </p>
        </div>
      </div>
      {/** END PROFILE Image */}
      {/** START OF PROFILE INFO */}
      <form className={styleSheet.formInfo} onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ mb: 4, width: "49%" }}>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: false }}
            render={({ field: { value, onChange, onBlur } }) => (
              <CustomTextField
                sx={{ color: "black" }}
                fullWidth
                label="First Name"
                value={value }
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
        <Box sx={{ mb: 4, width: "49%" }}>
          <Controller
            name="lastName"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange, onBlur } }) => (
              <CustomTextField
                fullWidth
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
        <Box sx={{ mb: 4, width: "49%" }}>
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange, onBlur } }) => (
              <CustomTextField
                fullWidth
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
        <Box sx={{ mb: 4, width: "49%" }}>
          <Controller
            name="phoneNumber"
            control={control}
            rules={{ required: false }}
            render={({ field: { value, onChange, onBlur } }) => (
              <CustomTextField
                type="number"
                fullWidth
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
        <Box sx={{ mb: 4, width: "49%" }}>
          <Controller
            name="jobTitle"
            control={control}
            rules={{ required: false }}
            render={({ field: { value, onChange, onBlur } }) => (
              <CustomTextField
                fullWidth
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

        <Box sx={{ mb: 4, width: "49%" }}>
          <Controller
            name="domain"
            control={control}
            rules={{ required: false }}
            render={({ field: { value, onChange, onBlur } }) => (
              <CustomTextField
                fullWidth
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
        <Box sx={{ mb: 4, width: "100%" }}>
          <Controller
            name="city"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange, onBlur } }) => (
              <div className={styleSheet.select}>
                <label htmlFor=""> City</label>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={Boolean(errors.city)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {errors.city && <Typography>{errors.city.message}</Typography>}
              </div>
            )}
          />
        </Box>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </div>
      </form>

      {/** END OF PROFILE INFO */}
    </Grid>
  );
};

export default Profile;
