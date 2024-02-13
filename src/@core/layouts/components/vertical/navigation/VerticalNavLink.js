// ** Next Imports
import Link from "next/link";
import { useRouter } from "next/router";

// ** MUI Imports
import Chip from "@mui/material/Chip";
import ListItem from "@mui/material/ListItem";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";

// ** Configs Import
import themeConfig from "src/configs/themeConfig";

// ** Custom Components Imports
import UserIcon from "src/layouts/components/UserIcon";
import Translations from "src/layouts/components/Translations";
import CanViewNavLink from "src/layouts/components/acl/CanViewNavLink";

// ** Util Imports
import { hexToRGBA } from "src/@core/utils/hex-to-rgba";
import { handleURLQueries } from "src/@core/layouts/utils";
import Image from "next/image";

// ** Styled Components
const MenuNavLink = styled(ListItemButton)(({ theme }) => ({
  width: "100%",
  color: "red !important",
  marginLeft: theme.spacing(3.5),
  marginRight: theme.spacing(3.5),
  borderRadius: theme.shape.borderRadius,
  transition: "padding-left .25s ease-in-out, padding-right .25s ease-in-out",
  "&:hover": {
    // backgroundColor: "#1DB2FF",
    color: "#fff !important",
  },
  "&.active": {
    "&, &:hover": {
      background: "#fff",
      color: "#fff",
      "&.Mui-focusVisible": {
        background: `linear-gradient(72.47deg, ${
          theme.palette.primary.dark
        } 22.16%, ${hexToRGBA(theme.palette.primary.dark, 0.7)} 76.47%)`,
      },
    },
    "& .MuiTypography-root, & svg": {
      color: `${theme.palette.primary.main} !important`,

    },
  },
  "&.activeAsGroup": {
    "&, &:hover": {
    background: `${theme.palette.primary.main} !important`,
     //  background: `#000 !important`,
      color: "#fff",
      "&.Mui-focusVisible": {
        background: `linear-gradient(72.47deg, ${
          theme.palette.primary.dark
        } 22.16%, ${hexToRGBA(theme.palette.primary.dark, 0.7)} 76.47%)`,
      },
    },
    "& .MuiTypography-root, & svg": {
      color: `#fff !important`,

    },
  },
}));

const MenuItemTextMetaWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  justifyContent: "space-between",
  transition: "opacity .25s ease-in-out",
  ...(themeConfig.menuTextTruncate && { overflow: "hidden" }),
}));

const VerticalNavLink = ({
  item,
  parent,
  navHover,
  settings,
  navVisible,
  isSubToSub,
  collapsedNavWidth,
  toggleNavVisibility,
  navigationBorderWidth,
}) => {
  // ** Hooks
  const router = useRouter();

  // ** Vars
  const { navCollapsed } = settings;
  const icon = parent && !item.icon ? themeConfig.navSubItemIcon : item.icon;

  const isNavLinkActive = () => {
    if (router.pathname === item.path || handleURLQueries(router, item.path)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <CanViewNavLink navLink={item}>
      <ListItem
        disablePadding
        className="nav-link"
        disabled={item.disabled || false}
        sx={{ mt: 1, px: "0 !important" }}
      >
        <MenuNavLink
          component={Link}
          {...(item.disabled && { tabIndex: -1 })}
          className={isNavLinkActive() ? item.type==="asGroup" ? "activeAsGroup" :  "active" : ""}
          href={item.path === undefined ? "/" : `${item.path}`}
          {...(item.openInNewTab ? { target: "_blank" } : null)}
          onClick={(e) => {
            if (item.path === undefined) {
              e.preventDefault();
              e.stopPropagation();
            }
            if (navVisible) {
              toggleNavVisibility();
            }
          }}
          sx={{
            py: 2,
            ...(item.disabled
              ? { pointerEvents: "none" }
              : { cursor: "pointer" }),
            px:
              navCollapsed && !navHover
                ? (collapsedNavWidth - navigationBorderWidth - 22 - 28) / 8
                : 4,
            "& .MuiTypography-root, & svg": {
              color: "#3D3D3D",
              fontWeight:600,
              fontSize:"12px"
            },
          }}
        >
          <ListItemIcon
            sx={{
              transition: "margin .25s ease-in-out",
              ...(navCollapsed && !navHover ? { mr: 0 } : { mr: 2 }),
              ...(parent ? { ml: 1.5, mr: 3.5 } : {}),
              "& svg": {
                fontSize: "0.625rem",
                ...(!parent ? { fontSize: "1.375rem" } : {}),
                ...(parent && item.icon ? { fontSize: "0.875rem" } : {}),
              },
            }}
          >
            {item.icon ? (

                <Image src={isNavLinkActive() ? item.activeIcon : item.icon} alt="item" style={{
                  width: 25,
                  height: 25
                }}/>

            ) : (
              <UserIcon icon={icon} />
            )}
          </ListItemIcon>

          <MenuItemTextMetaWrapper
            sx={{
              ...(isSubToSub ? { ml: 2 } : {}),
              ...(navCollapsed && !navHover ? { opacity: 0 } : { opacity: 1 }),
            }}
          >
            <Typography
              {...((themeConfig.menuTextTruncate ||
                (!themeConfig.menuTextTruncate &&
                  navCollapsed &&
                  !navHover)) && {
                noWrap: true,
              })}
              sx={{
                color: "#3D3D3D",
                fontWeight:600,
                fontSize: item.type === "asGroup" ? "14px !important" : "12px",        }}
            >
              <Translations text={item.title} />
            </Typography>
            {item.badgeContent ? (
              <Chip
                size="small"
                label={item.badgeContent}
                color={item.badgeColor || "primary"}
                sx={{
                  height: 22,
                  minWidth: 22,
                  "& .MuiChip-label": { px: 1.5, textTransform: "capitalize" },
                }}
              />
            ) : null}
          </MenuItemTextMetaWrapper>
        </MenuNavLink>
      </ListItem>
    </CanViewNavLink>
  );
};

export default VerticalNavLink;

/*

background: `linear-gradient(72.47deg, ${
        theme.direction === 'ltr' ? theme.palette.primary.main : hexToRGBA(theme.palette.primary.main, 0.7)
      } 22.16%, ${
        theme.direction === 'ltr' ? hexToRGBA(theme.palette.primary.main, 0.7) : theme.palette.primary.main
      } 76.47%)`


*/
