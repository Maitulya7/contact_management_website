import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

const ContactTableData = () => {
  const [rows, setRows] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [editedContact, setEditedContact] = useState({});
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    phone_number: "",
  });

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("access-token");
      const response = await axios.get("http://localhost:5001/api/contacts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const formattedRows = response.data.map((row, index) => ({
        id: row._id || index, // Using _id as the unique identifier, fallback to index if _id is missing
        ...row,
      }));
      setRows(formattedRows);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (row) => {
    setSelectedContact(row);
    setEditedContact(row);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedContact(null);
    setEditedContact({});
    setNewContact({
      name: "",
      email: "",
      phone_number: "",
    });
  };

  const handleSaveEdit = async () => {
    try {
      const token = localStorage.getItem("access-token");
      const response = await axios.put(
        `http://localhost:5001/api/contacts/${selectedContact.id}`,
        editedContact,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Updated contact:", response.data);
      setRows((prevRows) =>
        prevRows.map((row) =>
          row.id === response.data.id ? response.data : row
        )
      );
      setEditedContact({}); // Clear editedContact after save
      handleCloseModal();
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("access-token");
      await axios.delete(`http://localhost:5001/api/contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleAddContact = async () => {
    try {
      const token = localStorage.getItem("access-token");
      const response = await axios.post(
        "http://localhost:5001/api/contacts",
        newContact,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Added contact:", response.data);
      setRows([...rows, response.data]);
      handleCloseModal();
      fetchData()
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };

  const columns = [
    { field: "name", headerName: "Name", width: 200, editable: true },
    { field: "email", headerName: "Email", width: 300, editable: true },
    {
      field: "phone_number",
      headerName: "Phone Number",
      width: 250,
      editable: true,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      sortable: false,
      renderCell: (params) => (
        <div>
          <IconButton
            color="primary"
            aria-label="edit"
            onClick={() => handleEdit(params.row)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="error"
            aria-label="delete"
            onClick={() => handleDelete(params.row.id)}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      ),
    },
  ];

  return (
    <Box sx={{ height: 400, width: "50%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
        autoHeight
        style={{ width: "100%" }}
      />

      <Button onClick={() => setOpenModal(true)} variant="contained" color="primary">
        Add Contact
      </Button>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <h2 id="modal-title">Add Contact</h2>
          <TextField
            label="Name"
            value={newContact.name}
            onChange={(e) =>
              setNewContact((prev) => ({ ...prev, name: e.target.value }))
            }
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            value={newContact.email}
            onChange={(e) =>
              setNewContact((prev) => ({ ...prev, email: e.target.value }))
            }
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone Number"
            value={newContact.phone_number}
            onChange={(e) =>
              setNewContact((prev) => ({ ...prev, phone_number: e.target.value }))
            }
            fullWidth
            margin="normal"
          />
          <Button onClick={handleAddContact} variant="contained" color="primary">
            Add
          </Button>
          <Button onClick={handleCloseModal} variant="contained">
            Cancel
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default ContactTableData;
