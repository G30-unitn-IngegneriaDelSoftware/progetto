import { Typography, Box, Input } from "@mui/material";
import React from "react";

export default function DateField(props){
    const date = new Date(props.value);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
    return (
        <Box style={{ width: "95%", backgroundColor: "#ACDBFF", borderLeft:"1px solid #142A3A", padding: "15px", marginBottom: "10px" }}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", color:"#142A3A" }}>{props.FieldName}</Typography>
            <Input type="date" placeholder={props.placeholder} value={formattedDate || ''} style={{width:"100%"}} onChange={props.onChange}/>
        </Box>
    );
}