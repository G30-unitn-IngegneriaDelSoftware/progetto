import { TextField, Typography, Box } from "@mui/material";
import React from "react";

export default function Field(props){
    return (
        <Box style={{ width: "70%", backgroundColor: "#ACDBFF", borderLeft:"1px solid #142A3A", padding: "10px", marginBottom: "10px" }}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", color:"#142A3A" }}>{props.FieldName}</Typography>
            <TextField  placeholder={props.placeholder} value={props.value || ''} variant="filled" style={{width:"90%"}} onChange={props.onChange}/>
        </Box>
    );
}