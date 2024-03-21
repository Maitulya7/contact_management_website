import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import { AccountCircle, ContactMail, Storage } from "@mui/icons-material";

const FeaturesComponent = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#f9f9f9", padding: "80px 0" }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" sx={{ marginBottom: "30px" }}>
            Key Features
          </Typography>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <IconButton color="primary">
                  <AccountCircle sx={{ fontSize: 50 }} />
                </IconButton>
              </Box>
              <Typography
                variant="h5"
                align="center"
                sx={{ marginBottom: "10px" }}
              >
                Login & Registration
              </Typography>
              <Typography variant="body1" align="center">
                Easily create an account or log in to access your personalized
                dashboard.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <IconButton color="secondary">
                  <ContactMail sx={{ fontSize: "50px" }} />
                </IconButton>
              </Box>
              <Typography
                variant="h5"
                align="center"
                sx={{ marginBottom: "10px" }}
              >
                Contact Management
              </Typography>
              <Typography variant="body1" align="center">
                Manage your contacts with fields for name, email, and phone
                number.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <IconButton color="primary">
                  <Storage sx={{ fontSize: "50px" }} />
                </IconButton>
              </Box>
              <Typography
                variant="h5"
                align="center"
                sx={{ marginBottom: "10px" }}
              >
                Database Storage
              </Typography>
              <Typography variant="body1" align="center">
                Contacts are securely stored in MongoDB for easy access and
                management.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default FeaturesComponent;
