import React, { Component } from "react";
import styles from "./DFSelect.module.css";

export default class DFSelect extends Component<DFSelectProps> {
    render(): React.ReactNode {
        return (
            <div className={styles.con}>
            
            </div>
        );
    }
}

interface DFSelectProps {
    key?: string | number,
    ref?: (ref:DFSelect)=>void, 
    options: Array<{value:any, title:string}>
    onChange: ((event: any, child: React.ReactNode) => void) | undefined;
    value: any;
}