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
import { IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";
import { set } from "react-hook-form";
import Appartamenti from "../pages/Appartamenti";
import defaultPath from "..";

function EditModal({ isOpen, onClose,id,value}) {
  //const defaultValue = modalValue.length > 0 ? modalValue[0].username : null;
  const [valore, setValore] = React.useState(id);
  const [render, setRender] = React.useState(id);
  const [nome, setNome] = React.useState(value.nome);
  const [descrizione, setDescrizione] = React.useState(value.descrizione);
  const [membri, setMembri] = React.useState([]);
  const [Cookies, setCookie] = useCookies();

  React.useEffect(() => {
    setRender(!render);
  }, [isOpen]);

  React.useEffect(() => {
    axios
      .get(defaultPath + "/apartments/"+valore+"/members")
      .then((response) => {
        setMembri(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [render]);



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
  
  function eliminaUtente(identificativo){
    setMembri(membri.filter(membro => membro!==identificativo));
  }

  function ModificaAppartamento() {

    if(nome!==""&&descrizione!==""){
      axios
      .patch(defaultPath + "/apartments/"+id, {
        name: nome,
        description: descrizione,
        users: [...membri,Cookies["username"]],
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
          height: "70%", // Imposta l'altezza desiderata
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
                Modifica Appartamento
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
                  marginBottom: "2%"
                }}
                value={descrizione}
                onChange={descrizioneChange}
              />
            </Grid>
            <Grid 
              xs={8}
              style={{
                height: "15vh",
                width: "64%",
                backgroundColor: "rgb(0, 76, 134)",
                overflowY: "auto", // Scorrimento verticale
                overflowX: "hidden", // Nasconde lo scorrimento orizzontale
                padding: "10px" ,// Aggiunta del padding per evitare che il contenuto si sovrapponga ai bordi
                borderRadius: "8px"
              }}
            >
              {membri.map((membro, index) => (
                <Grid key={index} container spacing={1} alignItems="center">
                  {/* Elemento che occupa l'80% dello spazio */}
                  <Grid xs={11} >
                    {/* Contenuto qui */}
                    <Typography variant="body1" style={{color: "rgb(252, 252, 252)",}}>{membro}</Typography>
                  </Grid>
                  {/* Elemento che occupa il restante 20% dello spazio */}
                  <Grid xs={1} >
                    {/* Contenuto qui */}
                    {
                      membro!==Cookies["username"] &&
                      <IconButton
                        aria-label="edit"
                        style = { {color: "#142A3A", padding: "0"} }
                        onClick={() => {
                          eliminaUtente(membro);
                        }}>
                        <ClearIcon
                          sx={{
                            borderRadius: "50%",
                            border: "1px solid white",
                            color: "white",
                          }}
                        ></ClearIcon>
                      </IconButton>
                    }
                  </Grid>
                </Grid>
              ))}
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
                    ModificaAppartamento();
                    //pulizia();
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

export default EditModal;
