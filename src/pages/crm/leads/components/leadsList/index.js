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
//**import icons and leads fake data */
import StyleSheet from "./style.module.css";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import { ConfirmOverlay, SuccessOverlay } from "src/@core/components/overlays";
import { useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import avatarImg from "../../../../../../public/images/cms/avatar.png";
//** import next */
import Image from "next/image";
//** import useAuth this contain all share data */
import { useAuth } from "src/hooks/useAuth";
import { ImWhatsapp } from "react-icons/im";
import { useRouter } from "next/router";

//** import leads source icon*/
import { deleteIcon, editIcon } from "src/@core/leadsData/leadsSourceIcon";
import { CrmLeadsFakeData } from "src/@core/leadsData/leadsCrmFakeData";
import { HandleLeadsSourceIcon } from "../../../../../fileData/leadsShareFunction";

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
    id: "leadsId",
    numeric: false,
    disablePadding: true,
    label: "LeadsId",
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
    id: "assign to",
    numeric: true,
    disablePadding: false,
    label: "assign To",
  },
  {
    id: "Status",
    numeric: true,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "createdAt",
    numeric: true,
    disablePadding: false,
    label: "Created At",
  },
  {
    id: "updatedAt",
    numeric: true,
    disablePadding: false,
    label: "Updated At",
  },
  {
    id: "propertyID",
    numeric: true,
    disablePadding: false,
    label: "propertyId",
  },
  {
    id: "propertyType",
    numeric: true,
    disablePadding: false,
    label: "Property Type",
  },
  {
    id: "property Value",
    numeric: true,
    disablePadding: false,
    label: "Property Value",
  },
  {
    id: "preferredPrice",
    numeric: true,
    disablePadding: false,
    label: "Preferred Price Range ",
  },
  {
    id: "Finance Option",
    numeric: true,
    disablePadding: false,
    label: "Finance Option",
  },
  {
    id: "actions",
    numeric: true,
    disablePadding: false,
    label: "Actions",
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
        {headCells.map((headCell, index) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            // sx={{ textAlign: index === null ? "left" : "center" }}
            sx={{
              textAlign: "left",
              fontSize: "12px !important",
              color: "#1DB2FF",
            }}
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
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function ListLeads() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const rows = CrmLeadsFakeData;

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

  //* HANDLE LEADS SOURCE ICON*//

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
    [order, orderBy, page, rows, rowsPerPage]
  );

  /////////////////////////////////////////////////////////////////////
  // overlay state
  const [overLaySuccess, setOverLaySuccess] = useState(false);
  const [cancelOverLaySuccess, setCancelOverLaySuccess] = useState(false);
  const [overLayConfirm, setOverLayConfirm] = useState(false);
  const [showAddList, setShowAddList] = useState(false);
  const [showImportedLeads, setShowImportedLeads] = useState(false);
  //**set page name  */
  const auth = useAuth();
  const router = useRouter();

  //** HANDLE SET LEAD ID  */
  const handleSetLeadId = (id) => {
    auth.setLeadId(id);
  };

  //** handle show imported popUp  */
  const handleShowImportedLeads = () => {
    setShowImportedLeads(!showImportedLeads);
  };

  //* handle Show success overlay */
  const handleShowOverlay = () => {
    setOverLaySuccess(!overLaySuccess);
  };

  //*handle cancel imported Leads */
  const handleShowConfirmOverlay = () => {
    setOverLayConfirm(!overLayConfirm);
  };

  const handleDeleteLeads = () => {
    setOverLayConfirm(!overLayConfirm);
  };

  //** handle status color  */
  const statusColor = (status) => {
    if (status === "Contacted") {
      return "#29C2C2";
    } else if (status === "Duplicate Lead") {
      return "#8B77ED";
    } else if (status === "Offer Submitted") {
      return "#109351";
    } else {
      return "#F10022";
    }
  };

  return (
    <div style={{ width: "100%", background: "#F7F8F8" }}>
      <Box sx={{ width: "75vw", padding: "20px", position: "relative" }}>
        {/* start overLay Success */}
        {overLaySuccess && (
          <SuccessOverlay
            message={"Deleted Leads Successfully"}
            setState={setOverLaySuccess}
          />
        )}
        {/* End overLay Success */}
        {/* start cancel overLay Success */}
        {cancelOverLaySuccess && (
          <SuccessOverlay
            message={"Deleted Leads Successfully"}
            setState={setCancelOverLaySuccess}
          />
        )}
        {/* End cancel overLay Success */}
        {/* start overLay delete all Confirm  */}
        {overLayConfirm && (
          <ConfirmOverlay
            message={"Do you want to cancel this Leads?"}
            setState={setOverLayConfirm}
            successSetState={setOverLaySuccess}
            func={handleDeleteLeads}
          />
        )}
        {/*  End overLay delete all Confirm*/}

        <Paper sx={{ width: "100%", mb: 2 }}>
          {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
          <TableContainer>
            <Table
              sx={{
                padding: "20px",
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
                {/* START LOOP FOR LEADS CONTENT AS ARRAY*/}
                {visibleRows.map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      style={{
                        fontWeight: "600 !important",
                      }}
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
                      <TableCell
                        size="small"
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        sx={{ width: "150px" }}
                        align="left"
                      >
                        <span className={StyleSheet.itemStyle}>
                          {row.leadsId}
                        </span>
                      </TableCell>
                      <TableCell
                        sx={{
                          width: "250px",
                          color: "#1DB2FF !important",
                          fontWeight: 600,
                        }}
                        align="left"
                        className={StyleSheet.tableCell}
                      >
                        <span
                          onClick={() => {
                            handleSetLeadId(row.id);
                            router.push(`/crm/leads/${row.id}`);
                          }}
                        >
                          {row.fullName}
                        </span>
                      </TableCell>
                      <TableCell align="left" width={"200px"} fontWeight={600}>
                        <div className={StyleSheet.action}>
                          <ImWhatsapp fontSize={25} color="#1db2ff" />
                          <p className={StyleSheet.itemStyle}> {row.phone}</p>
                        </div>
                      </TableCell>
                      <TableCell align="left" width={"250px"} fontWeight={600}>
                        <span className={StyleSheet.itemStyle}>
                          {" "}
                          {row.email}
                        </span>
                      </TableCell>
                      <TableCell
                        align="center"
                        width={"150px"}
                        fontWeight={600}
                      >
                        {HandleLeadsSourceIcon(row.leadSource)}
                      </TableCell>
                      <TableCell align="left" width={220}>
                        <div className={StyleSheet.assignTo}>
                          <Image src={avatarImg} alt="avatar" />
                          <span className={StyleSheet.itemStyle}>
                            {" "}
                            {row.assignTo}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell align="left" width={220}>
                        <button
                          style={{
                            background: "none",
                            border: `2px solid ${statusColor(row.status)}`,
                            padding: "10px",
                            color: statusColor(row.status),
                            fontWeight: "600",
                            width: "200px",
                            borderRadius: "10px",
                            cursor: "pointer",
                            fontSize: "14px",
                          }}
                        >
                          {row.status}
                        </button>
                      </TableCell>
                      <TableCell align="left" width={150}>
                        <span className={StyleSheet.itemStyle}>
                          {row.createdAt}
                        </span>
                      </TableCell>
                      <TableCell align="left" width={150}>
                        <span className={StyleSheet.itemStyle}>
                          {row.updatedAt}
                        </span>
                      </TableCell>
                      <TableCell align="left" width={140}>
                        <span className={StyleSheet.itemStyle}>
                          {row.propertyId}
                        </span>
                      </TableCell>
                      <TableCell align="left" width={150}>
                        <span className={StyleSheet.itemStyle}>
                          {row.propertyType}
                        </span>
                      </TableCell>
                      <TableCell align="left" width={150}>
                        <span className={StyleSheet.itemStyle}>
                          {row.propertyValue}
                        </span>
                      </TableCell>
                      <TableCell align="left" width={200}>
                        <span className={StyleSheet.itemStyle}>
                          {row.preferPrice}
                        </span>
                      </TableCell>
                      <TableCell align="left" width={150}>
                        <span className={StyleSheet.itemStyle}>
                          {row.financeOption}
                        </span>
                      </TableCell>
                      <TableCell align="left" width={150}>
                        <div className={StyleSheet.action}>
                          <button
                            onClick={() => {
                              handleSetLeadId(row.id);
                              router.push("/crm/leads/editLeads");
                            }}
                          >
                            {editIcon}
                          </button>
                          <button
                            onClick={() => {
                              handleSetLeadId(row.id);

                              setOverLayConfirm(true);
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
                {/* END LOOP FOR LEADS CONTENT AS ARRAY*/}
              </TableBody>
            </Table>
          </TableContainer>
          {/* START TABLE PAGINATION*/}
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          {/* END TABLE PAGINATION*/}
        </Paper>
        {/* START CONTROL TABLE*/}
        <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label="Dense padding"
        />
        {/* END CONTROL TABLE*/}
      </Box>
    </div>
  );
}
