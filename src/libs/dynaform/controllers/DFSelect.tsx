import React, { Component } from "react";
import styles from "./DFSelect.module.css";
import { FormControl, Select, InputLabel, MenuItem } from "@mui/material";

interface DFSelectProps {
    onChange: ((event: any, child: React.ReactNode) => void) | undefined;
    value: any;
}

export default class DFSelect extends Component<DFSelectProps> {
    render(): React.ReactNode {
        return (
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.props.value}
                    label="Age"
                    onChange={this.props.onChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        );
    }
}
