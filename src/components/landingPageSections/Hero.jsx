import { Box, Button, Container, Grid, Typography } from "@mui/material";
import image from "/hero_bg.svg";

const HeroComponent = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#fff",
          padding: "80px 0",
          position: "relative",
        }}
      >
        <Container maxWidth="lg">
          <Grid container alignItems="center" spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h2">
                Welcome to Contact Management{" "}
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: "30px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                sagittis nisl nec dolor pretium, at ultricies magna tincidunt.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                href="/dashboard"
              >
                Get Started
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                src={image}
                alt="image"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </Grid>
          </Grid>
        </Container>
        {/* Animation */}
        <Box
          sx={{
            position: "absolute",
            bottom: "-40px",
            right: "10%",
            zIndex: -1,
          }}
        >
          <img
            src="/animation.svg"
            alt="Animation"
            style={{ width: "500px" }}
          />
        </Box>
      </Box>
    </>
  );
};

export default HeroComponent;
