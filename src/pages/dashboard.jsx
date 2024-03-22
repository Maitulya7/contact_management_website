import { Box } from "@mui/material";
import Hero from "../components/dashboard/Hero";
import Navbar from "../components/dashboard/Navbar";

const Dashboard = () => {
  return (
    <>
      <Box
        sx={{ maxHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Navbar />
        <Hero />
      </Box>
    </>
  );
};

export default Dashboard;
