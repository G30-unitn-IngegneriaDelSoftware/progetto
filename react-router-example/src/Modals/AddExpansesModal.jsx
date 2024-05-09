import React from "react";
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

function AddModal({ isOpen, onClose, value }) {
  //const defaultValue = modalValue.length > 0 ? modalValue[0].username : null;
  const [modalValue, setModalValue] = React.useState(value);
  const [nome, setNome] = React.useState("");
  const [descrizione, setDescrizione] = React.useState("");
  const [importo, setimporto] = React.useState("");
  const [data, setdata] = React.useState("");
  const [creditore, setcreditore] = React.useState(modalValue[0].username);
  const [debitori, setDebitori] = React.useState([modalValue[0].username]);
  const [Cookies, setCookie] = useCookies();

  function aggiuntaSpesa() {

    if(nome!==""&&descrizione!==""&&importo!==""&&data!==""&&debitori.length>0){
      const obj = {
        name: nome,
        description: descrizione,
        import: parseFloat(importo),
        date: data,
        creditor: creditore,
        debitors: debitori
      }
      axios
        .post(
          "http://localhost:3002/apartments/" +Cookies["apartment_id"] +"/expenses",
          obj
        )
        .then((response) => {
          console.log("aggiunta spesa");
          console.log(response);
          pulizia();
          onClose();
        })
        .catch((error) => {
          console.log(error);
        });

    }
  }

  function pulizia(){
    setNome("");
    setDescrizione("");
    setimporto("");
    setdata("");
    setcreditore(modalValue[0].username);
    setDebitori([modalValue[0].username]);
  }

  React.useEffect(() => {
    axios
      .get("http://localhost:3002/apartments/"+Cookies["apartment_id"]+"/members")
      .then((response) => {
        setModalValue(response.data.map(elemento => {
          return { username: elemento };
        }));
        //setApartmenst(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [isOpen]);

  React.useEffect(() => {
    setModalValue(value);
  }, [value]);

  React.useEffect(() => {
    console.log("dio cane dove sta il cambio");
    console.log(modalValue);
  }, [modalValue]);

  const nameChange = (event) => {
    setNome(event.target.value);
  };
  const descrizioneChange = (event) => {
    setDescrizione(event.target.value);
  };
  const importoChange = (event) => {
    let nuovoValore = event.target.value;
    // Controlla se ci sono più di 2 cifre decimali
    const regex = /^\d*\.?\d{0,2}$/;
    if (!regex.test(nuovoValore)) {
      return;
    }
    setimporto(nuovoValore);
  };
  const dataChange = (event) => {
    setdata(event.target.value);
  };
  const creditoreChange = (event) => {
    setcreditore(event.target.value);
  };
  const debitoriChange = (event) => {
    setDebitori(event.target.value);
    
  };

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
          height: "60%", // Imposta l'altezza desiderata
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
            {/* Titolo del modale */}
            <Grid xs={8}>
              <Typography
                variant="h4"
                color="rgb(252, 252, 252)"
                sx={{ fontWeight: "bold" }}
              >
                Aggiunta spesa
              </Typography>
            </Grid>
            {/* Input per username */}
            <Grid xs={8}>
              <Input
                placeholder="Inserisci Nome"
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
                placeholder="Inserisci descrizione"
                variant="soft"
                style={{
                  background: "rgb(0, 76, 134)",
                  color: "rgb(252, 252, 252)",
                }}
                value={descrizione}
                onChange={descrizioneChange}
              />
            </Grid>
            {/* Input per username */}
            <Grid xs={8}>
              <Input
                placeholder="Inserisci import"
                type="number"
                variant="soft"
                style={{
                  background: "rgb(0, 76, 134)",
                  color: "rgb(252, 252, 252)",
                }}
                value={importo}
                onChange={importoChange}
              />
            </Grid>
            {/* Input per username */}
            <Grid xs={8}>
              <Input
                placeholder="Inserisci date"
                type="date"
                variant="soft"
                style={{
                  background: "rgb(0, 76, 134)",
                  color: "rgb(252, 252, 252)",
                }}
                value={data}
                onChange={dataChange}
              />
            </Grid>
            {/* Input per username */}
            <Grid xs={8}>
            <Typography style={{ color: 'white' }}>Creditore</Typography>
            </Grid>
            <Grid xs={8}>
              <Select
                //defaultValue={value[0].username}
                onChange={creditoreChange}
                value={creditore}
                style={{
                  height: "100%",
                  width: "100%",
                  color: "white",
                }}
              >
                {modalValue.map((elemento, index3) => (
                  <MenuItem key={index3} value={elemento.username}>
                    {elemento.username}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid xs={8}>
            <Typography style={{ color: 'white' }}>Lista Debitori</Typography>
            </Grid>
            
            <Grid xs={8}>
              <Select
                //defaultValue={[value[0].username]}
                multiple
                value={debitori}
                onChange={debitoriChange}
                style={{
                  height: "100%",
                  width: "100%",
                  color: "white",
                }}
              >
                {modalValue.map((elemento, index3) => (
                  <MenuItem key={index3} value={elemento.username}>
                    {elemento.username}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
                
            {/* Pulsanti Sign Up e Sign In */}
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
                    aggiuntaSpesa();
                    
                  }}
                >
                  Aggiungi
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
