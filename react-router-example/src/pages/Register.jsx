import React from "react";
import Container from "@mui/material/Container";
import Input from "@mui/joy/Input";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/joy/Button";
import { useNavigate, redirect, Form } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  return (    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
          height: "75vh",
          width: "23vw",
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
              REGISTER
            </Typography>
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
                placeholder="Nome"
                variant="soft"
                style={{
                  background: "rgb(0, 76, 134)",
                  color: "rgb(252, 252, 252)",
                }}
              />
            </Grid>
            <Grid xs={12}>
              <Input
                placeholder="Cognome"
                variant="soft"
                style={{
                  background: "rgb(0, 76, 134)",
                  color: "rgb(252, 252, 252)",
                }}
              />
            </Grid>
            <Grid xs={12}>
              <Input
                placeholder="Username"
                variant="soft"
                style={{
                  background: "rgb(0, 76, 134)",
                  color: "rgb(252, 252, 252)",
                }}
              />
            </Grid>
            <Grid xs={12}>
              <Input
                placeholder="Email"
                variant="soft"
                style={{
                  background: "rgb(0, 76, 134)",
                  color: "rgb(252, 252, 252)",
                }}
              />
            </Grid>
            <Grid xs={12}>
              <Input
                placeholder="Data di nascita"
                variant="soft"
                style={{
                  background: "rgb(0, 76, 134)",
                  color: "rgb(252, 252, 252)",
                }}
              />
            </Grid>
            <Grid xs={12}>
              <Input
                placeholder="Cellulare"
                variant="soft"
                style={{
                  background: "rgb(0, 76, 134)",
                  color: "rgb(252, 252, 252)",
                }}
              />
            </Grid>
            <Grid xs={12}>
              <Input
                placeholder="Password"
                variant="soft"
                style={{
                  background: "rgb(0, 76, 134)",
                  color: "rgb(252, 252, 252)",
                }}
              />
            </Grid>
            <Grid xs={12}>
              <Input
                placeholder="Conferma Password"
                variant="soft"
                style={{
                  background: "rgb(0, 76, 134)",
                  color: "rgb(252, 252, 252)",
                }}
              />
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
                  navigate("/login", { replace: true });
                }}
              >
                Cancel
              </Button>
            </Grid>
            <Grid>
              <Button
                variant="solid"
                style={{ background: "rgb(0, 76, 134)" }}
                onClick={() => {
                  navigate("/", { replace: true });
                }}
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Container>
    </div>);

}
