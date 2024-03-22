import Lottie from "lottie-react";
import animationData from "../../../public/dashboard_animation.json";
import { Box, Typography } from "@mui/material";

const Hero = () => {
  const isLoggedIn = localStorage.getItem("access-token") !== null;

  return (
    <>
      {isLoggedIn ? (
        "hello"
      ) : (
        <Box
          sx={{
            maxHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4" sx={{ marginTop: "30px" }}>
            Please Login or Register to perform actions
          </Typography>
          <Box
            sx={{
              maxHeight: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <Lottie animationData={animationData} autoplay loop />
          </Box>
        </Box>
      )}
    </>
  );
};

export default Hero;
