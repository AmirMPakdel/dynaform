import React, { Component } from "react";
import styles from "./DFButton.module.css";
import { TextField } from "@mui/material";

export default class DFButton extends Component<DFButtonProps> {

    render(): React.ReactNode {
        return(
            <TextField 
            id="outlined-basic" 
            label="Outlined" 
            variant="outlined"
            />
        )
    }    
}

interface DFButtonProps{
    
}