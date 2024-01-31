import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Grid from "@mui/joy/Grid";
import HomeIcon from "@mui/icons-material/Home";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChecklistIcon from "@mui/icons-material/Checklist";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

export default function Appartamento() {
  const location = useLocation();
  console.log(location.pathname);
  const navigate = useNavigate();
  const booleanArray = Array(8).fill(false);
  switch (location.pathname) {
    case "/appartamento":
      booleanArray[0] = true;
      break;
    case "/appartamento/bacheca":
      booleanArray[1] = true;
      break;
    case "/appartamento/turni":
      booleanArray[2] = true;
      break;
    case "/appartamento/spese":
      booleanArray[3] = true;
      break;
    case "/appartamento/calendario":
      booleanArray[4] = true;
      break;
    case "/appartamento/todo":
      booleanArray[5] = true;
      break;
    case "/appartamento/account":
      booleanArray[6] = true;
      break;
  }
  console.log(booleanArray);
  return (
    <Grid
      container
      style={{
        height: "100vh",
        width: "100wh",
        overflow: "auto",
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        style={{
          height: "100%",
          width: "20%",
          backgroundColor: "rgb(5, 22, 34)",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{
            height: "30%",
            width: "100%",
            //backgroundColor: "rgb(54, 135, 200)",
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{
              height: "80%",
              width: "60%",
              backgroundColor: "rgb(252, 252, 252)",
              borderRadius: "10%",
            }}
          ></Grid>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          style={{
            height: "70%",
            width: "100%",
            //backgroundColor: "rgb(154, 75, 200)",
          }}
        >
          <ButtonBase
            style={{
              height: "8%",
              width: "60%",
              //backgroundColor: "rgb(94, 175, 70)",
            }}
            onClick={() => navigate("/")}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              style={{
                height: "100%",
                width: "100%",
              }}
            >
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                style={{
                  height: "100%",
                  width: "20%",
                  //backgroundColor: "rgb(24, 95, 170)",
                }}
              >
                <HomeIcon sx={{ color: "#fcfcfc" }} />
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                style={{
                  height: "100%",
                  width: "80%",
                  //backgroundColor: "rgb(194, 75, 20)",
                }}
              >
                <Typography style={{ color: "#fcfcfc" }}>
                  Appartamenti
                </Typography>
              </Grid>
            </Grid>
          </ButtonBase>
          <ButtonBase
            style={{
              backgroundColor: booleanArray[0]
                ? "rgb(0, 76, 134)"
                : "rgb(5, 22, 34)",
              height: "8%",
              width: "60%",
              //backgroundColor: "rgb(94, 175, 70)",
              marginTop: "3%",
            }}
            onClick={() => navigate("/appartamento")}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              style={{
                height: "100%",
                width: "100%",
                //backgroundColor: "rgb(94, 175, 70)",
              }}
            >
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                style={{
                  height: "100%",
                  width: "20%",
                  //backgroundColor: "rgb(24, 95, 170)",
                }}
              >
                <BorderAllIcon sx={{ color: "#fcfcfc" }} />
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                style={{
                  height: "100%",
                  width: "80%",
                  //backgroundColor: "rgb(194, 75, 20)",
                }}
              >
                <Typography style={{ color: "#fcfcfc" }}>Generale</Typography>
              </Grid>
            </Grid>
          </ButtonBase>
          <ButtonBase
            style={{
              backgroundColor: booleanArray[1]
              
                ? "rgb(0, 76, 134)"
                : "rgb(5, 22, 34)",
              height: "8%",
              width: "60%",
              //backgroundColor: "rgb(94, 175, 70)",
              marginTop: "3%",
            }}
            onClick={() => navigate("/appartamento/bacheca")}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              style={{
                height: "100%",
                width: "100%",
                //backgroundColor: "rgb(94, 175, 70)",
              }}
            >
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                style={{
                  height: "100%",
                  width: "20%",
                  //backgroundColor: "rgb(24, 95, 170)",
                }}
              >
                <AssignmentIcon sx={{ color: "#fcfcfc" }} />
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                style={{
                  height: "100%",
                  width: "80%",
                  //backgroundColor: "rgb(194, 75, 20)",
                }}
              >
                <Typography style={{ color: "#fcfcfc" }}>Bacheca</Typography>
              </Grid>
            </Grid>
          </ButtonBase>
          <ButtonBase
            style={{
              backgroundColor: booleanArray[2]
              
                ? "rgb(0, 76, 134)"
                : "rgb(5, 22, 34)",
              height: "8%",
              width: "60%",
              //backgroundColor: "rgb(94, 175, 70)",
              marginTop: "3%",
            }}
            onClick={() => navigate("/appartamento/turni")}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              style={{
                height: "100%",
                width: "100%",
                //backgroundColor: "rgb(94, 175, 70)",
              }}
            >
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                style={{
                  height: "100%",
                  width: "20%",
                  //backgroundColor: "rgb(24, 95, 170)",
                }}
              >
                <DateRangeIcon sx={{ color: "#fcfcfc" }} />
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                style={{
                  height: "100%",
                  width: "80%",
                  //backgroundColor: "rgb(194, 75, 20)",
                }}
              >
                <Typography style={{ color: "#fcfcfc" }}>Turni</Typography>
              </Grid>
            </Grid>
          </ButtonBase>
          <ButtonBase
            style={{
              backgroundColor: booleanArray[3]
              
                ? "rgb(0, 76, 134)"
                : "rgb(5, 22, 34)",
              height: "8%",
              width: "60%",
              //backgroundColor: "rgb(94, 175, 70)",
              marginTop: "3%",
            }}
            onClick={() => navigate("/appartamento/spese")}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              style={{
                height: "100%",
                width: "100%",
                //backgroundColor: "rgb(94, 175, 70)",
              }}
            >
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                style={{
                  height: "100%",
                  width: "20%",
                  //backgroundColor: "rgb(24, 95, 170)",
                }}
              >
                <AccountBalanceWalletIcon sx={{ color: "#fcfcfc" }} />
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                style={{
                  height: "100%",
                  width: "80%",
                  //backgroundColor: "rgb(194, 75, 20)",
                }}
              >
                <Typography style={{ color: "#fcfcfc" }}>Spese</Typography>
              </Grid>
            </Grid>
          </ButtonBase>
          <ButtonBase
            style={{
              backgroundColor: booleanArray[4]
              
                ? "rgb(0, 76, 134)"
                : "rgb(5, 22, 34)",
              height: "8%",
              width: "60%",
              //backgroundColor: "rgb(94, 175, 70)",
              marginTop: "3%",
            }}
            onClick={() => navigate("/appartamento/calendario")}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              style={{
                height: "100%",
                width: "100%",
                //backgroundColor: "rgb(94, 175, 70)",
              }}
            >
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                style={{
                  height: "100%",
                  width: "20%",
                  //backgroundColor: "rgb(24, 95, 170)",
                }}
              >
                <CalendarMonthIcon sx={{ color: "#fcfcfc" }} />
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                style={{
                  height: "100%",
                  width: "80%",
                  //backgroundColor: "rgb(194, 75, 20)",
                }}
              >
                <Typography style={{ color: "#fcfcfc" }}>Calendario</Typography>
              </Grid>
            </Grid>
          </ButtonBase>
          <ButtonBase
            style={{
              backgroundColor: booleanArray[5]
              
                ? "rgb(0, 76, 134)"
                : "rgb(5, 22, 34)",
              height: "8%",
              width: "60%",
              //backgroundColor: "rgb(94, 175, 70)",
              marginTop: "3%",
            }}
            onClick={() => navigate("/appartamento/todo")}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              style={{
                height: "100%",
                width: "100%",
                //backgroundColor: "rgb(94, 175, 70)",
              }}
            >
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                style={{
                  height: "100%",
                  width: "20%",
                  //backgroundColor: "rgb(24, 95, 170)",
                }}
              >
                <ChecklistIcon sx={{ color: "#fcfcfc" }} />
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                style={{
                  height: "100%",
                  width: "80%",
                  //backgroundColor: "rgb(194, 75, 20)",
                }}
              >
                <Typography style={{ color: "#fcfcfc" }}>To-Do</Typography>
              </Grid>
            </Grid>
          </ButtonBase>
          <ButtonBase
            style={{
              backgroundColor: booleanArray[6]
              
                ? "rgb(0, 76, 134)"
                : "rgb(5, 22, 34)",
              height: "8%",
              width: "60%",
              //backgroundColor: "rgb(94, 175, 70)",
              marginTop: "3%",
            }}
            onClick={() => navigate("/appartamento/account")}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              style={{
                height: "100%",
                width: "100%",
                //backgroundColor: "rgb(94, 175, 70)",
              }}
            >
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                style={{
                  height: "100%",
                  width: "20%",
                  //backgroundColor: "rgb(24, 95, 170)",
                }}
              >
                <AccountCircleIcon sx={{ color: "#fcfcfc" }} />
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                style={{
                  height: "100%",
                  width: "80%",
                  //backgroundColor: "rgb(194, 75, 20)",
                }}
              >
                <Typography style={{ color: "#fcfcfc" }}>Account</Typography>
              </Grid>
            </Grid>
          </ButtonBase>
        </Grid>
      </Grid>
      <Grid
        style={{
          height: "100%",
          width: "80%",
          backgroundColor: "rgb(44, 135, 50)",
        }}
      >
        <Outlet />
      </Grid>
    </Grid>
  );
}
