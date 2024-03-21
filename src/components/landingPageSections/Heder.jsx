import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div>
      <Box sx={{ backgroundColor: "#f0f0f0", padding: "20px 0" }}>
        <Container maxWidth="lg">
          <Grid container alignItems="center" justifyContent="space-between">
            <Typography variant="h4" sx={{ color: "#333" }}>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    color: "black",
                  }}
                >
                  Contact Management
                </span>
              </Link>
            </Typography>
            <Stack direction="row" spacing={3}>
              <Button variant="contained" color="primary" href="/login">
                Login
              </Button>
              <Button variant="contained" color="secondary" href="/register">
                Register
              </Button>
            </Stack>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default HeaderComponent;
