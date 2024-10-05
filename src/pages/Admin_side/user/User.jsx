import { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button, Box, IconButton, Menu, MenuItem, Avatar } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SideBar from "@/components/Sidebar/Sidebar";
import { FaEdit, FaTrashAlt, FaFileAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AppBar from "@/components/Apppbar/AppBar.jsx"


// Sample data
const columns = [
  { field: "id", headerName: "ID", width: 45, headerClassName: "super-app-theme--header" },
  {
    field: "profile",
    headerName: "Profile",
    width: 90,
    renderCell: (params) => (
      <Avatar alt={params.row.firstName} src={params.row.profilePicture} />
    ),
    headerClassName: "super-app-theme--header"
  },
  { field: "firstName", headerName: "First Name", headerClassName: "super-app-theme--header" },
  { field: "fatherName", headerName: "Father Name", headerClassName: "super-app-theme--header" },
  { field: "lastName", headerName: "Last Name", headerClassName: "super-app-theme--header" },
  { field: "region", headerName: "Region", headerClassName: "super-app-theme--header" },
  { field: "city", headerName: "City", headerClassName: "super-app-theme--header" },
  { field: "subCity", headerName: "SubCity", headerClassName: "super-app-theme--header" },
  { field: "kebele", headerName: "Kebele", headerClassName: "super-app-theme--header" },
  { field: "uniquePlace", headerName: "Unique Place", headerClassName: "super-app-theme--header" },
  {
    field: "houseNumber", headerName: "House Number", headerClassName: "super-app-theme--header",
    headerAlign: "left", align: "left",
  },
  { field: "phoneNumber", headerName: "Phone Number", type: "number", headerClassName: "super-app-theme--header" },
  {
    field: "kebeleIdFile",
    headerName: "Kebele ID",
    headerClassName: "super-app-theme--header",
    renderCell: (params) =>
      params.row.kebeleIdFile ? (
        <Button variant="contained" startIcon={<FaFileAlt />} href={params.row.kebeleIdFile} download>
          View
        </Button>
      ) : (
        "No File"
      ),
  },
  {
    field: "role", headerName: "Role", headerClassName: "super-app-theme--header",
  },
  { field: "status", headerName: "Status", headerClassName: "super-app-theme--header" },
  {
    field: "action",
    headerName: "Action",
    headerClassName: "super-app-theme--header",
    renderCell: (params) => <ActionMenu params={params} />,
  },
];

// Dropdown menu for Edit/Delete actions
const ActionMenu = ({ params }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    alert(`Editing user ${params.row.id}`);
    handleClose();
  };

  const handleDelete = () => {
    alert(`Deleting user ${params.row.id}`);
    handleClose();
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleEdit}>
          <FaEdit className="mr-2" />
        Edit</MenuItem>
        <MenuItem onClick={handleDelete} style={{ color: "red" }}>
        <FaTrashAlt className="mr-2" />
          Delete
        </MenuItem>
      </Menu>
    </>
  );
};

// Sample rows matching the columns structure, including a `profilePicture` field for avatar
const rows = [
  {
    id: 1,
    profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
    firstName: "John",
    fatherName: "Doe",
    lastName: "Smith",
    region: "Addis Ababa",
    city: "City1",
    subCity: "Sub1",
    kebele: "Kebele1",
    uniquePlace: "Place1",
    houseNumber: "101",
    phoneNumber: "0913535288",
    kebeleIdFile: "https://example.com/kebeleID/1.pdf", // Link to the file
    role: "Owner",
    status: "Active",
  },
  {
    id: 2,
    profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
    firstName: "John",
    fatherName: "Doe",
    lastName: "Smith",
    region: "Addis Ababa",
    city: "City1",
    subCity: "Sub1",
    kebele: "Kebele1",
    uniquePlace: "Place1",
    houseNumber: "101",
    phoneNumber: "0913535288",
    kebeleIdFile: "https://example.com/kebeleID/1.pdf", // Link to the file
    role: "Owner",
    status: "Active",
  },
  {
    id: 3,
    profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
    firstName: "John",
    fatherName: "Doe",
    lastName: "Smith",
    region: "Addis Ababa",
    city: "City1",
    subCity: "Sub1",
    kebele: "Kebele1",
    uniquePlace: "Place1",
    houseNumber: "101",
    phoneNumber: "0913535288",
    kebeleIdFile: "https://example.com/kebeleID/1.pdf", // Link to the file
    role: "Owner",
    status: "Active",
  },
  {
    id: 4,
    profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
    firstName: "John",
    fatherName: "Doe",
    lastName: "Smith",
    region: "Addis Ababa",
    city: "City1",
    subCity: "Sub1",
    kebele: "Kebele1",
    uniquePlace: "Place1",
    houseNumber: "101",
    phoneNumber: "0913535288",
    kebeleIdFile: "https://example.com/kebeleID/1.pdf", // Link to the file
    role: "Owner",
    status: "Active",
  },
  {
    id: 5,
    profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
    firstName: "John",
    fatherName: "Doe",
    lastName: "Smith",
    region: "Addis Ababa",
    city: "City1",
    subCity: "Sub1",
    kebele: "Kebele1",
    uniquePlace: "Place1",
    houseNumber: "101",
    phoneNumber: "0913535288",
    kebeleIdFile: "https://example.com/kebeleID/1.pdf", // Link to the file
    role: "Owner",
    status: "Active",
  },
];



export default function User() {
  const navigate = useNavigate();
  return (
    <div className="min-w-fit bg-[#f5f5ef]">
          <div className="w-full flex h-screen gap-3 ">
    <SideBar /> 
        
    <Box
  m="40px 0 0 0"
  sx={{
    height: "75vh",  
    width: "100%",
    "& .MuiDataGrid-root": {
      border: "none",
      overflowX: "auto", 
      borderRadius: "10px",
    },
    "& .MuiDataGrid-cell": {
      borderBottom: "1px solid black",
    },
    "& .super-app-theme--header": {
      backgroundColor: "#86b1e4",
      color: "white",
      fontWeight: "bold",
      fontSize: "0.9rem",
      borderBottom: "none",
    },
    "& .MuiDataGrid-virtualScroller": {
      backgroundColor: "ghostwhite",
      overflowY: "auto", 
    },
    "& .MuiDataGrid-row:hover": {
      backgroundColor: "#f5f5f5",
    },
    "& .MuiDataGrid-footerContainer": {
      backgroundColor: "#22479c",
      color: "white",
      borderTop: "none",
    },
  }}
>
  <h1 className="text-base md:text-2xl lg:text-3xl font-bold ml-8 text-[#3366e8]">
    Managing Users
  </h1>

  <Button
    sx={{
      backgroundColor: "#4379F2",
      color: "white",
      padding: "4px",
      margin: "2px 10px",
      fontWeight: "bold",
    }}
    onClick={() => navigate("/admin/adduser")}
  >
    Add user
  </Button>
  
  <DataGrid
    rows={rows}
    columns={columns}
    pageSize={5}
    rowsPerPageOptions={[5, 10, 20]}
    checkboxSelection
    disableSelectionOnClick
    sx={{ minWidth:'800' }} 
    slots={{
      toolbar: GridToolbar,
    }}
  />
  
 
</Box>

    
      </div>
      </div>
  );
}
