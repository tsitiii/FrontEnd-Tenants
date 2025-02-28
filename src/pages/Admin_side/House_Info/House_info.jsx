import { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, IconButton, Button, Menu, MenuItem } from "@mui/material";
// import { FaEdit, FaTrashAlt, FaFileAlt } from "react-icons/fa";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
import SideBar from '../../../components/Sidebar/Sidebar.jsx';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import axiosInstance from "@/Api.jsx";

const columns = [
  { field: "id", headerName: "ID", width:'45',headerClassName: "super-app-theme--header" },
  // { field: "phoneNumber", headerName: "Phone Number", headerClassName: "super-app-theme--header" ,width:'150'},
  { field: "region", headerName: "Region",  headerClassName: "super-app-theme--header" ,width:'150' },
  { field: "city", headerName: "City", headerClassName: "super-app-theme--header" ,width:'150' },
  { field: "sub_city", headerName: "Sub City", headerClassName: "super-app-theme--header"  , width:'150' },
  { field: "kebele", headerName: "Kebele", headerClassName: "super-app-theme--header" , width:150   },
  { field: "unique_place", headerName: "Unique Place",
     headerClassName: "super-app-theme--header"   , width:'140' },
  { field: "house_number", headerName: "House Number", Type:'number',
     headerClassName: "super-app-theme--header", width:'135' },
  { field: "number_of_rooms", headerName: "Class",  headerClassName: "super-app-theme--header" , width:'130' },
];


export default function HouseInfo() {

  const navigate = useNavigate();
  const [rows, setRows] = useState([]);

  useEffect(()=>{
    axiosInstance.get("/api/property/")
    .then(res=>{
      console.log(res.data);
      setRows(res.data);
    })
  })

 
  return (
    <div className="w-full bg-[#f5f5ef]">
      <div className='w-full flex h-screen ' >
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
    </div>
  );
}
