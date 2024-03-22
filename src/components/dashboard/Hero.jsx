import { useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../../../public/dashboard_animation.json";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import ContactTableData from "../../components/dashboard/dataGrid";

const Hero = () => {
  const isLoggedIn = localStorage.getItem("access-token") !== null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("access-token");
        await axios.get("http://localhost:5001/api/contacts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (isLoggedIn) {
      fetchData();
    }
  }, [isLoggedIn]);

  return (
    <Box
      sx={{
        height: "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Typography variant="h4">
        All Contacts
      </Typography>
      {isLoggedIn ? (
        <ContactTableData />
      ) : (
        <>
          <Typography variant="h6">
            To perform actions, please login or register.
          </Typography>
          <Box sx={{ width: "100%", maxWidth: "500px" }}>
            <Lottie animationData={animationData} autoplay loop />
          </Box>
          <Box>
            <Button variant="contained" component={Link} to="/login">
              Login
            </Button>
            <Button variant="contained" component={Link} to="/register">
              Register
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Hero;
