import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import dashAvatar from "../../../../public/images/cms/dashAvatar.png";
import Image from "next/image";

const editIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M19.6083 18.746C19.6083 19.627 18.8923 20.37 18.0113 20.37H5.23231C4.35131 20.37 3.63531 19.627 3.63531 18.746V5.96703C3.63531 5.08603 4.35131 4.39603 5.23231 4.39603H12.6863V3.33203H5.23231C3.76431 3.33203 2.57031 4.50003 2.57031 5.96803V18.746C2.57031 20.214 3.76431 21.434 5.23231 21.434H18.0103C19.4783 21.434 20.6723 20.213 20.6723 18.746V11.318H19.6073V18.746H19.6083Z"
      fill="#DB6F12"
    />
    <path
      d="M20.8088 3.17016C20.0048 2.36516 18.6018 2.36516 17.7968 3.17016L10.6538 10.3132C10.5858 10.3812 10.5368 10.4672 10.5138 10.5602L9.76183 13.5712C9.71683 13.7522 9.76983 13.9442 9.90183 14.0772C10.0028 14.1782 10.1388 14.2332 10.2778 14.2332C10.3208 14.2332 10.3638 14.2282 10.4068 14.2172L13.4188 13.4642C13.5128 13.4412 13.5978 13.3922 13.6658 13.3242L20.8088 6.18116C21.2108 5.77916 21.4328 5.24416 21.4328 4.67516C21.4328 4.10616 21.2118 3.57216 20.8088 3.17016ZM13.0178 12.4672L11.0098 12.9692L11.5118 10.9612L17.4208 5.05216L18.9268 6.55816L13.0178 12.4672ZM20.0558 5.42816L19.6798 5.80416L18.1738 4.29816L18.5498 3.92216C18.9518 3.52016 19.6538 3.52016 20.0558 3.92216C20.2568 4.12316 20.3678 4.39016 20.3678 4.67516C20.3678 4.96016 20.2568 5.22716 20.0558 5.42816Z"
      fill="#DB6F12"
    />
  </svg>
);
const deleteIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
  >
    <g clip-path="url(#clip0_983_114868)">
      <path
        d="M2.21632 10.925C2.21632 8.85682 2.21014 6.7825 2.22249 4.71435C2.22249 4.4674 2.14841 4.42419 1.93233 4.43654C1.54957 4.45506 1.16063 4.44271 0.777871 4.44271C0.3272 4.43654 0 4.12168 0 3.70188C0 3.28208 0.3272 2.96722 0.777871 2.96105C2.43856 2.96105 4.10543 2.95488 5.76612 2.96105C5.92664 2.96105 5.99455 2.92401 6.04393 2.75732C6.47609 1.11515 7.93305 0.00390625 9.61844 0.00390625C11.2915 0.00390625 12.7361 1.12132 13.1744 2.75732C13.2176 2.92401 13.2855 2.96722 13.4461 2.96722C15.1067 2.96105 16.7736 2.96105 18.4343 2.96722C18.9961 2.96722 19.3603 3.47963 19.1628 3.97352C19.0517 4.2575 18.7862 4.43654 18.459 4.44271C18.0515 4.44888 17.6441 4.46123 17.2366 4.43654C17.0206 4.42419 16.9959 4.50445 16.9959 4.68965C17.002 8.78274 17.0144 12.882 16.9959 16.9751C16.9897 18.574 16.2118 19.7161 14.761 20.3952C14.3351 20.599 13.872 20.6916 13.3967 20.6916C10.8717 20.6977 8.34668 20.7039 5.82169 20.6916C3.87083 20.6792 2.24718 19.0371 2.22249 17.0862C2.22249 17.0615 2.22249 17.043 2.22249 17.0183C2.21632 14.9934 2.21632 12.9561 2.21632 10.925Z"
        fill="#CF2222"
      />
      <path
        d="M3.68977 10.8808C3.68977 8.81261 3.68977 6.73829 3.68359 4.67014C3.68359 4.47876 3.72681 4.43555 3.91819 4.43555C7.70877 4.44172 11.4932 4.44172 15.2838 4.43555C15.4751 4.43555 15.5183 4.47876 15.5183 4.67014C15.5122 8.74471 15.5122 12.8131 15.5122 16.8877C15.5122 18.2767 14.5676 19.2213 13.1786 19.2213C10.7894 19.2213 8.40638 19.2213 6.01721 19.2213C4.63433 19.2213 3.68359 18.2705 3.68359 16.8877C3.68977 14.8874 3.68977 12.8872 3.68977 10.8808Z"
        fill="white"
      />
      <path
        d="M7.54297 2.94947C7.83313 2.07899 8.67891 1.48633 9.61112 1.48633C10.5372 1.48633 11.3829 2.07899 11.6793 2.94947C10.2964 2.94947 8.92585 2.94947 7.54297 2.94947Z"
        fill="white"
      />
      <path
        d="M8.13174 11.8324C8.13174 12.814 8.13791 13.8017 8.13174 14.7833C8.13174 15.1723 7.84775 15.4809 7.47734 15.5242C7.11309 15.5612 6.77355 15.3266 6.68094 14.9624C6.66242 14.8945 6.65625 14.8265 6.65625 14.7586C6.65625 12.8078 6.65625 10.8508 6.65625 8.89991C6.65625 8.49245 6.93406 8.1776 7.31682 8.14056C7.68106 8.10351 8.02061 8.33811 8.11321 8.69618C8.13791 8.78261 8.13791 8.88138 8.13791 8.96781C8.13174 9.92472 8.13174 10.8816 8.13174 11.8324Z"
        fill="#CF2222"
      />
      <path
        d="M11.0882 11.8336C11.0882 10.852 11.0882 9.86426 11.0882 8.88266C11.0882 8.49373 11.3722 8.18505 11.7426 8.14183C12.1068 8.09862 12.4464 8.33321 12.539 8.69745C12.5575 8.75302 12.5637 8.82093 12.5637 8.87649C12.5637 10.8459 12.5637 12.8152 12.5637 14.7846C12.5637 15.118 12.3661 15.3834 12.0636 15.4884C11.7735 15.5872 11.4771 15.5069 11.2672 15.2723C11.1252 15.1118 11.082 14.9266 11.082 14.7167C11.0882 13.7598 11.0882 12.7967 11.0882 11.8336Z"
        fill="#CF2222"
      />
    </g>
    <defs>
      <clipPath id="clip0_983_114868">
        <rect
          width="19.2184"
          height="20.7"
          fill="white"
          transform="translate(0 0.00390625)"
        />
      </clipPath>
    </defs>
  </svg>
);

function createData(id, propertyName, impressionsNumber, clicksNumber, leads) {
  return {
    id,
    propertyName,
    impressionsNumber,
    clicksNumber,
    leads,
  };
}

const rows = [
  createData(1, "Small house in Bolzano", "1239633", "1234544", "1239655"),
  createData(2, "Small house in Bolzano", "1239664", "1234568", "1239664"),
  createData(3, "Small house in Bolzano", "1239664", "1234568", "1239664"),
  createData(3, "Small house in Bolzano", "1239664", "1234568", "1239664"),
  createData(3, "Small house in Bolzano", "1239664", "1234568", "1239664"),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }

  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }

    return a[1] - b[1];
  });

  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Property Name",
  },
  {
    id: "Status",
    numeric: true,
    disablePadding: false,
    label: "Impressions number",
  },
  {
    id: "fat",
    numeric: true,
    disablePadding: false,
    label: "Clicks Number",
  },
  {
    id: "actions",
    numeric: true,
    disablePadding: false,
    label: "Leads",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow sx={{ bgcolor: "rgba(188, 188, 188, 0.12)" }}>
        {headCells.map((headCell, index) => (
          <TableCell
            key={headCell.id}
            sx={{ borderRight: `${index !== 3 && " solid 1px  #E2E2E2"} ` }}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              onClick={createSortHandler(headCell.id)}
              align="left"
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"

        >
          Top <span style={{ color:"#1DB2FF"}}>{rows.length}</span> Visited Properties
        </Typography>
      }

      <Typography
        variant="h6"
        sx={{ width: "100px", color: "#1DB2FF", fontWeight: 600 }}
      >
        See More
      </Typography>
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable({ handleShowConfirmOverLay }) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);

      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  return (
    <Box sx={{ width: "100%", marginTop:2 }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "10px",
                        padding: "10px",
                      }}
                    >
                      <Image src={dashAvatar} alt="dashAvatar" />
                      <h4>{row.propertyName}</h4>
                    </TableCell>
                    <TableCell align="left" fontWeight={600}>{row.impressionsNumber}</TableCell>
                    <TableCell align="left" fontWeight={600}>{row.clicksNumber}</TableCell>
                    <TableCell align="left" fontWeight={600}>
                      {row.leads}
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
      </Paper>
      {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
    </Box>
  );
}
