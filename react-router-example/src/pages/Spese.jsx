import React from "react";
import Grid from "@mui/joy/Grid";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import axios from "axios";
import { useCookies } from "react-cookie";
import EditModal from "../Modals/EditExpansesModal";
import DeleteModal from "../Modals/DeleteExpansesModal";
import AddModal from "../Modals/AddExpansesModal";
import { Button, Card, CardContent, IconButton } from "@mui/material";

export default function Spese() {
  const [cookies, setCookie] = useCookies();
  const navigate = useNavigate();
  const [spese, setSpese] = React.useState([]);
  const [render, setRender] = React.useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = React.useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = React.useState(Array(spese.length).fill(false));
  const [modalAddValue, setAddModalValue] = React.useState([{ username: "None" }]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(Array(spese.length).fill(false));
  const [modalEditValue, setEditModalValue] = React.useState(Array(spese.length).fill(false));
  const [modalDeleteValue, setDeleteModalValue] = React.useState([{ username: "None" }]);

  const [debits,setDebits]=React.useState([]);


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
      .get("http://localhost:3002/users")
      .then(async (response) => {
        await setAddModalValue(response.data); // Aspetta che setModalValue sia completato

      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(
        "http://localhost:3002/apartments/" +
          cookies["apartment_id"] +
          "/expenses"
      )
      .then(async (response) => {
        console.log("spese");
        console.log(response.data);
        setSpese(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
      axios
      .get(
        "http://localhost:3002/apartments/" +
          cookies["apartment_id"] +
          "/debits"
      )
      .then(async (response) => {
        console.log("debiti");
        console.log(response.data);
        setDebits(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    axios
      .get(
        "http://localhost:3002/apartments/" +
          cookies["apartment_id"] +
          "/expenses"
      )
      .then(async (response) => {
        setSpese(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
      axios
      .get(
        "http://localhost:3002/apartments/" +
          cookies["apartment_id"] +
          "/debits"
      )
      .then(async (response) => {
        console.log("debiti");
        console.log(response.data);
        setDebits(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [render]);


  const openAddModal = () => {
    //console.log("modalValuepreapertura");
    //console.log(modalValue);
    setIsAddModalOpen(true);
  };
  const openEditModal = (index) => {
    const updatedIsEditModalOpen = [...isEditModalOpen]; // Creo una copia dell'array di booleani
    updatedIsEditModalOpen[index] = true; // Imposto il valore corrispondente all'indice su true
    setIsEditModalOpen(updatedIsEditModalOpen); // Aggiorno lo stato
  };
  const openDeleteModal = (index) => {
    const updatedIsDeleteModalOpen = [...isDeleteModalOpen]; // Creo una copia dell'array di booleani
    updatedIsDeleteModalOpen[index] = true; // Imposto il valore corrispondente all'indice su true
    setIsDeleteModalOpen(updatedIsDeleteModalOpen); // Aggiorno lo stato
  };

  const closeAddModal = () => {
    setRender(!render);
    setIsAddModalOpen(false);
  };
  const closeEditModal = (index) => {
    const updatedIsEditModalOpen = [...isEditModalOpen]; // Creo una copia dell'array di booleani
    updatedIsEditModalOpen[index] = false; // Imposto il valore corrispondente all'indice su false
    setIsEditModalOpen(updatedIsEditModalOpen); // Aggiorno lo stato
    setRender(!render);
  };

  const closeDeleteModal = (index) => {
    const updatedIsDeleteModalOpen = [...isDeleteModalOpen]; // Creo una copia dell'array di booleani
    updatedIsDeleteModalOpen[index] = false; // Imposto il valore corrispondente all'indice su false
    setIsDeleteModalOpen(updatedIsDeleteModalOpen); // Aggiorno lo stato
    setRender(!render);
  };

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
            // backgroundColor: "rgb(94, 175, 70)",
          }}
        >
          <Typography
            variant="h4"
            style={{ color: "#fcfcfc" }}
            sx={{ fontWeight: "bold" }}
          >
            Spese page
          </Typography>
        </Grid>
        
        <Grid
          container
          spacing={0}
          padding={2}
          style={{
            borderRadius: "25px",
            height: "90%",
            width: "100%",
            backgroundColor: "rgb(203, 231, 253)",
          }}
        >
          <div style={{overflowY: "scroll", height: "100%", width: "80%"}}>
            <Grid container >
              {spese.map((spesa, index) => (
                <Grid 
                  container
                  key={index}
                  margin={1} 
                  width={"95%"}
                  backgroundColor={"#ACDBFF"}
                  padding={1} 
                  borderLeft={1} 
                  borderColor={"#004C86"}>

                  <Grid width={"35%"} direction="row">
                    <Box>
                      <Typography variant="h6" fontWeight="bold">{spesa.name}</Typography>
                      <Typography variant="subtitle2">Data: {spesa.date.slice(0, 10)}</Typography>
                      <Typography variant="subtitle2">Id: {spesa._id}</Typography>
                      <Typography variant="subtitle2">{spesa.creditor} ha pagato {spesa.import}€</Typography>
                      <Typography variant="body2">{spesa.description}</Typography>
                    </Box>
                  </Grid>
                  <Divider orientation="vertical"/>
                  <Grid xs padding={1}>
                    <Typography variant="subtitle2">Utenti coinvolti:</Typography>
                    <Grid container direction="row">
                      {spesa.debitors.map((debitor, index1) => (
                        <Box key={index1} margin={1}>
                          <PersonIcon />
                          <Typography variant="body1">{debitor}</Typography> 
                        </Box>
                      ))}
                    </Grid>
                  </Grid>
                  <Box >

                    <EditModal
                      isOpen={isEditModalOpen[index]}
                      onClose={() => closeEditModal(index)}
                      oggetto={{_id:spesa._id,
                                name:spesa.name,
                                descrizione:spesa.description,
                                importo:spesa.import,
                                data:spesa.date,
                                creditore:spesa.creditor,
                                debitori:spesa.debitors
                              }}
                    />
                    <IconButton
                      aria-label="edit"
                      style = { {color: "#142A3A", padding: "0"} }
                      onClick={() => {
                        openEditModal(index);
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                    <DeleteModal
                      isOpen={isDeleteModalOpen[index]}
                      onClose={() => closeDeleteModal(index)}
                      value={spesa._id}
                      index={index}
                    />
                    <IconButton
                      aria-label="delete"
                      style = { {color: "#142A3A", padding: "0"} }
                      onClick={() => {
                        openDeleteModal(index);
                      }}
                    >

                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </div>
          <Divider orientation="vertical"/>
          
          <Grid marginLeft={2} xs>
            <AddModal
              isOpen={isAddModalOpen}
              onClose={closeAddModal}
              value={[{username:cookies["username"]}]}
            />
            <Button 
              variant="outlined" 
              endIcon={<AddCircleIcon />} 
              onClick={() => {
                openAddModal();
              }}
              style = { {color: "#142A3A", margin: "10px"} }
              >
              Aggiungi Spesa
            </Button>

            <Divider style={{ width: "100%"}}/>

            <Box justifyContent="center" display="flex">
              <Typography variant="h6">SALDI</Typography>
            </Box>
            {debits.map((obj, index) => (
              <Card key={index} style={{backgroundColor: "transparent", boxShadow: "none", marginTop: "5px"}}>
                <Typography variant="subtitle1" fontWeight={"bold"}>{obj.member}</Typography>
                <CardContent style={{ paddingTop: "0", paddingBottom: "0"}}>
                  {obj.debitors.map((debitor, index1) => (
                    debitor.username !== obj.member && <Typography key={index1}>{debitor.username} deve {debitor.import.toFixed(2)}€</Typography>
                  ))}
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Grid>

      </Grid>
    </Grid>
  );
}
