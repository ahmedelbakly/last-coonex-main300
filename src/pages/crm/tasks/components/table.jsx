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

import StyleSheet from "../style.module.css";
import { deleteIcon, editIcon } from "src/@core/leadsData/leadsSourceIcon";
import avatar from "../../../../../public/images/cms/avatar.png";
import Image from "next/image";
import { useAuth } from "src/hooks/useAuth";
import { useRouter } from "next/router";
import { ConfirmOverlay, SuccessOverlay } from "src/@core/components/overlays";
import { useState } from "react";
import { useData } from "src/hooks/useData";
import axios from "axios";
import Link from "next/link";

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
    id: "taskId",
    numeric: false,
    disablePadding: true,
    label: "task id",
  },
  {
    id: "taskName",
    numeric: true,
    disablePadding: false,
    label: "task Name",
  },
  {
    id: "startedDate",
    numeric: true,
    disablePadding: false,
    label: "started date",
  },
  {
    id: "endDate",
    numeric: true,
    disablePadding: false,
    label: "End Date",
  },
  {
    id: "relatedTo",
    numeric: true,
    disablePadding: false,
    label: "Related To",
  },
  {
    id: "assignTo",
    numeric: true,
    disablePadding: false,
    label: "Assign To",
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
    label: "action",
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
  //** handle status color and border */
  // handle status color and order

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell, index) => (
          <TableCell
            key={headCell.id}
            // align={headCell.numeric ? "right" : "left"}
            align={index === 7 ? "center" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
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
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Nutrition
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const EnhancedTable = ({ rows, handleDeleteItem }) => {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  //** state to handle overlays */
  const [successOverlay, setSuccessOverlay] = useState(false);
  const [confirmOverlay, setConfirmOverlay] = useState(false);
  const [id, setId] = useState("");

  //** handle Delete Confirm */
  const handleDeleteConfirm = () => {
    setConfirmOverlay(false);
  };
  //** handle show confirm overlay */
  const handleShowOverlay = () => {
    setConfirmOverlay(true);
  };

  //** handle set task id */

  const router = useRouter();

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      // setSelected(newSelected);

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
    // setSelected(newSelected);
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
  const handleStatusColorAndBorder = (property) => {
    if (property === "done") {
      return "#109351";
    } else if (property === "in progress") {
      return "#DB6F12";
    }
  };

  // handle delete item from table from api and update data state in table component
  const api = "http://localhost:5000/api/task/:id";

  console.log("################################", rows);

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        {successOverlay && (
          <SuccessOverlay
            setState={setSuccessOverlay}
            message={"Deleted task successfully"}
            route={"/crm/tasks"}
          />
        )}
        {confirmOverlay && (
          <ConfirmOverlay
            message={"Do you want to delete this task?"}
            setState={setConfirmOverlay}
            func={() =>
              handleDeleteItem(id, setConfirmOverlay, setSuccessOverlay)
            }
          />
        )}
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}

        <TableContainer>
          <Table
            sx={{ minWidth: "max-content", overflowX: "scroll" }}
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
              {rows.map((row, index) => {
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
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      width={"100px"}
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      <span className={StyleSheet.itemStyle}>
                        {" "}
                        {index + 1}
                      </span>
                    </TableCell>

                    <TableCell align="left" width={"250px"}>
                      <Link href={`/crm/tasks/${row.id}`}>
                      <span className={StyleSheet.taskName}>{row.name}</span>
                      </Link>

                    </TableCell>
                    <TableCell align="left" width={"170px"}>
                      <span className={StyleSheet.itemStyle}>
                        {" "}
                        {row.startDate?.split("T")[0]}
                      </span>
                    </TableCell>
                    <TableCell align="left" width={"170px"}>
                      <span className={StyleSheet.itemStyle}>
                        {" "}
                        {row.endDate?.split("T")[0]}
                      </span>
                    </TableCell>
                    <TableCell align="left" width={"150px"}>
                      <span className={StyleSheet.taskName}>
                        {" "}
                        {row.relatedTo}
                      </span>
                    </TableCell>
                    <TableCell align="left" width={"250px"}>
                      <div className={StyleSheet.assignTo}>
                        <Image src={avatar} alt="avatar" />
                        <p
                          className={StyleSheet.taskName}
                          style={{
                            fontWeight: "500 !important",
                          }}
                        >
                          {" "}
                          {row.assignTo}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell align="left" width={"150px"}>
                      <button
                        style={{
                          border: `2px solid ${handleStatusColorAndBorder(
                            row.status
                          )}`,
                          color: `${handleStatusColorAndBorder(row.status)}`,
                        }}
                        className={StyleSheet.status}
                      >
                        {row.status}
                      </button>
                    </TableCell>
                    <TableCell align="left" width={"200px"}>
                      <div className={StyleSheet.actions}>
                        <button
                          onClick={() => router.push(`/crm/tasks/${row.id}`)}
                        >
                          {editIcon}
                        </button>
                        <button
                          onClick={() => {
                            handleShowOverlay();
                            setId(row.id);
                          }}
                        >
                          {deleteIcon}
                        </button>
                      </div>
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
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
};

export default EnhancedTable;
