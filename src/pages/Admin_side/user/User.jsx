import { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button, Box, Avatar, Dialog, DialogTitle, DialogContent, Typography, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import SideBar from "@/components/Sidebar/Sidebar";
import axios from "axios";
import axiosInstance from "@/Api";

// // Sample rows matching the columns structure
// const rows = [
//   {
//     id: 1,
//     profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
//     firstName: "John",
//     fatherName: "Doe",
//     lastName: "Smith",
//     region: "Addis Ababa",
//     city: "City1",
//     subCity: "Sub1",
//     kebele: "Kebele1",
//     uniquePlace: "Place1",
//     houseNumber: "101",
//     phoneNumber: "0913535288",
//     kebeleIdFile: "https://example.com/kebeleID/1.pdf", // Link to the file
//     role: "Owner",
//     status: "Active",
//   },
//   // Add more rows...
// ];


// Sample data
const columns = [
  { field: "id", headerName: "ID", width: 50, headerClassName: "super-app-theme--header" },
  {
    field: "profile_picture",
    headerName: "Profile",
    width: 90,
    renderCell: (params) => (
      <Avatar alt={params.row.first_name} src={params.row.profile_picture} />
    ),
    headerClassName: "super-app-theme--header"
  },
  { field: "first_name", headerName: "First Name",width:140, headerClassName: "super-app-theme--header" },
  { field: "father_name", headerName: "Father Name", width:140, headerClassName: "super-app-theme--header" },
  { field: "last_name", headerName: "Last Name", width:130, headerClassName: "super-app-theme--header" },
  { field: "region", headerName: "Region",width:100, headerClassName: "super-app-theme--header" },
  { field: "city", headerName: "City", headerClassName: "super-app-theme--header" },
  { field: "sub_city", headerName: "SubCity", headerClassName: "super-app-theme--header" },
  { field: "kebele", headerName: "Kebele", headerClassName: "super-app-theme--header", },
  // { field: "uniquePlace", headerName: "Unique Place", headerClassName: "super-app-theme--header" },
  // {
  // field: "houseNumber", headerName: "House Number", headerClassName: "super-app-theme--header",
  // headerAlign: "left", align: "left",
  // },
  { field: "phone",width:155, headerName: "Phone Number", type: "number", alignSelf: 'left', headerAlign: "left", headerClassName: "super-app-theme--header" },
 

];


// Component for displaying user details in a modal
const UserDetailModal = ({ open, onClose, user }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
          <Box display='flex' justifyContent='space-between' paddingX='20px' paddingY='10px'>
          <Button sx={{backgroundColor:'#e00909',paddingy:'6px',paddingX:'50px' ,width:'80px', fontWeight:'bold', color:'white', borderRadius:'10px',
          "&:hover":{backgroundColor:"#fc4c4c",}, }}> <span className="mr-1" ><MdDeleteSweep/></span>Delete</Button>
          <Button sx={{backgroundColor:'#3640f7', gap:'4', "&:hover":{backgroundColor:"#0b008a",},paddingy:'6px',paddingX:'10px' ,width:'80px', fontWeight:'bold', color:'white', borderRadius:'10px'
          }} ><span className="mr-1"><FaEdit/></span>Edit </Button>
          </Box>
      <Box backgroundColor="#f0f2f5" padding="20px" borderRadius="12px">
       <DialogTitle>
        {/* Main container for the title section */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
          paddingY="20px"
          paddingX="30px"
          backgroundColor="white"
          borderRadius="12px"
          // boxShadow="0 4px 10px rgba(0, 0, 0, 0.1)"
        >
          {/* Profile Picture */}
          <Box >
            <Avatar
              alt={user.first_name}
              src={user.profile_picture}
              sx={{ width: 70, height: 70, border: '2px solid #3366e8' }}
            />
          </Box>

          {/* Full name, vertical line, phone number, and Kebele ID */}
          <Box display="flex" alignItems="center" width="100%">
            {/* Full Name Section */}
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" flex={1}>
            <Typography variant="subtitle2" sx={{ color: '#888', fontSize: '0.9rem' }}>
                Full Name
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#444', marginBottom: '5px' }}>
                {`${user.first_name} ${user.father_name} ${user.last_name}`}
              </Typography>
            
            </Box>

            {/* Vertical Divider */}
            <Box height="80px" width="2px" backgroundColor="#ccc" marginX="10px" />

            {/* Phone Number and Kebele ID Section */}
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" flex={1}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#444', marginBottom: '5px' }}>
                {user.phone}
              </Typography>
              <Typography variant="subtitle2" sx={{ color: '#888', fontSize: '0.9rem' }}>
                Phone Number
              </Typography>
              {/* <Button
            variant="contained"
            startIcon={<Avatar />}
            href={user.kebeleIdFile}
            download
            className="mt-4"
            sx={{
              backgroundColor: "#4379F2",
              color: "white",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#3366e8",
              },
              width:'200px',
              height:'45px'
            }}
          >
            View Kebele ID
          </Button> */}
            </Box>
          </Box>
        </Box>
      </DialogTitle>


        <DialogContent className="space-y-4 mt-2 p-3">
             <Box display='flex' justifyContent='space-around' alignItems='center' >
               <Box  >
              <Typography  sx={{ color: "#444", marginTop: "10px", fontStyle: "italic" }}>
            <strong>Region:</strong> {user.region}
          </Typography>
          <Typography  sx={{ color: "#444", marginTop: "10px", fontStyle: "italic" }}>
            <strong>City:</strong> {user.city}
          </Typography>
          <Typography  sx={{ color: "#444", marginTop: "10px", fontStyle: "italic" }}>
            <strong>SubCity:</strong> {user.sub_city}
          </Typography>
            </Box>

              <Box height="80px" width="2px" backgroundColor="#ccc" marginX="20px" />


             <Box>
              <Typography className="text-lg" sx={{ color: "#444", marginTop: "10px", fontStyle: "italic" }}>
            <strong>Kebele:</strong> {user.kebele}
          </Typography>
          <Typography className="text-lg" sx={{ color: "#444", marginTop: "10px", fontStyle: "italic" }}>
            <strong>Unique Place:</strong> {user.unique_place}
          </Typography>
          <Typography className="text-lg" sx={{ color: "#444", marginTop: "10px", fontStyle: "italic" }}>
            <strong>House Number:</strong> {user.house_number}
          </Typography>
             </Box>
             </Box>
          {/* <Button
            variant="contained"
            startIcon={<Avatar />}
            href={user.kebeleIdFile}
            download
            className="mt-4"
            sx={{
              backgroundColor: "#4379F2",
              color: "white",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#3366e8",
              },
            }}
          >
            View Kebele ID
          </Button> */}
        </DialogContent>
        <Box display="flex" justifyContent="center" padding="20px">
          <Button
            onClick={onClose}
            variant="contained"
            color="error"
            sx={{ marginLeft: "10px" }}
          >
            Close
          </Button>
        </Box>
      </Box>
    </Dialog>
  );

};



export default function User() {
  const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState(null); // To store the selected user
  const [openDetailModal, setOpenDetailModal] = useState(false); // Modal state
  const [rows, setRows]=useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await axiosInstance.get("/api/register/");
        // const profileResponse = await axios.get("http://localhost:8000/api/profiles/");

        // Merge user data with profile data
        // userResponse.data.map((user) => {
        //   const profile = profileResponse.data.find((p) => p.user_id === user.id);
        //   return {
        //     ...user,
        //     profilePicture: profile ? profile.profile_picture : null, // Add profile picture
        //   };
        // });
        console.log(userResponse)
        setRows(userResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleRowClick = (params) => {
    setSelectedUser(params.row);
    setOpenDetailModal(true);
  };1

  return (
    <div className="min-w-fit bg-[#f5f5ef]">
      <div className="w-full flex h-screen gap-2">
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
              // borderRight: "1px solid black",

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
            // checkboxSelection
            // disableSelectionOnClick
            onRowClick={handleRowClick} // Handle row click event
            sx={{ minWidth: "800", }}
            slots={{
              toolbar: GridToolbar,
            }}
          />
        </Box>
      </div>

      {/* Modal for detailed user info */}
      {selectedUser && (
        <UserDetailModal
          open={openDetailModal}
          onClose={() => setOpenDetailModal(false)}
          user={selectedUser}
        />
      )}
    </div>
  );
}
