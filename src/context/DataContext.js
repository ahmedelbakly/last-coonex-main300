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
  useEffect(() => {
    axios
      .get("http://195.35.2.218:5000/api/tasks")
      .then((res) => {
        const { id } = JSON.parse( localStorage.getItem('userData'));
        console.log(id);
        console.log(res.data?.filter((task) => task?.adminId == id));
        setTasks(res.data?.filter((task) => task?.adminId == id));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const values = {
    tasks,
    setTasks,
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export { DataContext, DataProvider };
