import React from 'react'
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
import { bgGradient } from '../../../constants/Color';
import { useInputValidation } from '6pp';
import { Navigate } from 'react-router-dom';

const isAdmin = true;

const AdminLogin = () => {
    const secretKey = useInputValidation("");
    const submitHandler = (e)=>{
        e.preventDefault();
        console.log("Submit");
    }
    if(isAdmin){
        return <Navigate to="/admin/dashboard"></Navigate>
    }
    return (
        <div style={{
          backgroundImage:bgGradient,
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
           
                <Typography variant="h5" color="initial">
                 Admin Login
                </Typography>
                <form
                  style={{
                    width: "100%",
                    marginTop: "1rem",
                  }}
                  onSubmit={submitHandler}
                >
                  <TextField
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    margin="normal"
                    variant="outlined"
                      value={secretKey.value}
                      onChange={secretKey.changeHandler}
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
                
                </form>
              
             
          
          </Paper>
        </Container>
        </div>
      );
}

export default AdminLogin
