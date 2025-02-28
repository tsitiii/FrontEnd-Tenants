import axiosInstance from "@/Api";
import SideBar from "@/components/Sidebar/Sidebar";
import { Avatar, Box, Button, Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Users = ({ user }) => {
  const [rows, setRows] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [openDetailModal, setOpenDetailModal] = useState(false);
  const cloudinaryBaseUrl = "https://res.cloudinary.com/dolvppffs/";
  const navigate = useNavigate();

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
    { field: "first_name", headerName: "First Name", width: 140, headerClassName: "super-app-theme--header" },
    { field: "father_name", headerName: "Father Name", width: 140, headerClassName: "super-app-theme--header" },
    { field: "last_name", headerName: "Last Name", width: 130, headerClassName: "super-app-theme--header" },
    { field: "region", headerName: "Region", width: 100, headerClassName: "super-app-theme--header" },
    { field: "city", headerName: "City", headerClassName: "super-app-theme--header" },
    { field: "sub_city", headerName: "SubCity", headerClassName: "super-app-theme--header" },
    { field: "kebele", headerName: "Kebele", headerClassName: "super-app-theme--header" },
    { field: "uniquePlace", headerName: "Unique Place", headerClassName: "super-app-theme--header" },
    { field: "houseNumber", headerName: "House Number", headerClassName: "super-app-theme--header", headerAlign: "left", align: "left" },
    { field: "phone", width: 155, headerName: "Phone Number", type: "number", headerAlign: "left", headerClassName: "super-app-theme--header" },
  ];

  const UserDetailModal = ({ open, onClose, user }) => {
    const handleDelete = async () => {
      try {
        const response = await axiosInstance.delete(`/api/register/${user.id}/`); // Adjust endpoint as needed
        if (response.status === 204) {
          alert('User deleted successfully!');
          onClose(); // Close the modal
          fetchUserData(); // Refresh user data
        }
      } catch (error) {
        console.error("Error deleting user:", error);
        alert('Failed to delete user.');
      }
    };

    return (
      <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
        <Box display='flex' justifyContent='space-between' paddingX='20px' paddingY='10px'>
          <Button 
            sx={{
              backgroundColor: '#e00909',
              paddingY: '6px',
              paddingX: '50px',
              width: '80px',
              fontWeight: 'bold',
              color: 'white',
              borderRadius: '10px',
              "&:hover": { backgroundColor: "#fc4c4c" }
            }} 
            onClick={handleDelete} // Add onClick event for delete
          >
            <span className="mr-1"><MdDeleteSweep /></span>Delete
          </Button>
          <Button 
            sx={{
              backgroundColor: '#3640f7',
              gap: '4',
              "&:hover": { backgroundColor: "#0b008a" },
              paddingY: '6px',
              paddingX: '10px',
              width: '80px',
              fontWeight: 'bold',
              color: 'white',
              borderRadius: '10px'
            }}
          >
            <span className="mr-1"><FaEdit /></span>Edit
          </Button>
        </Box>

        <Box backgroundColor="#f0f2f5" padding="20px" borderRadius="12px">
          <DialogTitle>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="100%"
              paddingY="20px"
              paddingX="30px"
              backgroundColor="white"
              borderRadius="12px"
            >
              <Box>
                <Avatar
                  alt={user.first_name}
                  src={user.profile_picture ? `${user.profile_picture}` : "/default-profile.png"}
                  sx={{ width: 70, height: 70, border: "2px solid #3366e8" }}
                />
              </Box>

              <Box display="flex" alignItems="center" width="100%">
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" flex={1}>
                  <Typography variant="subtitle2" sx={{ color: '#888', fontSize: '0.9rem' }}>
                    Full Name
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#444', marginBottom: '5px' }}>
                    {`${user.first_name} ${user.father_name} ${user.last_name}`}
                  </Typography>
                </Box>

                <Box height="80px" width="2px" backgroundColor="#ccc" marginX="10px" />

                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" flex={1}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#444', marginBottom: '5px' }}>
                    {user.phone}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: '#888', fontSize: '0.9rem' }}>
                    Phone Number
                  </Typography>
                  <Button
                    variant="contained"
                    startIcon={<Avatar />}
                    href={user.kebele_ID ? `${user.kebele_ID}` : "null"}
                    download
                    className="mt-4"
                    sx={{
                      backgroundColor: "#4379F2",
                      color: "white",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "#3366e8",
                      },
                      width: '200px',
                      height: '45px'
                    }}
                  >
                    View Kebele ID
                  </Button>
                </Box>
              </Box>
            </Box>
          </DialogTitle>

          <DialogContent className="space-y-4 mt-2 p-3">
            <Box display='flex' justifyContent='space-around' alignItems='center'>
              <Box>
                <Typography sx={{ color: "#444", marginTop: "10px", fontStyle: "italic" }}>
                  <strong>Region:</strong> {user.region}
                </Typography>
                <Typography sx={{ color: "#444", marginTop: "10px", fontStyle: "italic" }}>
                  <strong>City:</strong> {user.city}
                </Typography>
                <Typography sx={{ color: "#444", marginTop: "10px", fontStyle: "italic" }}>
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
            <Button
              variant="contained"
              startIcon={<Avatar />}
              href={user.kebele_ID}
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
            </Button>
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

  const fetchUserData = async () => {
    try {
      const userResponse = await axiosInstance.get("/api/register/");
      if (userResponse.data) {
        const usersWithProfiles = userResponse.data.map((user) => {
          const profilePicture = user.profile_picture
            ? `${cloudinaryBaseUrl}${user.profile_picture}`
            : "/default-profile.png";

          const kebele_ID = user.kebele_ID
            ? `${cloudinaryBaseUrl}${user.kebele_ID}`
            : "/default-profile.png";
          console.log("Profile Picture URL:", profilePicture);
          console.log("kebele id url:", kebele_ID);
          return {
            ...user,
            profile_picture: profilePicture,
            kebele_ID: kebele_ID
          };
        });
        setRows(usersWithProfiles);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleRowClick = (params) => {
    setSelectedUser(params.row);
    setOpenDetailModal(true);
  };

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
            onRowClick={handleRowClick} // Handle row click event
            sx={{ minWidth: "800" }}
            slots={{
              toolbar: GridToolbar,
            }}
          />
        </Box>
      </div>

      {selectedUser && (
        <UserDetailModal
          open={openDetailModal}
          onClose={() => setOpenDetailModal(false)}
          user={selectedUser}
        />
      )}
    </div>
  );
};

Users.propTypes = {
  user: PropTypes.shape({
    kebele_ID: PropTypes.string,
    house_number: PropTypes.string,
    kebele: PropTypes.string,
    sub_city: PropTypes.string,
    phone: PropTypes.string,
    profile_picture: PropTypes.string,
    city: PropTypes.string,
    region: PropTypes.string,
    id: PropTypes.number,
    unique_place: PropTypes.string,
    first_name: PropTypes.string,
    father_name: PropTypes.string,
    last_name: PropTypes.string,
  }).isRequired,
};

export default Users;