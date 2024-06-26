import React from "react";
import Container from "@mui/material/Container";
import Input from "@mui/joy/Input";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/joy/Button";
import { useNavigate, redirect, Form } from "react-router-dom";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import HomeIcon from "@mui/icons-material/HomeRounded";
import ShareIcon from "@mui/icons-material/Share";
import ModeIcon from "@mui/icons-material/Mode";
import ClearIcon from "@mui/icons-material/Clear";
import PersonIcon from "@mui/icons-material/Person";
import ButtonBase from "@mui/material/ButtonBase";
import AddModal from "../Modals/AddApartmentModal";
import DeleteModal from "../Modals/DeleteApartmentModal";
import EditModal from "../Modals/EditApartmentModal.jsx";
import axios from "axios";
import { Cookies, useCookies } from "react-cookie";
import { Box, IconButton } from "@mui/material";
import defaultPath from "../index.jsx";

async function creaAppartamento() {
  axios
    .post(defaultPath + "/apartments", {
      name: "appartamento2",
      description: "descrizione",
      admin: "username",
      users: ["username"],
      expanses: [],
    })
    .catch((error) => {
      console.log(error);
    });
}
async function agggiungiAppartamento(id) {
  axios
    .post(defaultPath + "/apartments/" + id + "/members")
    .catch((error) => {
      console.log(error);
    });
  // Esegui il resto del codice per aggiungere l'appartamento
}

export default function Appartamenti() {
  const [cookies, setCookie,removeCookie] = useCookies(["session"]);
  const navigate = useNavigate();
  const [apartments, setApartmenst] = React.useState([]);
  const [render, setRender] = React.useState(false);
  const [appartmentID, setAppartmentID] = React.useState("");
  const [isAddModalOpen, setIsAddModalOpen] = React.useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(Array(apartments.length).fill(false));
  const [isEditModalOpen, setIsEditModalOpen] = React.useState(Array(apartments.length).fill(false));

  function logout(){
    removeCookie("apartment_id");
    removeCookie("username");
    removeCookie("session");
  }

  const closeAddModal = () => {
    setIsAddModalOpen(false);
    setRender(!render);
  };

  const openAddModal = () => {

    setIsAddModalOpen(true);
  };

  const closeDeleteModal = (index) => {
    const updatedIsDeleteModalOpen = [...isDeleteModalOpen]; // Creo una copia dell'array di booleani
    updatedIsDeleteModalOpen[index] = false; // Imposto il valore corrispondente all'indice su false
    setIsDeleteModalOpen(updatedIsDeleteModalOpen); // Aggiorno lo stato
    setRender(!render);
  };

  const openDeleteModal = (index) => {
    const updatedIsDeleteModalOpen = [...isDeleteModalOpen]; // Creo una copia dell'array di booleani
    updatedIsDeleteModalOpen[index] = true; // Imposto il valore corrispondente all'indice su true
    setIsDeleteModalOpen(updatedIsDeleteModalOpen); // Aggiorno lo stato
  };

  const closeEditModal = (index) => {
    const updatedIsEditModalOpen = [...isEditModalOpen]; // Creo una copia dell'array di booleani
    updatedIsEditModalOpen[index] = false; // Imposto il valore corrispondente all'indice su false
    setIsEditModalOpen(updatedIsEditModalOpen); // Aggiorno lo stato
    setRender(!render);
  };

  const openEditModal = (index) => {
    const updatedIsEditModalOpen = [...isEditModalOpen]; // Creo una copia dell'array di booleani
    updatedIsEditModalOpen[index] = true; // Imposto il valore corrispondente all'indice su true
    setIsEditModalOpen(updatedIsEditModalOpen); // Aggiorno lo stato
  };

  const handleAppartmentIDChange = (event) => {
    setAppartmentID(event.target.value);
  };

  // React.useEffect(() => {
  //   let sessioneTrovata = false;
  //   for (const chiave in cookies) {
  //     // Verifica se la chiave è "session" e se il suo valore ha una lunghezza maggiore di 1
  //     if (chiave === "session" && cookies[chiave].length > 1) {
  //       sessioneTrovata = true;
  //       break; // Esci dal ciclo una volta trovato un valore valido
  //     }
  //   }
  //   if (!sessioneTrovata) {
  //     navigate("/", { replace: true });
  //   }
  // }, [cookies]);


  React.useEffect(() => {
    axios
      .get(defaultPath + "/apartments")
      .then((response) => {
        setApartmenst(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [render]);

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
          width: "100vw",
        }}
      >
        <Container
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "95vh",
            width: "100vw",
            backgroundColor: "rgb(203, 231, 253)",
            borderRadius: "5vh",
          }}
        >
          <Grid
            container
            spacing={1}
            justifyContent="center"
            alignItems="center"
            sx={{ flexGrow: 1 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "95%",
              width: "95%",
              //backgroundColor: "rgb(103, 131,53)",
            }}
          >
            <Grid
              container
              direction="column"
              sx={{ flexGrow: 1 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                width: "49%",
                //backgroundColor: "rgb(103, 131,53)",
              }}
            >
              <Grid
                style={{
                  height: "10%",
                }}
              >
                <Typography
                  variant="h4"
                  color="rgb(0, 76, 134)"
                  sx={{ fontWeight: "bold" }}
                >
                  I miei appartamenti
                </Typography>
              </Grid>
              <Grid
                container
                style={{
                  height: "90%",
                  width: "90%",
                  //backgroundColor: "rgb(44, 135, 50)",
                  overflow: "auto",
                }}
              >
                {apartments.length > 0 &&
                  apartments.map((apartment, index) => (
                      <Grid
                        key={index}
                        style={{
                          height: "35%",
                          width: "100%",
                          backgroundColor: "rgb(172, 219, 255)",
                          marginTop:"10px",
                          borderRadius: "1rem",
                        }}
                      >
                        <Grid
                          container
                          direction="column"
                          alignItems="center"
                          style={{
                            height: "100%",
                            width: "100%",
                            // backgroundColor: "rgb(13, 231, 93)",
                          }}
                        >
                          <Grid 
                            style={{
                              height: "45%",
                              width: "100%",
                              marginTop: "10px",
                              //backgroundColor: "rgb(72, 19, 155)",
                            }}>

                            <Grid
                              container
                              direction="row"
                              style={{
                                height: "100%",
                                width: "100%",
                                // backgroundColor: "rgb(13, 231, 93)",
                              }}
                            >
                              <ButtonBase
                                style={{
                                  height: "100%",
                                  width: "80%",
                                  // backgroundColor: "rgb(72, 19, 155)",
                                }}
                                onClick={async () => {
                                  setCookie("apartment_id", apartment._id);
                                  navigate("/appartamento");
                                }}>
                                  
                                <Grid
                                  container
                                  style={{
                                    height: "100%",
                                    width: "30%",
                                    justifyContent: "center",
                                    // backgroundColor: "rgb(83, 51, 33)",
                                  }}
                                >
                                  <Box>
                                    <HomeIcon sx={{ fontSize: 100, color: "#142A3A" }} />
                                  </Box>
                                </Grid>

                              <Grid
                                container
                                direction="column"
                                justifyContent="flex-start"
                                style={{
                                  height: "100%",
                                  width: "68%",
                                  //backgroundColor: "rgb(133, 191, 153)",
                                }}
                              >
                                <Typography
                                  style={{
                                    height: "70%",
                                    width: "100%",
                                    //backgroundColor: "rgb(83, 71, 153)",
                                    fontSize: "200%",
                                  }}
                                >
                                  {apartment.name}
                                </Typography>
                                <Typography
                                  style={{
                                    height: "30%",
                                    width: "100%",
                                    //backgroundColor: "rgb(13, 11, 153)",
                                  }}
                                >
                                  Codice:{apartment._id}
                                </Typography>
                              </Grid>
                              </ButtonBase>


                              <Grid
                                container
                                direction="column"
                                style={{
                                  height: "100%",
                                  width: "20%",
                                  //backgroundColor: "rgb(103, 11, 153)",
                                }}
                              >

                                <Grid
                                  container
                                  justifyContent="flex-end"
                                  style={{
                                    height: "40%",
                                    width: "100%",
                                    //backgroundColor: "rgb(43, 111, 113)",
                                  }}
                                >
                                  <EditModal
                                    isOpen={isEditModalOpen[index]}
                                    onClose={() => closeEditModal(index)}
                                    id={apartment._id}
                                    value={{nome:apartment.name,descrizione:apartment.description}}
                                  />
                                  {/*verifico che l'utente sia admin per vedere il puslante di modicaS*/}
                                  {apartment.admin===cookies["username"] &&
                                    <IconButton
                                      aria-label="edit"
                                      style = { {color: "#142A3A", padding: "0"} }
                                      onClick={() => {
                                        openEditModal(index);
                                      }}>
                                      <ModeIcon
                                        sx={{
                                          borderRadius: "50%",
                                          border: "1px solid black",
                                          //backgroundColor: "rgb(43, 111, 113)",
                                        }}
                                      ></ModeIcon>
                                    </IconButton>
                                  }
                                  <DeleteModal
                                    isOpen={isDeleteModalOpen[index]}
                                    onClose={() => closeDeleteModal(index)}
                                    value={apartment._id}
                                  />
                                  {apartment.admin===cookies["username"] &&
                                    <IconButton
                                      aria-label="edit"
                                      style = { {color: "#142A3A", padding: "0"} }
                                      onClick={() => {
                                        openDeleteModal(index);
                                      }}>
                                      <ClearIcon
                                        sx={{
                                          borderRadius: "50%",
                                          border: "1px solid black",
                                          //backgroundColor: "rgb(43, 111, 113)",
                                        }}
                                      ></ClearIcon>
                                    </IconButton>
                                  }
                                </Grid>
                                <ButtonBase                            
                                style={{
                                  height: "60%",
                                  width: "100%",
                                  //backgroundColor: "rgb(72, 19, 155)",
                                }}
                                onClick={async () => {
                                  setCookie("apartment_id", apartment._id);
                                  navigate("/appartamento");
                                }}>

                              </ButtonBase>
                              </Grid>


                            </Grid>
                          </Grid>
                          
                          <Divider flexItem/>

                          <ButtonBase 
                            style={{
                              height: "50%",
                              width: "100%",
                              //backgroundColor: "rgb(72, 19, 155)",
                            }}
                            onClick={async () => {
                              setCookie("apartment_id", apartment._id);
                              navigate("/appartamento");
                            }}>
                            <Grid
                              container
                              style={{
                                height: "85%",
                                width: "100%",
                                //backgroundColor: "rgb(3, 231, 153)",
                              }}
                            >
                              <Grid
                                container
                                alignItems="center"
                                style={{
                                  height: "100%",
                                  width: "100%",
                                  //backgroundColor: "rgb(3, 231, 153)",
                                }}
                              >
                                <Grid
                                  container
                                  direction="row"
                                  justifyContent="flex-start"
                                  alignItems="center"
                                  style={{
                                    height: "100%",
                                    width: "49%",
                                    overflow: "auto",
                                    //backgroundColor: "rgb(13, 131, 53)",
                                  }}
                                >
                                  {apartment.description}
                                </Grid>
                                <Divider
                                  orientation="vertical"
                                  flexItem
                                />
                                <Grid
                                  container
                                  direction="column"
                                  alignItems="center"
                                  style={{
                                    padding: "10px",
                                    height: "100%",
                                    width: "50%",
                                    //backgroundColor: "rgb(33, 131, 117)",
                                  }}
                                >
                                  <Grid
                                    container
                                    alignItems="center"
                                    style={{
                                      height: "25%",
                                      width: "100%",
                                      //backgroundColor: "rgb(133, 231, 17)",
                                    }}
                                  >
                                    Partecipanti
                                  </Grid>
                                  <Grid
                                    container
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="center"
                                    style={{
                                      overflow: "auto",
                                      height: "75%",
                                      width: "100%",
                                      //backgroundColor: "rgb(43, 51, 127)",
                                    }}
                                  >
                                    {apartment.users.map((user, indice) => (
                                      <Grid
                                        key={indice}
                                        container
                                        direction="column"
                                        justifyContent="flex-start"
                                        alignItems="center"
                                        style={{
                                          marginLeft: "2%",
                                        }}
                                      >
                                        <PersonIcon />
                                        <Typography>{user}</Typography>
                                      </Grid>
                                    ))}
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </ButtonBase>

                        </Grid>
                      </Grid>
                
                  ))}

                <Grid
                  style={{
                    height: "30%",
                    width: "100%",
                    marginTop: "10px",
                    //backgroundColor: "rgb(203, 231, 253)",
                  }}
                ></Grid>
              </Grid>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid
              container
              direction="column"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                width: "49%",
                //backgroundColor: "rgb(203, 31,53)",
              }}
            >
              <Grid
                style={{
                  height: "10%",
                }}
              >
                <Typography
                  variant="h4"
                  color="rgb(0, 76, 134)"
                  sx={{ fontWeight: "bold" }}
                >
                  Nuovo appartamento
                </Typography>
              </Grid>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                style={{
                  height: "90%",
                  width: "90%",
                  //background: "rgb(0, 76, 134)" 
                }}
              >
                <Grid
                  container
                  direction="column"
                  justifyContent="flex-end"
                  alignItems="center"
                  style={{
                    width: "90%",
                    height: "40%",
                  }}
                >
                  <AddModal
                    isOpen={isAddModalOpen}
                    onClose={closeAddModal}
                  />
                  <Button
                    variant="solid"
                    style={{ background: "rgb(0, 76, 134)" }}
                    onClick={async () => {
                      //creaAppartamento();
                      openAddModal();
                      setRender(!render);
                    }}
                  >
                    Crea nuovo appartamento
                  </Button>
                  <Grid
                    style={{
                      width: "90%",
                      height: "10%",
                    }}
                  ></Grid>
                </Grid>
                <Divider flexItem />
                <Grid
                  container
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="center"
                  style={{
                    width: "90%",
                    height: "50%",
                    //background: "rgb(0, 76, 134)" 
                  }}
                >
                  <Grid
                    style={{
                      width: "90%",
                      height: "5%",
                    }}
                  ></Grid>
                  <TextField
                    id="appartmentID"
                    label="Codice identificativo"
                    variant="standard"
                    value={appartmentID}
                    onChange={handleAppartmentIDChange}
                  />
                  <Grid
                    style={{
                      width: "90%",
                      height: "5%",
                    }}
                  ></Grid>
                  <Button
                    variant="solid"
                    style={{ background: "rgb(0, 76, 134)" }}
                    onClick={async () => {
                      await agggiungiAppartamento(appartmentID);
                      setRender(!render);
                      setAppartmentID("");
                    }}
                  >
                    Unisciti nuovo appartamento
                  </Button>
                </Grid>
                <Divider flexItem />
                <Button
                    variant="solid"
                    style={{ background: "rgb(0, 76, 134)",marginTop:"2vh" }}
                    onClick={async () => {
                      logout();
                      navigate("/", {replace: true});
                    }}
                  >
                    Logout
                  </Button>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
}
