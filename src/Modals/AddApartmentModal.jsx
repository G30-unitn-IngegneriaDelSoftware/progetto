import React, { StrictMode } from "react";
import Container from "@mui/material/Container";
import Input from "@mui/joy/Input";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/joy/Button";
import Select from "@mui/material/Select";
import Option from "@mui/joy/Option";
import MenuItem from "@mui/material/MenuItem";
import { useCookies } from "react-cookie";
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";
import { set } from "react-hook-form";
import defaultPath from "..";

function AddModal({ isOpen, onClose}) {
  //const defaultValue = modalValue.length > 0 ? modalValue[0].username : null;
  const [nome, setNome] = React.useState("");
  const [descrizione, setDescrizione] = React.useState("");
  const [Cookies, setCookie] = useCookies();

  const nameChange = (event) => {
    setNome(event.target.value);
  };
  const descrizioneChange = (event) => {
    setDescrizione(event.target.value);
  };

  function pulizia(){
    setNome("");
    setDescrizione("");
    }

  function CreazioneAppartamento() {

    if(nome!==""&&descrizione!==""){
      axios
      .post(defaultPath + "/apartments", {
        name: nome,
        description: descrizione,
        admin: Cookies["username"],
        users: [Cookies["username"]],
        expanses: [],
      })
      .then((response) => {
        onClose();
      })
      .catch((error) => {
        console.log(error);
      });

    }
  }

  if (!isOpen) return null;
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999,
      }}
    >
      {/* Overlay semi-trasparente */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Opacità al 50%
        }}
      ></div>
      {/* Modale */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: 20,
          width: "50%", // Imposta la larghezza desiderata
          height: "50%", // Imposta l'altezza desiderata
        }}
      >
        <Container
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
            backgroundColor: "rgb(5, 22, 34)",
            borderRadius: "5vh",
          }}
        >
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{ flexGrow: 1 }}
          >
            <Grid xs={8}>
              <Typography
                variant="h4"
                color="rgb(252, 252, 252)"
                sx={{ fontWeight: "bold" ,textAlign: "center",marginBottom: "5%" }}
              >
                Creazione Appartamento
              </Typography>
            </Grid>
            {/* Input per username */}
            <Grid xs={8}>
              <Input
                placeholder="Inserisci Nome appartamento"
                variant="soft"
                style={{
                  background: "rgb(0, 76, 134)",
                  color: "rgb(252, 252, 252)",
                }}
                value={nome}
                onChange={nameChange}
              />
            </Grid>
            {/* Input per username */}
            <Grid xs={8}>
              <Input
                placeholder="Inserisci descrizione appartamento"
                variant="soft"
                style={{
                  background: "rgb(0, 76, 134)",
                  color: "rgb(252, 252, 252)",
                }}
                value={descrizione}
                onChange={descrizioneChange}
              />
            </Grid>

            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={3}
              style={{ marginTop: "1%" }}
              xs={12}
            >
              <Grid>
                <Button
                  variant="solid"
                  style={{ background: "rgb(0, 76, 134)" }}
                  onClick={onClose}
                >
                  Indietro
                </Button>
              </Grid>
              <Grid>
                <Button
                  variant="solid"
                  style={{ background: "rgb(0, 76, 134)" }}
                  onClick={async () => {
                    CreazioneAppartamento();
                    pulizia();
                  }}
                >
                  Conferma
                </Button>
              </Grid>
            </Grid>
          </Grid>

        </Container>
      </div>
    </div>
  );
}

export default AddModal;
