import React from "react";
import Container from "@mui/material/Container";
import Input from "@mui/joy/Input";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/joy/Button";
import { useNavigate, redirect, Form } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
//axios.defaults.withCredentials = true;

async function tryLogin() {
  axios
    .post("http://localhost:3002/login", {
      username: "username",
      password: "password",
    })
    .then((response) => {
      console.log(response);
    });
}

export default function Login() {
  const [cookies, setCookie] = useCookies(["session"]);
  const navigate = useNavigate();
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
                  />
                </Grid>
                <Typography
                  variant="caption"
                  color="rgb(252, 252, 252)"
                  sx={{ ml: 10 }}
                >
                  Dimenticato la Password?
                </Typography>
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
                    axios
                      .get("http://localhost:3002/users", {})
                      .then((response) => {
                        console.log(response);
                      });
                    //navigate("/register", { replace: true });
                  }}
                >
                  Sign Up
                </Button>
              </Grid>
              <Grid>
                <Button
                  variant="solid"
                  style={{ background: "rgb(0, 76, 134)" }}
                  onClick={async () => {
                    await tryLogin();
                    navigate("/", { replace: true });
                  }}
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
