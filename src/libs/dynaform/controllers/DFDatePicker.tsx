import React, { Component } from "react";
import styles from "./DFDatePicker.module.css";
import JDatePicker from "@/libs/persianCalendar/JDatePicker";

export default class DFDatePicker extends Component<DFDatePickerProps> {
    render(): React.ReactNode {
        return (
            <div className={styles.con}>
                
                <JDatePicker
                    className={styles.input}
                    value={this.props.value}
                    onChange={this.props.onChange}
                />
            </div>
        );
    }
}

interface DFDatePickerProps {
    value: Date,
    onChange(date:Date):void,
}