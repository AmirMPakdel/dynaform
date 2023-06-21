import React, { Component } from "react";
import styles from "./DFSelect.module.css";

interface DFSelectProps {
    options: Array<{value:any, title:string}>
    onChange: ((event: any, child: React.ReactNode) => void) | undefined;
    value: any;
}

export default class DFSelect extends Component<DFSelectProps> {
    render(): React.ReactNode {
        return (
            <div className={styles.con}>
            
            </div>
        );
    }
}
