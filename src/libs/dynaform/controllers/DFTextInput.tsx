import React, { Component } from "react";
import styles from "./DFTextInput.module.css";
import { TextField } from "@mui/material";

export default class DFTextInput extends Component<DFTextInputProps> {
    render(): React.ReactNode {
        return (
            <TextField
                id="outlined-basic"
                label={this.props.title}
                value={this.props.value}
                variant={this.props.variant || "outlined"}
            />
        );
    }
}

interface DFTextInputProps {
    title: string;
    value: string;
    onChange?: (event: any, child: React.ReactNode) => void;
    variant?: "outlined" | undefined;
}
