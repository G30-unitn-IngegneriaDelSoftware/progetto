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
import HomeIcon from "@mui/icons-material/Home";
import ShareIcon from "@mui/icons-material/Share";
import ModeIcon from "@mui/icons-material/Mode";
import ClearIcon from "@mui/icons-material/Clear";
import PersonIcon from "@mui/icons-material/Person";
import ButtonBase from "@mui/material/ButtonBase";

export default function Appartamenti() {
  const navigate = useNavigate();
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
              backgroundColor: "rgb(103, 131,53)",
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
                <ButtonBase
                  style={{
                    height: "35%",
                    width: "100%",
                    marginTop: "10px",
                    //backgroundColor: "rgb(72, 19, 155)",
                  }}
                  onClick={() => navigate("/appartamento")}
                >
                  <Grid
                    style={{
                      height: "100%",
                      width: "100%",
                      backgroundColor: "rgb(172, 219, 255)",
                    }}
                  >
                    <Grid
                      container
                      direction="column"
                      alignItems="center"
                      style={{
                        height: "100%",
                        width: "100%",
                        //backgroundColor: "rgb(13, 231, 93)",
                      }}
                    >
                      <Grid
                        container
                        direction="row"
                        style={{
                          height: "45%",
                          width: "100%",
                          //backgroundColor: "rgb(13, 231, 93)",
                        }}
                      >
                        <Grid
                          container
                          style={{
                            height: "100%",
                            width: "20%",
                            //backgroundColor: "rgb(83, 51, 33)",
                          }}
                        >
                          <Grid
                            sx={{
                              height: "100%",
                              width: "80%",
                              borderRadius: "50%",
                              border: "1px solid black",
                            }}
                          />
                        </Grid>
                        <Grid
                          container
                          style={{
                            height: "100%",
                            width: "2%",
                            //backgroundColor: "rgb(83, 91, 153)",
                          }}
                        ></Grid>

                        <Grid
                          container
                          direction="column"
                          justifyContent="flex-start"
                          style={{
                            height: "100%",
                            width: "58%",
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
                            Appartamento 1
                          </Typography>
                          <Typography
                            style={{
                              height: "30%",
                              width: "100%",
                              //backgroundColor: "rgb(13, 11, 153)",
                            }}
                          >
                            Codice:12345
                          </Typography>
                        </Grid>
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
                            <ShareIcon
                              sx={{
                                borderRadius: "50%",
                                border: "1px solid black",
                                //backgroundColor: "rgb(43, 111, 113)",
                              }}
                            ></ShareIcon>
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
                            ></ClearIcon>
                          </Grid>
                          <Grid
                            style={{
                              height: "60%",
                              width: "100%",
                              //backgroundColor: "rgb(73, 11, 153)",
                            }}
                          ></Grid>
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        style={{
                          height: "55%",
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
                              //backgroundColor: "rgb(13, 131, 53)",
                            }}
                          >
                            Nome simpatico della via
                          </Grid>
                          <Divider orientation="vertical" flexItem></Divider>
                          <Grid
                            container
                            direction="column"
                            alignItems="center"
                            style={{
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
                              <Grid
                                container
                                direction="column"
                                justifyContent="flex-start"
                                alignItems="center"
                                style={{
                                  marginLeft: "2%",
                                }}
                              >
                                <PersonIcon />
                                <Typography>nome</Typography>
                              </Grid>
                              <Grid
                                container
                                direction="column"
                                justifyContent="flex-start"
                                alignItems="center"
                                style={{
                                  marginLeft: "2%",
                                }}
                              >
                                <PersonIcon />
                                <Typography>nome</Typography>
                              </Grid>
                              <Grid
                                container
                                direction="column"
                                justifyContent="flex-start"
                                alignItems="center"
                                style={{
                                  marginLeft: "2%",
                                }}
                              >
                                <PersonIcon />
                                <Typography>nome</Typography>
                              </Grid>
                              <Grid
                                container
                                direction="column"
                                justifyContent="flex-start"
                                alignItems="center"
                                style={{
                                  marginLeft: "2%",
                                }}
                              >
                                <PersonIcon />
                                <Typography>nome</Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </ButtonBase>

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
                backgroundColor: "rgb(203, 31,53)",
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
                  <Button
                    variant="solid"
                    style={{ background: "rgb(0, 76, 134)" }}
                    onClick={() => {
                      console.log("hola");
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
                  }}
                >
                  <Grid
                    style={{
                      width: "90%",
                      height: "5%",
                    }}
                  ></Grid>
                  <TextField
                    id="standard-basic"
                    label="Codice identificativo"
                    variant="standard"
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
                    onClick={() => {
                      console.log("hola");
                    }}
                  >
                    Unisciti nuovo appartamento
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
}
