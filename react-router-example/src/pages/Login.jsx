import React from "react";
import Container from "@mui/material/Container";
import Input from "@mui/joy/Input";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/joy/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function Login() {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null); // State per gestire l'errore

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  async function tryLogin() {
    try {
      if (username !== "" && password !== "") {
        const response = await axios.post("http://localhost:3002/login", {
          username: username,
          password: password,
        });
        setCookie('username', username);
        navigate("/appartamenti", { replace: true });
      }
    } catch (error) {
      setError("Credenziali non valide. Riprova."); // Imposta il messaggio di errore
      setPassword("");
      setUsername("");
      console.error("Errore durante il login:", error);
    }
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {" "}
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Container
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "40vh",
            width: "20vw",
            backgroundColor: "rgb(5, 22, 34)",
            borderRadius: "5vh",
          }}
        >
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={4}
            sx={{ flexGrow: 1 }}
          >
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              xs={12}
            >
              <Typography
                variant="h4"
                color="rgb(252, 252, 252)"
                sx={{ fontWeight: "bold" }}
              >
                LOGIN
              </Typography>
            </Grid>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={3}
              sx={{ flexGrow: 1 }}
            >
              <Grid xs={12}>
                <Input
                  placeholder="Inserisci Username"
                  variant="soft"
                  style={{
                    background: "rgb(0, 76, 134)",
                    color: "rgb(252, 252, 252)",
                  }}
                  value={username}
                  onChange={handleUsernameChange}
                />
              </Grid>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={1}
                sx={{ flexGrow: 1 }}
              >
                <Grid xs={12}>
                  <Input
                    placeholder="Inserisci Password"
                    variant="soft"
                    style={{
                      background: "rgb(0, 76, 134)",
                      color: "rgb(252, 252, 252)",
                    }}
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </Grid>
                {error && ( // Mostra il messaggio di errore se presente
                  <Typography
                    variant="caption"
                    color="error"
                    sx={{ ml: 10 }}
                  >
                    {error}
                  </Typography>
                )}
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={3}
              xs={12}
            >
              <Grid>
                <Button
                  variant="solid"
                  style={{ background: "rgb(0, 76, 134)" }}
                  onClick={() => {
                    navigate("/register", { replace: true });
                  }}
                >
                  Sign Up
                </Button>
              </Grid>
              <Grid>
                <Button
                  variant="solid"
                  style={{ background: "rgb(0, 76, 134)" }}
                  onClick={tryLogin}
                >
                  Sign In
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
}
