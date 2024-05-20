import React from "react";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/material/Typography";

export default function Turni() {
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
            Turni page
          </Typography>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center" // Centra verticalmente
          alignItems="center" // Centra orizzontalmente
          style={{
            borderRadius: "25px",
            height: "90%",
            width: "100%",
            backgroundColor: "rgb(203, 231, 253)",
          }}
        >
          <Typography variant="h1" align="center" color="rgb(0, 76, 134)">Work in progress...</Typography> 
        </Grid>
      </Grid>
    </Grid>
  );
}
