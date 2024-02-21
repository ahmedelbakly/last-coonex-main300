// fakeData to admin Roles

function createData(id, roleName, creationDate, status) {
  return {
    id,
    roleName,
    creationDate,
    status,
  };
}

export const rolesRows = [
  createData(1, "Developer", "12/12/2023", "active"),
  createData(2, "Developer", "12/12/2023", "inactive"),
  createData(3, "Developer", "12/12/2023", "active"),
  createData(4, "Developer", "12/12/2023", "inactive"),
  createData(5, "Developer", "12/12/2023", "active"),
  createData(6, "Developer", "12/12/2023", "inactive"),
  createData(7, "Developer", "12/12/2023", "active"),
  createData(8, "Developer", "12/12/2023", "inactive"),
  createData(9, "Developer", "12/12/2023", "inactive"),
  createData(10, "Developer", "12/12/2023", "active"),
  createData(11, "Developer", "12/12/2023", "active"),
  createData(12, "Developer", "12/12/2023", "active"),
  createData(13, "Developer", "12/12/2023", "active"),
];

export const rolesHeadCells = [
  {
    id: "role",
    numeric: false,
    disablePadding: true,
    label: " Role Name",
  },
  {
    id: "createdAt",
    numeric: true,
    disablePadding: false,
    label: "Creation date",
  },
  {
    id: "status",
    numeric: true,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "action",
    numeric: true,
    disablePadding: false,
    label: "Actions",
  },
];
