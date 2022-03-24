import { Box, Button, Container, Paper, TextField } from "@mui/material";
import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import { apiLogin } from "../api";
import { useNavigate } from "react-router-dom";

const refEmail = React.createRef();
const refPassword = React.createRef();

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const req = {
      email: refEmail.current.value,
      password: refPassword.current.value,
    };
    console.log(JSON.stringify(req));

    fetch(apiLogin, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accepts: "application/json",
      },
      body: JSON.stringify(req),
    })
      .then((response) => response.json())
      .then((body) => {
        if (body.status) {
          localStorage.setItem("sogaToken", body.token);

          navigate("/", { replace: true });
        } else {
          console.log(body.message);
        }
      });
  };

  return (
    <div>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: "50%",
              height: "50%",
              margin: "auto",
              padding: "1rem",
            },
          }}
        >
          <Paper elevation={3}>
            <form role="form" onSubmit={handleSubmit}>
              <TextField
                required
                fullWidth
                id="outlined-required"
                label="Email"
                margin="normal"
                inputRef={refEmail}
                type="email"
              />
              <TextField
                required
                fullWidth
                id="outlined-required"
                label="Password"
                type="password"
                margin="normal"
                inputRef={refPassword}
              />
              <Button
                type="submit"
                variant="contained"
                startIcon={<LoginIcon />}
              >
                Log In
              </Button>
            </form>
          </Paper>
        </Box>
      </Container>
    </div>
  );
};

export default LoginPage;
