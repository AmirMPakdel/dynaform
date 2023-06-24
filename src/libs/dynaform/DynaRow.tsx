import React, { Component } from "react";
import styles from "./DynaRow.module.css";
import { DynaRowData } from "./__Types";
import DFButton from "./controllers/DFButton";
import DFSelect from "./controllers/DFSelect";
import DFTextInput from "./controllers/DFTextInput";
import DFDatePicker from "./controllers/DFDatePicker";

export default class DynaRow extends Component<DynaRowProps> {
    renderRowElement = (element: any, key: number): React.ReactNode => {
        if (element.controller == "button") {
            return <DFButton key={key} title={element.title} />;
        }

        if (element.controller == "select") {
            return (
                <DFSelect
                    key={key}
                    value={element.value}
                    onChange={element.onChange}
                    options={element.options}
                />
            );
        }

        if (element.controller == "textinput") {
            return (
                <DFTextInput
                    key={key}
                    title={element.title}
                    value={element.value}
                    onChange={element.onChange}
                />
            );
        }

        if (element.controller == "button") {
            return (
                <DFButton
                    key={key}
                    title={element.title}
                    onClick={element.onClick}
                />
            );
        }

        if (element.controller == "datepicker") {
            return (
                <DFDatePicker
                    key={key}
                    value={element.value}
                    onChange={element.onChange}
                />
            );
        }

        return <div />;
    };

    render(): React.ReactNode {
        return (
            <div className={styles.con}>
                {this.props.data.elements.map((v, i) =>
                    this.renderRowElement(v, i)
                )}
            </div>
        );
    }
}

interface DynaRowProps {
    data: DynaRowData;
}
