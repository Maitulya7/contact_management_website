/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  TextField,
  Typography,
  Button,
  Link,
  Container,
  Grid,
  Paper,
  InputAdornment,
} from "@mui/material";
import {
  Email as EmailIcon,
  Lock as LockIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import image from "/login_bg.svg";
import HeaderComponent from "./landingPageSections/Heder";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    try {
      axios
        .post("http://localhost:5001/api/users/login", {
          username,
          email,
          password,
        })
        .then((res) => {
          console.log(res.data.accessToken);
          localStorage.setItem("access-token", res.data.accessToken);
          navigate("/dashboard");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <>
      <div style={{ height: "100%", width: "100%" }}>
        <HeaderComponent />
        <Container
          maxWidth="lg"
          style={{
            height: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ padding: 8, borderRadius: 4 }}>
                <Typography variant="h4" gutterBottom>
                  Welcome back!
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Enter your credentials:
                </Typography>
                <TextField
                  type="text"
                  label="Username"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  onChange={(e) => setUsername(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  type="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  onChange={(e) => setEmail(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  type="password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                  onClick={handleSignIn}
                >
                  Sign In
                </Button>

                <Typography variant="body2" align="center" mt={2}>
                  Don't have an account?
                  <Link href="/register">
                    <span>Register here</span>
                  </Link>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="100%"
              >
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
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default SignIn;
