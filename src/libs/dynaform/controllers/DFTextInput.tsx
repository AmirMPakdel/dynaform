import React, { Component } from "react";
import styles from "./DFTextInput.module.css";
import { TextField } from "@mui/material";

export default class DFTextInput extends Component<DFTextInputProps> {

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

interface DFTextInputProps{
    
}