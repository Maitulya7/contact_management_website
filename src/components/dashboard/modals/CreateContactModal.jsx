import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for prop types validation
import { Modal, Box, TextField, Button } from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../../../../config";

const CreateContactModal = ({ open, handleClose, fetchData }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSave = () => {
    const token = localStorage.getItem("access-token");
    const data = {
      username: username,
      email: email,
      phone_number: phoneNumber,
    };

    axios
      .post(`${BASE_URL}/api/contacts`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        handleClose();
        fetchData();
      })
      .catch((error) => {
        console.error("Error creating contact:", error);
      });
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="create-contact-modal-title"
      aria-describedby="create-contact-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "white",
          p: 4,
          width: 400,
          maxWidth: "90%",
          borderRadius: 4,
          boxShadow: 24,
        }}
      >
        <h2 id="create-contact-modal-title">Create Contact</h2>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ mt: 2 }}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mt: 2 }}
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          fullWidth
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          sx={{ mt: 2 }}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Button variant="text" onClick={handleClose} sx={{ mr: 2 }}>
            Cancel
          </Button>
          <Button variant="contained" color="success" onClick={handleSave}>
            Create
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

CreateContactModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired,
};

export default CreateContactModal;
