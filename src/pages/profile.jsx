import { useState, useEffect } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Navbar from "../components/dashboard/Navbar";
import EditIcon from "@mui/icons-material/Edit";

import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import { BASE_URL } from "../../config";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("access-token");
    axios
      .get(`${BASE_URL}/api/users/current`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserData(response.data);
        // Retrieve cover image and profile image from local storage if available
        const storedCoverImage = localStorage.getItem("cover-image");
        const storedProfileImage = localStorage.getItem("profile-image");
        if (storedCoverImage) {
          setCoverImage(storedCoverImage);
        }
        if (storedProfileImage) {
          setProfileImage(storedProfileImage);
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleCoverImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const imageData = reader.result;
      // Save cover image to local storage
      localStorage.setItem("cover-image", imageData);
      setCoverImage(imageData);
    };
    reader.readAsDataURL(file);
  };

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const imageData = reader.result;
      // Save profile image to local storage
      localStorage.setItem("profile-image", imageData);
      setProfileImage(imageData);
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <Navbar />
      <Stack padding={6}>
        <Grid container justifyContent="center" spacing={3}>
          <Grid item xs={12} sm={8} md={6}>
            <Paper elevation={3} style={{ padding: "20px" }}>
              <input
                type="file"
                accept="image/*"
                onChange={handleCoverImageChange}
                style={{ display: "none" }}
                id="cover-image-upload"
              />
              <label htmlFor="cover-image-upload">
                <Button
                  variant="contained"
                  color="primary"
                  component="span"
                  style={{ marginBottom: "20px" }}
                >
                  Upload Cover Image
                </Button>
              </label>
              {coverImage && (
                <img
                  src={coverImage}
                  alt="Cover"
                  style={{
                    width: "100%",
                    maxHeight: "300px",
                    objectFit: "cover",
                    marginBottom: "20px",
                    borderRadius: "8px",
                  }}
                />
              )}
              <Stack direction="column" alignItems="center" spacing={2}>
                <Avatar
                  onClick={() =>
                    document.getElementById("profile-image-upload").click()
                  }
                  sx={{
                    width: 100,
                    height: 100,
                    backgroundColor: "#f50057",
                    cursor: "pointer",
                  }}
                >
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt="Profile"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    />
                  ) : (
                    <EditIcon fontSize="large" />
                  )}
                </Avatar>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleProfileImageChange}
                  style={{ display: "none" }}
                  id="profile-image-upload"
                />
                <Typography variant="h5" align="center" gutterBottom>
                  Username: {userData?.username || "Loading..."}
                </Typography>
                <Typography variant="body1" align="center" gutterBottom>
                  Email: {userData?.email || "Loading..."}
                </Typography>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default Profile;
