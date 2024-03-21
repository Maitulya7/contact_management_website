import { Box, Container, Grid, IconButton, Typography } from "@mui/material";

const TechComponent = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#333", color: "#fff", padding: "80px 0" }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" sx={{ marginBottom: "50px" }}>
            Technologies Used
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={6} md={2}>
              <IconButton color="primary" sx={{ fontSize: "50px" }}>
                <img src="https://skillicons.dev/icons?i=react" alt="HTML" />
              </IconButton>
            </Grid>
            <Grid item xs={6} md={2}>
              <IconButton color="secondary" sx={{ fontSize: "50px" }}>
                <img src="https://skillicons.dev/icons?i=mongodb" alt="CSS" />
              </IconButton>
            </Grid>
            <Grid item xs={6} md={2}>
              <IconButton color="secondary" sx={{ fontSize: "50px" }}>
                <img src="https://skillicons.dev/icons?i=nodejs" alt="CSS" />
              </IconButton>
            </Grid>
            <Grid item xs={6} md={2}>
              <IconButton color="secondary" sx={{ fontSize: "50px" }}>
                <img src="https://skillicons.dev/icons?i=express" alt="CSS" />
              </IconButton>
            </Grid>
            <Grid item xs={6} md={2}>
              <IconButton color="secondary" sx={{ fontSize: "50px" }}>
                <img src="https://skillicons.dev/icons?i=figma" alt="CSS" />
              </IconButton>
            </Grid>
            <Grid item xs={6} md={2}>
              <IconButton color="secondary" sx={{ fontSize: "50px" }}>
                <img
                  src="https://skillicons.dev/icons?i=materialui"
                  alt="CSS"
                />
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default TechComponent;
