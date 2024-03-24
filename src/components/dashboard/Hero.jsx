import { useState, useEffect } from "react";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import Lottie from "lottie-react";
import animationData from "../../../public/dashboard_animation.json";
import CreateContactModal from "./modals/CreateContactModal";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EditContactModal from "./modals/EditContactModal";
import { BASE_URL } from "../../../config";

const Hero = () => {
  const isLoggedIn = localStorage.getItem("access-token") !== null;
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState("");
  const [contactData, setContactData] = useState([]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("access-token");
      const response = await axios.get(`${BASE_URL}/api/contacts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setContactData(
        response.data.map((row, index) => ({ ...row, id: index + 1 }))
      );
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const handleDelete = (id) => {
    try {
      const token = localStorage.getItem("access-token");
      axios
        .delete(`${BASE_URL}/api/contacts/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          setContactData((prevData) =>
            prevData.filter((contact) => contact.id !== id)
          );
          fetchData();
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.error("Error deleting contact:", error.message);
    }
  };

  const handleEditModalOpen = (row) => {
    setSelectedRow(row);
    setOpenEditModal(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    { field: "id", headerName: "Sr. No" },
    { field: "username", headerName: "Name", width: 200 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "phone_number", headerName: "Phone Number", width: 250 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <Stack direction="row" spacing={1}>
          <IconButton
            onClick={() => {
              handleDelete(params.row._id);
            }}
            sx={{ "&:hover": { backgroundColor: "rgba(255, 0, 0, 0.1)" } }}
          >
            <DeleteIcon color="error" />
          </IconButton>
          <IconButton
            onClick={() => {
              handleEditModalOpen(params.row);
            }}
            sx={{
              color: "green",
              "&:hover": { backgroundColor: "rgba(0, 0, 255, 0.1)" },
            }}
          >
            <EditIcon />
          </IconButton>
        </Stack>
      ),
    },
  ];

  return (
    <Box
      sx={{
        maxHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 4,
        padding: 4,
      }}
    >
      {isLoggedIn ? (
        <Stack spacing={2} alignItems="center">
          <Typography variant="h5">Welcome to the Dashboard</Typography>
          <Button variant="contained" onClick={() => setOpenCreateModal(true)}>
            Create Contact
          </Button>
          <CreateContactModal
            open={openCreateModal}
            handleClose={() => setOpenCreateModal(false)}
            fetchData={fetchData}
          />
          <EditContactModal
            open={openEditModal}
            handleClose={() => setOpenEditModal(false)}
            selectedRow={selectedRow}
            fetchData={fetchData}
          />
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid columns={columns} rows={contactData} />
          </div>
        </Stack>
      ) : (
        <>
          <Typography variant="h6">
            To perform actions, please login or register.
          </Typography>
          <Box sx={{ width: "100%", maxWidth: "600px" }}>
            <Lottie animationData={animationData} autoplay loop />
          </Box>
        </>
      )}
    </Box>
  );
};

export default Hero;
