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
  Alert,
  Grow,
} from "@mui/material";
import {
  Email as EmailIcon,
  Lock as LockIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import image from "/register_bg.svg";
import HeaderComponent from "./landingPageSections/Heder";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../config";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false);

  const navigate = useNavigate()

  const handleRegister = () => {
    try {
      axios
        .post(`${BASE_URL}/api/users/register`, {
          username,
          email,
          password,
        })
        .then((res) => {
          console.log(res.data);
          setStatus(true);
          navigate("/login")
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
          <Grid container spacing={24} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ padding: 4, borderRadius: 8 }}>
                <Typography variant="h4" gutterBottom>
                  Create an Account
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
                  onClick={handleRegister}
                >
                  Register
                </Button>

                <Typography variant="body2" align="center" mt={2}>
                  Already have an account? <Link href="/">Login here</Link>
                </Typography>
              </Paper>

              <Grow in={status} timeout={1000}>
                <Alert
                  style={{ marginTop: "30px", borderRadius: "10px" }}
                  variant="filled"
                  severity="success"
                >
                  Successfully Register.
                </Alert>
              </Grow>
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

export default Register;
