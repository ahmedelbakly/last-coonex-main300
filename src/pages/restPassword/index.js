// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'
import { useRouter } from 'next/router'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
import IconButton from '@mui/material/IconButton'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV2 from 'src/views/pages/auth/FooterIllustrationsV2'
import { useSettings } from 'src/@core/hooks/useSettings'
import { useState } from 'react'
import { SuccessOverlay } from 'src/@core/components/overlays'

// Styled Components
const ForgotPasswordIllustration = styled('img')(({ theme }) => ({
  zIndex: 2,
  maxHeight: 650,
  marginTop: theme.spacing(12),
  marginBottom: theme.spacing(12),
  [theme.breakpoints.down(1540)]: {
    maxHeight: 550
  },
  [theme.breakpoints.down('lg')]: {
    maxHeight: 500
  }
}))

const RightWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    maxWidth: 450
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: 600
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: 750
  }
}))

const LinkStyled = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  justifyContent: 'center',
  color: theme.palette.primary.main,
  fontSize: theme.typography.body1.fontSize
}))

const ForgotPassword = () => {
  // ** Hooks
  const theme = useTheme()
  const { settings } = useSettings()
  const { skin } = settings
  const router = useRouter()

  const [newPassword, setNewPassword] = useState({
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [showOverLaySuccess, setShowOverlaySuccess] = useState(false)
  console.log('====================================')
  console.log(newPassword)
  console.log('====================================')
  // ** Vars
  const hidden = useMediaQuery(theme.breakpoints.down('md'))
  // * handle image source * //
  const imageSource =
    skin === 'bordered'
      ? 'auth-v2-login-illustration-bordered'
      : 'auth-v2-login-illustration'

  //* handle change inputs for rest new password *//
  const handlePasswordInputChange = e => {
    const { name, value } = e.target

    if (name === 'password' && value !== '')
      setNewPassword({ ...newPassword, [name]: value })

    if (name === 'confirmPassword' && value !== '')
      setNewPassword({ ...newPassword, [name]: value })
  }

  // *handle onsubmit form   *//

  const forgetPasswordApi = 'http://localhost:3001/user/forgetPassword/'

  //** handle submit rest password */
  const handleSubmit = async e => {
    try {
      e.preventDefault()
      if (newPassword.password && newPassword.confirmPassword) {
        if (newPassword.password === newPassword.confirmPassword) {
          if (newPassword.password.length < 8)
            return setError('password must be more than 8 characters')

          return setShowOverlaySuccess(true)
        } else {
          return setError('password not match')
        }

        //  axios.post(forgetPasswordApi,email)
      } else {
        setError('password and confirm Password is required')
      }
    } catch (error) {
      console.log('====================================')
      console.log(error)
      console.log('====================================')
    }
  }

  return (
    <Box className='content-right' sx={{ backgroundColor: 'background.paper' }}>
      {showOverLaySuccess && (
        <SuccessOverlay
          setState={setShowOverlaySuccess}
          message={'Reset Password Successfully'}
        />
      )}
      <RightWrapper>
        <Box
          onClick={() => setError('')}
          sx={{
            p: [6, 12],
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box sx={{ width: '100%', maxWidth: 400 }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='169'
              height='29'
              viewBox='0 0 169 29'
              fill='none'
            >
              <g clip-path='url(#clip0_905_43528)'>
                <path
                  d='M95.5388 0.340637C96.0111 0.552994 96.5331 0.556147 97.0255 0.703325C99.5636 1.46129 101.362 3.03925 102.427 5.43719C102.821 6.32446 103.036 7.27376 103.039 8.24723C103.05 12.3766 103.036 16.5071 103.05 20.6364C103.054 21.5037 103.373 22.2333 104.172 22.7137C105.432 23.4707 106.975 22.74 107.377 21.4112C107.449 21.1736 107.477 20.9403 107.477 20.6953C107.476 14.2552 107.482 7.81621 107.464 1.37614C107.463 0.871528 107.585 0.736966 108.097 0.746427C109.926 0.781119 111.757 0.767453 113.587 0.753786C113.919 0.751684 114.041 0.827375 114.04 1.18376C114.029 7.72791 114.069 14.2731 114.006 20.8173C113.988 22.7169 113.34 24.4431 111.919 25.856C110.703 27.065 109.456 28.1614 107.716 28.5241C107.283 28.6145 106.853 28.7133 106.421 28.809H104.097C102.965 28.7438 101.881 28.5199 100.871 27.9669C97.9691 26.3785 96.4042 23.9406 96.345 20.6606C96.2721 16.6711 96.3239 12.6804 96.3313 8.68982C96.3324 7.94972 96.1453 7.29373 95.5663 6.81225C94.9925 6.33603 94.3311 6.14049 93.5967 6.42013C92.819 6.71553 92.3953 7.30319 92.2506 8.10216C92.1998 8.37969 92.2168 8.66038 92.2168 8.94002C92.2168 15.0836 92.2168 21.2262 92.2168 27.3698C92.2168 28.5252 92.1925 28.5493 91.0418 28.5504C89.4399 28.5504 87.838 28.5557 86.2372 28.5483C85.4522 28.5451 85.3444 28.4421 85.3444 27.6726C85.3401 21.1968 85.3 14.721 85.3592 8.24618C85.393 4.60248 87.819 1.65157 91.3968 0.556147C91.9188 0.396355 92.4756 0.457328 93.0061 0.341688H95.542L95.5388 0.340637Z'
                  fill='#1DB2FF'
                />
                <path
                  d='M34.1597 0.340637H38.1739C39.3299 0.424739 40.4636 0.600301 41.5678 0.978758C43.5649 1.66419 45.3559 2.69758 46.8257 4.19354C49.0636 6.47269 50.451 9.20073 50.8673 12.384C51.2741 15.4999 50.8768 18.5003 49.4229 21.3061C47.7619 24.5146 45.2449 26.799 41.8098 28.05C40.5978 28.4915 39.3542 28.7417 38.0682 28.8069H34.2654C32.9974 28.7417 31.7612 28.5199 30.5746 28.0616C25.4541 26.0831 22.5018 22.3384 21.5614 17.0054C21.1071 14.4287 21.2994 11.8689 22.2261 9.41204C24.0181 4.66451 27.4395 1.72306 32.3941 0.536173C32.9742 0.397406 33.5775 0.455226 34.1608 0.340637H34.1597Z'
                  fill='#1DB2FF'
                />
                <path
                  d='M65.6424 0.340637H69.6566C70.9066 0.407918 72.1217 0.636044 73.3009 1.06601C76.6177 2.27602 79.0839 4.43218 80.7756 7.51975C82.2169 10.15 82.6955 12.9653 82.4535 15.8942C81.9506 21.9978 77.8413 27.0555 71.6822 28.5599C70.9795 28.7312 70.2568 28.6902 69.5509 28.809H65.7481C64.6281 28.7218 63.5196 28.584 62.4524 28.1982C57.0382 26.2418 53.9106 22.4026 53.0314 16.773C52.556 13.7286 52.9459 10.7577 54.3195 7.98021C55.8167 4.95256 58.1213 2.72597 61.2658 1.37614C62.6712 0.772709 64.1188 0.419482 65.6414 0.340637H65.6424Z'
                  fill='#1DB2FF'
                />
                <path
                  d='M0.248047 12.1053C0.50164 11.3631 0.586171 10.5789 0.859841 9.83774C1.66923 7.64374 2.88436 5.7462 4.70918 4.23448C6.77596 2.52196 9.13332 1.50223 11.7728 1.0649C14.1207 0.675931 16.4865 0.777904 18.8481 0.755828C19.1154 0.753725 19.1672 0.864109 19.1661 1.09959C19.1587 2.7627 19.1534 4.42476 19.1703 6.08787C19.1735 6.43373 19.0023 6.43689 18.7487 6.43584C17.3054 6.42953 15.8609 6.39273 14.4186 6.44319C12.6709 6.50522 11.0997 7.12337 9.73349 8.20302C7.94249 9.61803 7.11408 11.5177 6.89113 13.7569C6.69143 15.7616 7.11092 17.6003 8.19186 19.2708C9.31401 21.0043 10.9793 21.9988 12.971 22.5003C13.866 22.7253 14.7694 22.7137 15.6771 22.7126C16.6809 22.7105 17.6836 22.7263 18.6864 22.7053C19.0456 22.6979 19.1746 22.7915 19.1693 23.1689C19.1492 24.7437 19.1503 26.3195 19.1693 27.8943C19.1735 28.2739 19.0837 28.4116 18.6758 28.4011C17.4977 28.3737 16.3153 28.4347 15.1382 28.3821C13.1253 28.2928 11.1219 28.1151 9.19566 27.4486C6.91966 26.6612 4.91628 25.4396 3.344 23.6241C1.73896 21.7686 0.707685 19.6093 0.333635 17.1661C0.327295 17.122 0.277633 17.0841 0.248047 17.0431C0.248047 15.3969 0.248047 13.7516 0.248047 12.1053Z'
                  fill='#1DB2FF'
                />
                <path
                  d='M168.645 2.33589C165.749 5.61164 162.855 8.8874 159.959 12.1632C159.343 12.8591 159.044 12.9074 158.234 12.4417C157.14 11.8131 156.043 11.1897 154.96 10.5421C154.226 10.1027 154.144 9.48031 154.714 8.84535C156.921 6.38748 159.137 3.93697 161.34 1.4749C161.645 1.13323 161.996 0.988159 162.45 0.98921C164.104 0.995518 165.759 0.998672 167.413 0.970287C167.962 0.960826 168.369 1.12798 168.644 1.6V2.33483L168.645 2.33589Z'
                  fill='#1DB2FF'
                />
                <path
                  d='M160.616 28.8087C160.526 28.6362 160.338 28.6909 160.199 28.6383C159.102 28.2178 158.544 27.3653 158.651 26.2457C158.755 25.1544 159.537 24.325 160.644 24.1284C161.672 23.9465 162.833 24.4553 163.195 25.3668C163.746 26.7503 163.295 28.3314 161.573 28.7067C161.491 28.7245 161.396 28.7067 161.355 28.8087H160.615H160.616Z'
                  fill='#1DB2FF'
                />
                <path
                  d='M148.784 0.340637C148.824 0.464687 148.947 0.463636 149.039 0.497276C150.387 0.99768 150.963 2.30546 150.424 3.65003C149.975 4.77174 148.385 5.34468 147.197 4.81379C145.942 4.25241 145.443 2.89838 146.038 1.66103C146.283 1.15011 146.702 0.812657 147.201 0.576122C147.329 0.515148 147.463 0.489917 147.516 0.340637H148.784Z'
                  fill='#1DB2FF'
                />
                <path
                  d='M131.322 0.760434C133.223 0.760434 135.124 0.769895 137.025 0.752024C137.397 0.74887 137.497 0.850843 137.492 1.21879C137.472 2.79359 137.471 4.36944 137.492 5.94424C137.497 6.33321 137.399 6.4436 136.998 6.44254C133.567 6.42572 130.134 6.43413 126.702 6.43308C125.534 6.43308 124.323 7.37923 124.177 8.687C124.03 10.0063 124.878 11.189 126.137 11.4739C126.462 11.5475 126.787 11.5811 127.121 11.5811C129.955 11.5748 132.789 11.5854 135.623 11.5685C136.059 11.5654 136.238 11.6421 136.226 12.1341C136.191 13.6385 136.195 15.145 136.226 16.6493C136.235 17.0835 136.088 17.1602 135.692 17.1581C132.859 17.1424 130.025 17.1434 127.191 17.1529C126.067 17.1571 125.19 17.6354 124.566 18.5773C123.68 19.9167 124.296 21.8132 125.781 22.4229C126.298 22.6352 126.808 22.7172 127.354 22.7172C130.557 22.713 133.761 22.7236 136.965 22.7057C137.381 22.7036 137.5 22.8192 137.494 23.2303C137.472 24.7882 137.473 26.3462 137.494 27.9032C137.499 28.2942 137.386 28.4046 136.99 28.4025C133.382 28.3878 129.773 28.4172 126.165 28.3878C123.673 28.3668 121.439 27.6141 119.694 25.768C118.316 24.312 117.577 22.5732 117.506 20.5485C117.423 18.2031 118.247 16.2498 119.965 14.6687C120.258 14.3986 120.189 14.2713 119.946 14.0411C118.856 13.0067 118.057 11.7662 117.774 10.2997C117.322 7.95742 117.751 5.7834 119.288 3.86588C120.622 2.20278 122.359 1.26504 124.423 0.877125C124.883 0.79092 125.36 0.769895 125.83 0.766741C127.66 0.754126 129.491 0.761485 131.322 0.761485V0.760434Z'
                  fill='#1DB2FF'
                />
                <path
                  d='M163.958 27.5937C164.742 26.4709 164.742 25.7529 163.899 24.6144C162.859 23.212 161.449 22.2259 159.977 21.3387C157.231 19.6829 154.37 18.23 151.541 16.7236C149.215 15.4852 146.976 14.1164 145.065 12.2799C144.775 12.0023 144.511 11.6975 144.247 11.3957C143.625 10.6851 143.301 9.89979 143.346 8.91265C143.42 7.30526 143.361 5.69261 143.382 4.08312C143.398 2.87521 143.942 2.18768 145.229 1.76086C144.663 2.41055 144.498 3.07916 144.74 3.83397C144.965 4.53937 145.402 5.1039 145.939 5.58433C147.133 6.65032 148.497 7.48292 149.848 8.32919C153.884 10.8596 158.04 13.1892 162.198 15.5157C163.753 16.3861 164.922 17.6424 165.563 19.3339C165.702 19.6976 165.769 20.075 165.769 20.4619C165.774 22.0724 165.778 23.6819 165.775 25.2925C165.773 26.2859 165.042 27.2026 163.957 27.5927L163.958 27.5937Z'
                  fill='#1DB2FF'
                />
                <path
                  d='M143.839 28.3359C142.871 28.3359 141.903 28.3328 140.936 28.337C140.488 28.3391 140.021 28.2623 139.894 27.8008C139.758 27.3141 139.677 26.7811 140.067 26.3101C141.97 24.0078 143.862 21.6971 145.757 19.3886C146.489 18.4971 147.215 17.5993 147.948 16.7089C148.519 16.0161 148.901 15.953 149.67 16.4145C150.915 17.163 152.162 17.9115 153.406 18.6642C154.197 19.1436 154.351 19.8953 153.769 20.6175C151.819 23.0407 149.852 25.4512 147.894 27.8681C147.61 28.2192 147.26 28.3853 146.798 28.3769C145.813 28.359 144.827 28.3717 143.841 28.3717C143.841 28.359 143.841 28.3464 143.841 28.3338L143.839 28.3359Z'
                  fill='#1DB2FF'
                />
                <path
                  d='M44.0828 14.4798C44.1747 16.6727 43.5439 18.5955 42.2506 20.2428C41.027 21.8019 39.3902 22.7596 37.3689 23.0445C35.729 23.2758 34.163 23.0792 32.7017 22.3454C30.5578 21.2689 29.1873 19.5196 28.5956 17.2131C27.8401 14.2695 28.1708 11.4469 30.0126 8.9764C31.4454 7.05468 33.4445 6.05597 35.9118 5.99815C37.5876 5.9582 39.124 6.30933 40.506 7.2418C42.314 8.46233 43.3632 10.198 43.8778 12.2816C44.0627 13.028 44.1324 13.7849 44.0828 14.4798Z'
                  fill='white'
                />
                <path
                  d='M67.5547 6.01703C69.9089 5.9119 71.7633 6.75081 73.2732 8.31825C74.4978 9.58924 75.1973 11.1357 75.4805 12.8923C75.7711 14.6942 75.62 16.4235 74.9395 18.115C73.8956 20.7127 72.0338 22.4568 69.2738 22.9782C66.2888 23.5417 63.6758 22.728 61.6766 20.3111C60.5449 18.9434 60.0166 17.3728 59.8159 15.6351C59.5559 13.3854 59.9532 11.2965 61.2074 9.40632C62.467 7.50773 64.2728 6.40074 66.5223 6.02649C66.8985 5.96341 67.2947 6.01808 67.5536 6.01808L67.5547 6.01703Z'
                  fill='white'
                />
              </g>
              <defs>
                <clipPath id='clip0_905_43528'>
                  <rect
                    width='168.428'
                    height='28.4894'
                    fill='white'
                    transform='translate(0.234375 0.330078)'
                  />
                </clipPath>
              </defs>
            </svg>
            <Box sx={{ my: 6 }}>
              <Typography
                sx={{
                  mb: 1.5,
                  fontWeight: 500,
                  fontSize: '1.625rem',
                  lineHeight: 1.385
                }}
              >
                Rest Password? 🔒
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Please type new password
              </Typography>
            </Box>
            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
              {error && (
                <span
                  style={{
                    color: 'red',
                    marginBottom: '7px',
                    fontWeight: 600,
                    display: 'inline-block',
                    textTransform: 'capitalize',
                    fontSize: '14px'
                  }}
                >
                  {error}
                </span>
              )}
              <CustomTextField
                fullWidth
                sx={{ mb: 4 }}
                name='password'
                label='Password'
                placeholder='add your password'
                onChange={e => handlePasswordInputChange(e)}
                value={newPassword.password}
                id='rest-password'
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onMouseDown={e => e.preventDefault()}
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <Icon
                          fontSize='1.25rem'
                          icon={showPassword ? 'tabler:eye' : 'tabler:eye-off'}
                        />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              <CustomTextField
                fullWidth
                sx={{ mb: 4 }}
                name='confirmPassword'
                label='Confirm Password'
                placeholder='add confirm password '
                onChange={e => handlePasswordInputChange(e)}
                value={newPassword.confirmPassword}
                id='rest-confirmPassword'
                type={showConfirmPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onMouseDown={e => e.preventDefault()}
                        onClick={() => setShowPassword(!showConfirmPassword)}
                      >
                        <Icon
                          fontSize='1.25rem'
                          icon={
                            showConfirmPassword
                              ? 'tabler:eye'
                              : 'tabler:eye-off'
                          }
                        />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              <Button
                fullWidth
                type='submit'
                variant='contained'
                sx={{ mb: 4 }}
              >
                Set New Password
              </Button>
              <Typography
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '& svg': { mr: 1 }
                }}
              >
                <LinkStyled href='/login'>
                  <Icon fontSize='1.25rem' icon='tabler:chevron-left' />
                  <span>Back to login</span>
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
            display: 'flex',
            position: 'relative',
            alignItems: 'center',
            borderRadius: '20px',
            justifyContent: 'center',
            backgroundColor: 'customColors.bodyBg',
            margin: theme => theme.spacing(8, 0, 8, 8)
          }}
        >
          <ForgotPasswordIllustration
            alt='forgot-password-illustration'
            src={`/images/pages/${imageSource}-${theme.palette.mode}.png`}
          />
          <FooterIllustrationsV2 />
        </Box>
      ) : null}
    </Box>
  )
}
ForgotPassword.getLayout = page => <BlankLayout>{page}</BlankLayout>
ForgotPassword.guestGuard = true

export default ForgotPassword
