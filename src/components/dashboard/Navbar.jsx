import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Stack,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const Navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("access-token") !== null;

  const handleProfileClick = () => {
    // Handle profile click action
  };

  const handleLogout = () => {
    localStorage.removeItem("access-token");
    Navigate("/login");
  };

  return (
    <AppBar position="static" sx={{ paddingX: "30px" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            Contact Management
          </Link>
        </Typography>
        {isLoggedIn ? (
          <>
            <Stack spacing={2} direction="row">
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={handleProfileClick}
              >
                <AccountCircle fontSize="medium" />
              </IconButton>
              <Button variant="contained" color="error" onClick={handleLogout}>
                Logout
              </Button>
            </Stack>
          </>
        ) : (
          <>
            <Stack spacing={2} direction="row">
              <Button
                variant="contained"
                color="secondary"
                onClick={() => Navigate("/register")}
              >
                Register
              </Button>
              <Button
                variant="contained"
                color="success"
                onClick={() => Navigate("/login")}
              >
                Login
              </Button>
            </Stack>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
