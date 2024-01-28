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
import {
  deleteIcon,
  editIcon,
  eye,
  eyeIcon,
  leadsSourceData,
  rows,
} from "../../fileData/cmsLeadsData";
import StyleSheet from "./style.module.css";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import { ConfirmOverlay, SuccessOverlay } from "src/@core/components/overlays";
import { useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import ImportLeads from "./importLeads";
import CustomSelect from "src/@core/components/custom-select";
import select from "src/@core/theme/overrides/select";
import { useAuth } from "src/hooks/useAuth";
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";

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
    id: "num",
    numeric: false,
    disablePadding: true,
    label: "#",
  },
  {
    id: "fullName",
    numeric: true,
    disablePadding: false,
    label: "Full Name",
  },

  {
    id: "Phone",
    numeric: true,
    disablePadding: false,
    label: "Phone",
  },
  {
    id: "Email",
    numeric: true,
    disablePadding: false,
    label: "Email",
  },
  {
    id: "LeadSource",
    numeric: true,
    disablePadding: false,
    label: "Lead Source",
  },
  {
    id: "CreatedAt",
    numeric: true,
    disablePadding: false,
    label: "Created At",
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
      <TableRow>
        {/* <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell> */}
        {headCells.map((headCell, index) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            // sx={{ textAlign: index === null ? "left" : "center" }}
            sx={{ textAlign: "left" }}
          >
            {headCell.label}
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
          sx={{ flex: "1 1 100%", paddingLeft: "16px", fontSize: 20 }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Leads{" "}
        </Typography>
      )}

      {/* {numSelected > 0 ? (
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
      )} */}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const auth = useAuth();
  auth.setPages("Leads");

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

  //* handle show add list *//
  const handleShowAddList = () => {
    setShowAddList(!showAddList);
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

  /////////////////////////////////////////////////////////////////////
  // overlay state
  const [overLaySuccess, setOverLaySuccess] = useState(false);
  const [overLayConfirmOne, setOverLayConfirmOne] = useState(false);
  const [showAddList, setShowAddList] = useState(false);
  const [showImportedLeads, setShowImportedLeads] = useState(false);
  const [leadSourceValue, setLeadSourceValue] = useState("");

  //** handle show imported popUp  */
  const handleShowImportedLeads = () => {
    setShowImportedLeads(!showImportedLeads);
  };

  //** handle select Lead Source */
  const handleLeadSource = (event) => {
    setLeadSource(event.target.value);
  };

  //** handle custom select */
  const handleCustomSelect = (selectedValue, selectName) => {
    selectName(selectedValue);
  };

  return (
    <>
      <Box sx={{ width: "71vw", padding: "0px ", position: "relative" }}>
        {showImportedLeads && (
          <ImportLeads handleShowImportedLeads={handleShowImportedLeads} />
        )}
        <div className={StyleSheet.subTitle}>
          <div className={StyleSheet.subTitleInput}>
            <input type="search" placeholder="search here" />
            <SearchIcon className={StyleSheet.subTitleIcon} />
          </div>
          <Box className={StyleSheet.right}>
            <div className={StyleSheet.selectLeads}>
              <CustomSelect
                array={leadsSourceData}
                fun={handleCustomSelect}
                state={leadSourceValue}
                selectName={setLeadSourceValue}
              />
            </div>
            <Box className={StyleSheet.addContainer}>
              <button
                className={StyleSheet.addBtn}
                onClick={handleShowAddList}
                style={{
                  borderRadius: showAddList ? "8px 8px 0px 0px" : "8px",
                }}
              >
                Add New Leads
              </button>
              {showAddList && (
                <ul className={StyleSheet.addList} onClick={handleShowAddList}>
                  <Link href="/leads/addNewLeads">
                    <li>
                      <IoIosAdd fontSize={20} />
                      <button>Add New Lead</button>
                    </li>
                  </Link>
                  <li onClick={handleShowImportedLeads}>
                    <MdOutlineFileUpload />
                    <button>Import CSV</button>
                  </li>
                </ul>
              )}
            </Box>
          </Box>
        </div>
      </Box>
      <Box sx={{ width: "75vw", padding: "20px", position: "relative" }}>
        {/* start overLay Success */}
        {overLaySuccess && (
          <SuccessOverlay
            message={"Deleted Successfully"}
            setState={setOverLaySuccess}
          />
        )}
        {/* End overLay Success */}

        {/* start overLay delete all Confirm  */}
        {overLayConfirmOne && (
          <ConfirmOverlay
            message={"Do you want to delete this property?"}
            setState={setOverLayConfirmOne}
            successSetState={setOverLaySuccess}
          />
        )}
        {/*  End overLay delete all Confirm*/}

        <Paper sx={{ width: "100%", mb: 2 }}>
          {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
          <TableContainer>
            <Table
              sx={{
                padding: "0px 20px",
                minWidth: "max-content",
                overflowX: "scroll",
              }}
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
              <TableBody sx={{ overflowX: "scroll" }}>
                {visibleRows.map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.id)}
                      // role="checkbox"
                      // aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      // selected={isItemSelected}
                      align="left"
                      sx={{ cursor: "pointer", width: "100%", padding: 0 }}
                    >
                      {/* <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
                    </TableCell> */}
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        sx={{ width: "50px" }}
                        align="left"
                      >
                        {row.num}
                      </TableCell>
                      <TableCell sx={{ width: "300px" }} align="left">
                        {row.fullName}
                      </TableCell>
                      <TableCell
                        align="left"
                        width={200}
                        className={StyleSheet.action}
                      >
                        <FaWhatsapp
                          fontSize={30}
                          color="#1DB2FF"
                          className={StyleSheet.icon}
                        />
                        <p style={{}}>{row.phone}</p>
                      </TableCell>

                      <TableCell align="left" width={400}>
                        <p>{row.email}</p>
                        <TfiEmail />
                      </TableCell>
                      <TableCell align="left" width={220}>
                        {row.leadSource}
                      </TableCell>
                      <TableCell align="left" width={220}>
                        {row.createdAt}
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
    </>
  );
}
