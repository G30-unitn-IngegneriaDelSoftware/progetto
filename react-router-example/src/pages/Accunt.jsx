import React from "react";
import axios from "axios";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/material/Typography";
import Field from "../Components/Field";
import { Box, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import DateField from "../Components/DataField";
import PersonIcon from '@mui/icons-material/AccountCircleRounded';
import DeleteModal from "../Modals/DeleteAccountModal";


export default function Account() {
  const [cookies, setCookie] = useCookies();
  const navigate = useNavigate();
  const [utente, setUtente] = React.useState([]);

  const [id, setId] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [birthday, setBirthday] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [telephone, setTelephone] = React.useState('');
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true); // Aggiorno lo stato
  };

  const closeDeleteModal = (index) => {
    setIsDeleteModalOpen(false); // Aggiorno lo stato
  };

  React.useEffect(() => {
    let sessioneTrovata = false;
    for (const chiave in cookies) {
      // Verifica se la chiave è "session" e se il suo valore ha una lunghezza maggiore di 1
      if (chiave === "session" && cookies[chiave].length > 1) {
        sessioneTrovata = true;
        break; // Esci dal ciclo una volta trovato un valore valido
      }
    }
    if (sessioneTrovata) {
      console.log("esisto");
    } else {
      navigate("/", { replace: true });
      console.log("non esisto");
    }
  }, [cookies]);

  React.useEffect(() => {
    axios
      .get("http://localhost:3002/users/")
      .then(async (response) => {
        const utente = response.data.find(user => user.username === cookies.username);
        await setUtente(utente);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    setId(utente._id);
    setFirstName(utente.firstName);
    setLastName(utente.lastName);
    setBirthday(utente.birthDate);
    setUsername(utente.username);
    setEmail(utente.email);
    setTelephone(utente.telephone);
  }, [utente])

  const firstNameChange = (event) => {setFirstName(event.target.value)};
  const lastNameChange = (event) => {setLastName(event.target.value)};
  const birthDateChange = (event) => {setBirthday(event.target.value)};
  const emailChange = (event) => {setEmail(event.target.value)};
  const telephoneChange = (event) => {setTelephone(event.target.value)};

  function updateUser(){
    axios.patch("http://localhost:3002/users/" + id, {
      firstName: firstName,
      lastName: lastName,
      telephone: telephone,
      birthDate: birthday,
      email: email
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "rgb(20, 42, 58)",
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{
          height: "90%",
          width: "80%",
          // backgroundColor: "rgb(203, 231, 253)",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          style={{
            height: "10%",
            width: "100%",
            //backgroundColor: "rgb(94, 175, 70)",
          }}
        >
          <Typography
            variant="h4"
            style={{ color: "#fcfcfc" }}
            sx={{ fontWeight: "bold" }}
          >
            Account
          </Typography>
        </Grid>
        <Grid
          container
          direction="column"
          style={{
            borderRadius: "25px",
            height: "90%",
            width: "100%",
            padding: "30px",
            backgroundColor: "rgb(203, 231, 253)",
          }}
        >
        <DeleteModal
          isOpen={isDeleteModalOpen}
          onClose={() => closeDeleteModal()}
          value={id}
        />
          <Grid container direction="row" style={{ width: "100%"}}>
            <Box sx={{ flex: 1}}>
              <Field FieldName="Nome" placeholder="Nome" value={firstName} onChange={firstNameChange} />
              <Field FieldName="Cognome" placeholder="Cognome" value={lastName} onChange={lastNameChange} />
              <DateField FieldName="Data di nascita" placeholder="Data di nascita" value={birthday} onChange={birthDateChange} />
              <Field FieldName="Email" placeholder="Email" value={email} onChange={emailChange} />
              <Field FieldName="Telefono" placeholder="Telefono" value={telephone} onChange={telephoneChange} />
            </Box>
            <Box style={{ width: "200px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <PersonIcon sx={{ fontSize: 180, color: "#142A3A" }} />
              <Typography variant="subtitle1" color="#142A3A">{username}</Typography>
            </Box>
          </Grid>
          <Box sx={{ flex: 1, display: "flex", alignItems: "flex-end"}}>
            <Stack spacing={1} direction="row">
              <Button variant="outlined" style={{ color:"#142A3A", borderColor: "#142A3A"}} onClick={updateUser}>Salva dati</Button>
              <Button variant="outlined" style={{ color:"#142A3A", borderColor: "#142A3A"}} onClick={openDeleteModal}>Elimina account</Button>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
