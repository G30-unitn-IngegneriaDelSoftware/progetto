import React from "react";
import Container from "@mui/material/Container";
import Input from "@mui/joy/Input";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/joy/Button";
import { useNavigate, redirect, Form } from "react-router-dom";
import axios from "axios";
import logoImage from "../images/whitelogo.png";
import defaultPath from "..";

export default function Register() {

  const navigate = useNavigate();
  const [error, setError] = React.useState(null); // State per gestire l'errore
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [againpassword, setAgainPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastNme] = React.useState("");
  const [birthDate, setBirthDate] = React.useState("");
  const [telephone, setTelephone] = React.useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastNme(event.target.value);
  };
  const handleBirthDateChange = (event) => {
    setBirthDate(event.target.value);
  };

  const handleTelephonedChange = (event) => {
    setTelephone(event.target.value);
  };
  const handleAgainPasswordChange = (event) => {
    setAgainPassword(event.target.value);
  };


  async function tryRegister() {
    if(email!==""&&password!==""&&againpassword!==""&&username!==""&&firstName!==""&&lastName!==""&&birthDate!==""&&telephone!==""&&password===againpassword){
      axios
      .post(defaultPath + "/register", {
        email: email,
        password: password,
        username: username,
        firstName: firstName,
        lastName: lastName,
        birthDate: birthDate,
        telephone: telephone,
      })        
      .then((response) => {
        navigate("/", { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
    }else{
      setError("C'è un errore nell'inserimento. Ricontrolla i dati inseriti.");
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
            <img src={logoImage} alt="Logo" style={{ width: "30%" }} /> 
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
                  value={firstName}
                  onChange={handleFirstNameChange}
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
                  value={lastName}
                  onChange={handleLastNameChange}
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
                  value={username}
                  onChange={handleUsernameChange}
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
                  value={email}
                  onChange={handleEmailChange}
                />
              </Grid>
              <Grid xs={12}>
                <Input
                  type="date"
                  placeholder="Data di nascita"
                  variant="soft"
                  style={{
                    background: "rgb(0, 76, 134)",
                    color: "rgb(252, 252, 252)",
                  }}
                  value={birthDate}
                  onChange={handleBirthDateChange}
                />
              </Grid>
              <Grid xs={12}>
                <Input
                type="number"
                  placeholder="Cellulare"
                  variant="soft"
                  style={{
                    background: "rgb(0, 76, 134)",
                    color: "rgb(252, 252, 252)",
                  }}
                  value={telephone}
                  onChange={handleTelephonedChange}
                />
              </Grid>
              <Grid xs={12}>
                <Input
                  type="password"
                  placeholder="Password"
                  variant="soft"
                  style={{
                    background: "rgb(0, 76, 134)",
                    color: "rgb(252, 252, 252)",
                  }}
                  value={password}
                  onChange={handlePasswordChange}
                />
              </Grid>
              <Grid xs={12}>
                <Input
                  type="password"
                  placeholder="Conferma Password"
                  variant="soft"
                  style={{
                    background: "rgb(0, 76, 134)",
                    color: "rgb(252, 252, 252)",
                  }}
                  value={againpassword}
                  onChange={handleAgainPasswordChange}
                />
              </Grid>
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
                    navigate("/", { replace: true });
                  }}
                >
                  Indietro
                </Button>
              </Grid>
              <Grid>
                <Button
                  variant="solid"
                  style={{ background: "rgb(0, 76, 134)" }}
                  onClick={async () => {
                    await tryRegister();
                  }}
                >
                  Registrati
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
}
