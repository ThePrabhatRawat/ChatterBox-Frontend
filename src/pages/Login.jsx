import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Avatar,
  IconButton,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
import {useInputValidation ,useFileHandler } from "6pp";
import { userNameValidator } from "../utils/validators";


function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => {
    if (isLogin) setIsLogin(false);
    else setIsLogin(true);
  };
  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("",userNameValidator);
  const password = useInputValidation("");
  const avatar = useFileHandler("single");

  const handleSignUp = (e)=>{
    e.preventDefault();
  }
  const handleLogin = (e)=>{
    e.preventDefault();
  }

  return (
    <div style={{
      backgroundImage:"url(../images/image.jpg)"
    }}>
      
    
    <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "rgba(255,255,255,0.7 )"
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5" color="initial">
              Login
            </Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
              onSubmit={handleLogin}
            >
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                  value={password.value}
                  onChange={password.changeHandler}
              />
              <Button
                sx={{ marginTop: "1rem" }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Login
              </Button>
              <Typography textAlign={"center"} m={"1rem"}>
                {" "}
                OR
              </Typography>
              <Button
                // sx={{
                //   marginTop: "0.1rem",
                // }}
                variant="text"
                fullWidth
                onClick={toggleLogin}
              >
                Sign Up Instead
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5" color="initial">
              Sign Up
            </Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
              onSubmit={handleSignUp}
            >
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain",
                  }}
                  src ={avatar.preview}
                />
                <IconButton
                  sx={{
                    position: "absolute", 
                    bottom: "0",
                    right: "0",
                    bgcolor: "rgba(255,255,255  ,0.1)",
                    ":hover": {
                      bgcolor: "rgba(255,255,255,0.8)",
                    
                    },
                  }}
                >
                  <>
                    <CameraAltIcon />
                      <VisuallyHiddenInput
                        type="file"
                        onChange={avatar.changeHandler}
                      />
                    
                  </>
                </IconButton>
              </Stack>
              {
                avatar.error &&(
                  <Typography m={"1rem"} width={"fit-content"} display={"block"} color="error" varient="caption">{avatar.error}</Typography>
                )
              }
              <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                  value={name.value}
                  onChange={name.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Bio  "
                margin="normal"
                variant="outlined"
                  value={bio.value}
                  onChange={bio.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                  value={username.value}
                  onChange={username.changeHandler}
              />

              {
                username.error &&(
                  <Typography color="error" varient="caption">{username.error}</Typography>
                )
              }
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                  value={password.value}
                  onChange={password.changeHandler}
              />
              {/* {
                password.error &&(
                  <Typography color="error" varient="caption">{password.error}</Typography>
                )
              } */}
              <Button
                sx={{ marginTop: "1rem" }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Sign Up
              </Button>
              <Typography textAlign={"center"} m={"1rem"}>
                {" "}
                OR
              </Typography>
              <Button
                // sx={{
                //   marginTop: "1rem",
                // }}
                variant="text"
                fullWidth
                onClick={toggleLogin}
              >
                Login Instead Instead
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
    </div>
  );
}

export default Login;
