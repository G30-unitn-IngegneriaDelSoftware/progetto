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
import { useNavigate } from "react-router-dom";
import defaultPath from "..";

function DeleteModal({ isOpen, onClose,value}) {

  const [cookies, setCookie,removeCookie] = useCookies();
  const navigate = useNavigate();

  function EliminazioneAccount() {
    axios.delete(defaultPath + "/users/" + value)
    .then((response) => {
      removeCookie("apartment_id");
      removeCookie("username");
      removeCookie("session");
      navigate("/", {replace: true});
    })
    .catch((error) => {
      console.log(error);
    });
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
          height: "40%", // Imposta l'altezza desiderata
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
            <Typography variant="h6" color="white" sx={{ fontWeight: "bold", textAlign: "center" ,marginBottom: "1%" }}>
              Sei sicuro di voler eliminare il tou account?
            </Typography>

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
                    EliminazioneAccount();
                    
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

export default DeleteModal;
