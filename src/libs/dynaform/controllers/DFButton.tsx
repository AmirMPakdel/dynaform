import React, { Component } from "react";
import styles from "./DFButton.module.css";
import { Button, TextField } from "@mui/material";

export default class DFButton extends Component<DFButtonProps> {
    render(): React.ReactNode {
        return (
            <div className={styles.con}>
                <Button variant="contained" color="primary">
                    {this.props.title}
                </Button>
            </div>
        );
    }
}

interface DFButtonProps {
    title: string;
}
