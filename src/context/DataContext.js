// ** React Imports
import { createContext, useEffect, useState } from "react";

// ** Next Import
import { useRouter } from "next/router";

// ** Axios
import axios from "axios";

// ** Config
import authConfig from "src/configs/auth";

//** auth */

// ** Defaults
const defaultProvider = {
  tasks: [],
  setTasks: () => null,
  // loading: true,
};
const DataContext = createContext(defaultProvider);

const DataProvider = ({ children }) => {
  // ** States
  const [tasks, setTasks] = useState(defaultProvider.tasks);

  // set tasks from api

  const values = {
    tasks,
    setTasks,
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export { DataContext, DataProvider };
