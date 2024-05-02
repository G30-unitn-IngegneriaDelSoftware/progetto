import React from "react";
import Grid from "@mui/joy/Grid";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import Divider from "@mui/material/Divider";
import ButtonBase from "@mui/material/ButtonBase";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ModeIcon from "@mui/icons-material/Mode";
import ClearIcon from "@mui/icons-material/Clear";
import axios from "axios";
import { useCookies } from "react-cookie";
import Modal from "./modal";

export default function Spese() {
  const [cookies, setCookie] = useCookies();
  const navigate = useNavigate();
  const [spese, setSpese] = React.useState([]);
  const [render, setRender] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalValue, setModalValue] = React.useState([{ username: "None" }]);
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
        await setModalValue(response.data); // Aspetta che setModalValue sia completato

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
        //console.log("spese");
        //console.log(response.data);
        setSpese(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
      console.log("http://localhost:3002/apartments/" +cookies["apartment_id"] +"/debits");
      axios
      .get(
        "http://localhost:3002/apartments/" +
          cookies["apartment_id"] +
          "/debits"
      )
      .then(async (response) => {
        console.log("debiti");
        console.log(response.data);
        //setSpese(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const openModal = () => {
    console.log("modalValuepreapertura");
    console.log(modalValue);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  function eliminaTransazione(id_trans,event){
    console.log("http://localhost:3002/apartments/" +
    cookies["apartment_id"] +
    "/expenses/"+id_trans);
    axios
    .delete(
      "http://localhost:3002/apartments/" +
        cookies["apartment_id"] +
        "/expenses/"+id_trans
    )
    .then(async (response) => {
      console.log("eliminazione fatta");
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
          //backgroundColor: "rgb(203, 231, 253)",
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
            Spese page
          </Typography>
        </Grid>
        <Grid
          container
          direction="column"
          style={{
            borderRadius: "5%",
            height: "90%",
            width: "100%",
            backgroundColor: "rgb(203, 231, 253)",
          }}
        >
          <Grid
            container
            direction="column"
            justifyContent="center"
            style={{
              height: "79%",
              width: "100%",
              //backgroundColor: "rgb(93, 131, 53)",
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              style={{
                height: "10%",
                width: "100%",
                //backgroundColor: "rgb(193, 231,153)",
              }}
            >
              <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                value={[{username:cookies["username"]}]}
              />
              <ButtonBase
                onClick={() => {
                  openModal();
                }}
                style={{
                  height: "100%",
                  width: "15%",
                  //backgroundColor: "rgb(213, 131,153)",
                  marginRight: "1%",
                  marginTop: "1%",
                }}
              >
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  style={{
                    height: "100%",
                    width: "100%",
                    //backgroundColor: "rgb(93, 131,153)",
                  }}
                >
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    style={{
                      height: "100%",
                      width: "80%",
                      //backgroundColor: "rgb(93, 31,153)",
                    }}
                  >
                    <Typography>Aggiungi</Typography>
                    <Typography>spesa</Typography>
                  </Grid>
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    style={{
                      height: "100%",
                      width: "20%",
                      //backgroundColor: "rgb(193, 31,153)",
                    }}
                  >
                    <AddCircleIcon />
                  </Grid>
                </Grid>
              </ButtonBase>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              style={{
                height: "87%",
                width: "100%",
                //backgroundColor: "rgb(153, 31, 53)",
                marginTop: "1%",
                overflow: "auto",
              }}
            >
              {spese.map((spesa,index) => (
                  <Grid
                  key={spesa._id}
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  style={{
                    height: "30%",
                    width: "90%",
                    backgroundColor: "rgb(172, 219, 255)",
                    marginTop: "1%",
                  }}
                >
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    style={{
                      height: "100%",
                      width: "44%",
                      //backgroundColor: "rgb(83, 131, 43)",
                    }}
                  >
                    <Grid
                      container
                      justifyContent="center"
                      alignItems="center"
                      style={{
                        height: "100%",
                        width: "30%",
                        //backgroundColor: "rgb(183, 131, 43)",
                      }}
                    >
                      <Grid
                        style={{
                          height: "80%",
                          width: "90%",
                          backgroundColor: "rgb(0, 76, 134)",
                          borderRadius: "50%",
                        }}
                      ></Grid>
                    </Grid>
                    <Grid
                      container
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      style={{
                        height: "100%",
                        width: "70%",
                        //backgroundColor: "rgb(83, 31, 43)",
                      }}
                    >
                      <Typography sx={{ fontWeight: "bold" }}>
                      {spesa._id}
                      </Typography>
                      <Typography> {spesa.creditor}</Typography>
                      <Typography> {spesa.import}</Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    style={{
                      height: "100%",
                      width: "1%",
                      //backgroundColor: "rgb(183, 131, 43)",
                    }}
                  >
                    <Divider orientation="vertical" />
                  </Grid>

                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    style={{
                      height: "100%",
                      width: "48%",
                      //backgroundColor: "rgb(33, 231, 53)",
                    }}
                  >
                    <Grid
                      container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                      style={{
                        height: "20%",
                        width: "100%",
                        //backgroundColor: "rgb(2303, 131, 53)",
                      }}
                    >
                      <Typography sx={{ fontWeight: "bold" }}>
                        Debitori
                      </Typography>
                    </Grid>
                    <Grid
                      container
                      direction="column"
                      justifyContent="center"
                      alignItems="flex-start"
                      style={{
                        height: "80%",
                        width: "100%",
                        //backgroundColor: "rgb(133, 21, 53)",
                        overflow: "auto",
                      }}
                    >
                  {(spesa.debitors).map((debitore) => (
                    <Grid
                    key={debitore}
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    style={{
                      height: "90%",
                      width: "30%",
                      //backgroundColor: "rgb(93, 121, 53)",
                      marginLeft: "2%",
                    }}
                  >
                    <PersonIcon
                      sx={{
                        height: "50%",
                        width: "100%",
                        //backgroundColor: "rgb(143, 11, 113)",
                      }}
                    />
                    <Typography sx={{ fontWeight: "bold" }}>{debitore}</Typography>
                    <Typography sx={{ fontSize: "80%" }}>{(spesa.import)/(spesa.debitors.length)}$</Typography>
                  </Grid>
                  ))}
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="flex-start"
                    style={{
                      height: "100%",
                      width: "7%",
                      backgroundColor: "rgb(193, 71, 153)",
                    }}
                  >
                    <ModeIcon
                      sx={{
                        borderRadius: "50%",
                        border: "1px solid black",
                        //backgroundColor: "rgb(43, 111, 113)",
                      }}
                    ></ModeIcon>
                    <ClearIcon
                      sx={{
                        borderRadius: "50%",
                        border: "1px solid black",
                        //backgroundColor: "rgb(43, 111, 113)",
                      }}
                      onClick={(event) => eliminaTransazione(spesa._id, event)}
                    ></ClearIcon>
                  </Grid>
                </Grid>
                ))}
              

            </Grid>
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={{
              width: "100%",
              //backgroundColor: "rgb(93, 131, 53)",
            }}
          >
            <Divider
              style={{
                width: "95%",
              }}
            />
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            style={{
              height: "20%",
              width: "100%",
              //backgroundColor: "rgb(193, 31, 153)",
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              style={{ width: "100%", height: "10%" }}
            >
              <Typography sx={{ fontWeight: "bold" }}>SPESE</Typography>
            </Grid>

            <Grid
              container
              directio="column"
              style={{
                height: "80%",
                width: "100%",
                //backgroundColor: "rgb(193, 31, 153)",
                overflow: "auto",
              }}
            >
              <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                style={{
                  marginTop: "2%",
                  height: "70%",
                  width: "20%",
                  marginLeft: "2%",
                  //backgroundColor: "rgb(143, 211, 113)",
                  border: "1px solid",
                  borderColor: "rgb(5, 22, 34)",
                  borderRadius: "10%",
                }}
              >
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  style={{
                    height: "100%",
                    width: "40%",
                    //backgroundColor: "rgb(143, 211, 63)",
                  }}
                >
                  <PersonIcon
                    sx={{
                      height: "70%",
                      width: "100%",
                      //backgroundColor: "rgb(143, 11, 113)",
                    }}
                  />
                </Grid>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  style={{
                    height: "100%",
                    width: "60%",
                    //backgroundColor: "rgb(143, 211, 113)",
                  }}
                >
                  <Typography sx={{ fontWeight: "bold" }}>
                    inquilino1
                  </Typography>
                  <Typography>-100</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
