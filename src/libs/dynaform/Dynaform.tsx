import React, { Component } from "react";
import styles from "./Dynaform.module.css";
import renderFormFromData, { DynaFormData } from "./renderFormData";

export default class Dynaform extends Component<DynaformProps> {
    render(): React.ReactNode {
        let con_class = styles.con;

        if (this.props.className) {
            con_class += " " + this.props.className;
        }

        let form = renderFormFromData(this.props.formData);

        return <div className={con_class}>{form}</div>;
    }
}

interface DynaformProps {
    className: string;
    formData: DynaFormData;
}
