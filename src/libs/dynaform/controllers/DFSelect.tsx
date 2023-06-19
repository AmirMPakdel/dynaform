import React, { Component } from "react";
import styles from "./DFSelect.module.css";
import { FormControl, Select, InputLabel, MenuItem } from "@mui/material";

interface DFSelectProps {
    options: Array<{value:any, title:string}>
    onChange: ((event: any, child: React.ReactNode) => void) | undefined;
    value: any;
}

export default class DFSelect extends Component<DFSelectProps> {
    render(): React.ReactNode {
        return (
            <FormControl>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    className={styles.con}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.props.value}
                    label="Age"
                    onChange={this.props.onChange}
                >
                    {
                        this.props.options.map((v,i)=>(
                            <MenuItem key={i} value={v.value}>{v.title}</MenuItem>
                        ))
                    }
                    
                </Select>
            </FormControl>
        );
    }
}
