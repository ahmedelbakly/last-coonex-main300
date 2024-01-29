// ** React Imports
import { createContext, useEffect, useState } from "react";

// ** Next Import
import { useRouter } from "next/router";

// ** Axios
import axios from "axios";

// ** Config
import authConfig from "src/configs/auth";
import { Pages } from "@mui/icons-material";


// ** Defaults
const defaultProvider = {
  user: null,
  loading: true,
  property: null,
  setProperty: () => null,
  setUser: () => null,
  leads: null,
  setLeads: () => null,
  pages: "the page name",
  setPages: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  setLeadId: () => Promise.resolve(),
  leadId: null,
  leadsId:null,
  setLeadsId: () => Promise.resolve(),
  taskId: null,
  setTaskId: () => Promise.resolve(),

};
const AuthContext = createContext(defaultProvider);

const AuthProvider = ({ children }) => {
  // ** States
  const [user, setUser] = useState(defaultProvider.user);
  const [loading, setLoading] = useState(defaultProvider.loading);
  const [property, setProperty] = useState(defaultProvider.property);
  const [leads, setLeads] = useState(defaultProvider.leads);
  const [pages, setPages] = useState(defaultProvider.pages);
  const [leadId, setLeadId] = useState(defaultProvider.leadId);
  const [taskId, setTaskId] = useState(defaultProvider.taskId);



  // ** Hooks
  const router = useRouter();
  useEffect(() => {
    const initAuth = async () => {
      const storedToken = window.localStorage.getItem(
        authConfig.storageTokenKeyName
      );
      if (storedToken) {
        setLoading(true);
        await axios
          .get(authConfig.meEndpoint, {
            headers: {
              Authorization: storedToken,
            },
          })
          .then(async (response) => {
            setLoading(false);
            setUser({ ...response.data.userData });
          })
          .catch(() => {
            localStorage.removeItem("userData");
            localStorage.removeItem("refreshToken");
            localStorage.removeItem("accessToken");
            setUser(null);
            setLoading(false);
            if (
              authConfig.onTokenExpiration === "logout" &&
              !router.pathname.includes("login")
            ) {
              router.replace("/login");
            }
          });
      } else {
        setLoading(false);
      }
    };
    initAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = (params, errorCallback) => {
    axios
      .post(authConfig.loginEndpoint, params)

      .then(async (response) => {
        console.log("====================================");
        console.log(response.data);
        console.log("====================================");
        params.rememberMe
          ? window.localStorage.setItem(
              authConfig.storageTokenKeyName,
              response.data.accessToken
            )
          : null;
        const returnUrl = router.query.returnUrl;
        setUser({ ...response.data.userData });
        params.rememberMe
          ? window.localStorage.setItem(
              "userData",
              JSON.stringify(response.data.userData)
            )
          : null;
        const redirectURL = returnUrl && returnUrl !== "/" ? returnUrl : "/";
        router.replace(redirectURL);
      })
      .catch((err) => {
        if (errorCallback) errorCallback(err);
      });
  };

  const handleLogout = () => {
    setUser(null);
    window.localStorage.removeItem("userData");
    window.localStorage.removeItem(authConfig.storageTokenKeyName);
    router.push("/login");
  };

  const values = {
    user,
    loading,
    property,
    setProperty,
    setUser,
    setLoading,
    leads,
    setLeads,
    pages,
    setPages,
    login: handleLogin,
    logout: handleLogout,
    setLeadId:setLeadId,
    leadId:leadId,
    taskId:taskId,
    setTaskId:setTaskId,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
