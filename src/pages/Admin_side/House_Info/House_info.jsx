import { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, IconButton, Button, Menu, MenuItem } from "@mui/material";
import { FaEdit, FaTrashAlt, FaFileAlt } from "react-icons/fa";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SideBar from '../../../components/Sidebar/Sidebar.jsx';
import { useNavigate } from "react-router-dom";
// Sample rows matching the columns structure
const rows = [
  {
    id: 1,
    phoneNumber: "1234567890",
    region: "Addis Ababa",
    city: "Addis Ababa",
    subCity: "Addis Ababa",
    kebele: "02",
    uniquePlace: "Place 1",
    houseNumber: "123",
    class: 3,
    condition: "New",
    rentAmount: 14500,
    leaseYear: 2,
    otherPayments: "Landlord",
    prePayment: 29000,
    prePaymentMonths: 2,
    paymentDate: 5,
    ownershipDocument: "File 2"
  },
];

// Define columns for DataGrid
const columns = [
  { field: "id", headerName: "ID", width:'45',headerClassName: "super-app-theme--header" },
  { field: "phoneNumber", headerName: "Phone Number", headerClassName: "super-app-theme--header"  },
  { field: "region", headerName: "Region",  headerClassName: "super-app-theme--header"  },
  { field: "city", headerName: "City", headerClassName: "super-app-theme--header"   },
  { field: "subCity", headerName: "Sub City", headerClassName: "super-app-theme--header"   },
  { field: "kebele", headerName: "Kebele", headerClassName: "super-app-theme--header"   },
  { field: "uniquePlace", headerName: "Unique Place",
     headerClassName: "super-app-theme--header"   },
  { field: "houseNumber", headerName: "House Number", Type:'number',
     headerClassName: "super-app-theme--header"  },
  { field: "class", headerName: "Class",  headerClassName: "super-app-theme--header"  },
  { field: "condition", headerName: "Condition",  headerClassName: "super-app-theme--header"  },
  { field: "rentAmount", headerName: "Rent Amount (Birr)",  headerClassName: "super-app-theme--header"  },
  { field: "leaseYear", headerName: "Lease Year",  headerClassName: "super-app-theme--header"  },
  { field: "otherPayments", headerName: "Other Payments Bills",  headerClassName: "super-app-theme--header"  },
  { field: "prePayment", headerName: "Pre-payment (Birr)", 
    Type:'number', headerClassName: "super-app-theme--header"  },
  { field: "prePaymentMonths", headerName: "Pre-payment (Months)",  headerClassName: "super-app-theme--header"  },
  { field: "paymentDate", headerName: "Payment Date",  headerClassName: "super-app-theme--header"  },
  { field: "ownershipDocument", 
    renderCell: (params) =>
      params.row.kebeleIdFile ? (
        <Button variant="contained" startIcon={<FaFileAlt />} href={params.row.kebeleIdFile} download>
          View
        </Button>
      ) : (
        "No File"
      ),
    headerName: "Ownership Document",  headerClassName: "super-app-theme--header"  },
  {
    field: "action",
    headerName: "Action",
    headerClassName: "super-app-theme--header" ,
    
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
    alert(`Editing row ${params.row.id}`);
    handleClose();
  };

  const handleDelete = () => {
    alert(`Deleting row ${params.row.id}`);
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
          Edit
        </MenuItem>
        <MenuItem onClick={handleDelete} style={{ color: "red" }}>
          <FaTrashAlt className="mr-2" />
          Delete
        </MenuItem>
      </Menu>
    </>
  );
};

// Main component with DataGrid and GridToolbar
export default function HouseInfo() {
  const navigate = useNavigate();
  return (
    <div className="w-fit flex h-screen bg-[#f5f5ef]">
      <SideBar />
      <Box
         m='40px 0 0 0'
         sx={{
           height: "75vh",
           width: "100%",

           "& .MuiDataGrid-root": {
             border: "none"
           },
           "& .MuiDataGrid-cell": {
             borderBottom: "1px solid black",
           },
           "& .super-app-theme--header": {
             backgroundColor: "#22479c",
             color: "white",
             fontWeight: "bold",
             fontSize: "0.9rem",
             borderBottom: "none",
           },
           "& .MuiDataGrid-virtualScroller": {
             backgroundColor: "ghostwhite",
           },
           "& .MuiDataGrid-row:hover": {
             backgroundColor: "#f5f5f5",
           },
           "& .MuiDataGrid-footerContainer": {
             backgroundColor: "#22479c",
             color: "white",
            //  borderTop: "none
           },
           "& .MuiDataGrid-columnSeparator": {
            //  display: "none",
           },
         }}
      >
      <h1 className="text-base md:text-2xl lg:text-3xl font-bold ml-8 text-[#3366e8]">Managing House information</h1>

       <Button sx={{backgroundColor:"#4379F2", color:"white",padding:"4px",margin:"2px 10px", fontWeight:"bold"}}
      onClick={()=>navigate('/admin/addhouseinfo')}>Add New</Button>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          checkboxSelection
          disableSelectionOnClick
          slots={{
            toolbar: GridToolbar,  
          }}
        />
      </Box>
    </div>
  );
}
