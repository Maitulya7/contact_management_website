import { Box, Container, Typography } from "@mui/material";

const FooterComponent = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#222", color: "#fff", padding: "30px 0" }}>
        <Container maxWidth="lg">
          <Typography variant="body2" align="center">
            &copy; {new Date().getFullYear()} Your Website. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default FooterComponent;
