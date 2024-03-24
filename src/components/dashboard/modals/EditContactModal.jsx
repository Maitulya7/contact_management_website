import { useEffect, useState } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";
import PropTypes from "prop-types";
import axios from "axios";
import { BASE_URL } from "../../../../config";

const EditContactModal = ({ open, handleClose, selectedRow, fetchData }) => {
  const [editedData, setEditedData] = useState(selectedRow);

  useEffect(() => {
    setEditedData(selectedRow);
  }, [selectedRow]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    const id = selectedRow._id;
    try {
      const token = localStorage.getItem("access-token");
      axios
        .put(`${BASE_URL}/api/contacts/${id}`, editedData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          fetchData();
          handleClose();
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.error("Error updating contact:", error.message);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          maxWidth: 400,
          width: "100%",
          borderRadius: 4,
        }}
      >
        <TextField
          fullWidth
          label="Name"
          name="username"
          value={editedData.username}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={editedData.email}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Phone Number"
          name="phone_number"
          value={editedData.phone_number}
          onChange={handleChange}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpdate}
          sx={{ mt: 2 }}
        >
          Save Changes
        </Button>
      </Box>
    </Modal>
  );
};

EditContactModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  selectedRow: PropTypes.object.isRequired,
  fetchData: PropTypes.func.isRequired,
};

export default EditContactModal;
