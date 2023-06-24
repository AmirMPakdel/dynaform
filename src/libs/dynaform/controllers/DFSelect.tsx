import React, { Component } from "react";
import styles from "./DFSelect.module.css";

export default class DFSelect extends Component<DFSelectProps> {
    render(): React.ReactNode {
        return (
            <div className={styles.con} 
            style={{flex:this.props.flex||'1'}}>
            
            </div>
        );
    }
}

interface DFSelectProps {
    key?: string | number,
    ref?: (ref:DFSelect)=>void, 
    flex?: number | string,
    options: Array<{value:any, title:string}>
    onChange: ((event: any, child: React.ReactNode) => void) | undefined;
    value: any;
}