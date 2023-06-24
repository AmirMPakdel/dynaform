import React, { Component } from "react";
import styles from "./DynaRow.module.css";
import { DynaRowData } from "./__Types";
import DFButton from "./controllers/DFButton";
import DFSelect from "./controllers/DFSelect";
import DFTextInput from "./controllers/DFTextInput";
import DFDatePicker from "./controllers/DFDatePicker";

export default class DynaRow extends Component<DynaRowProps> {
    renderRowElement = (element: any, key: number, flex: number): React.ReactNode => {

        if (element.controller == "select") {
            return (
                <DFSelect
                    key={key}
                    flex={flex}
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
                    flex={flex}
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
                    flex={flex}
                    title={element.title}
                    onClick={element.onClick}
                />
            );
        }

        if (element.controller == "datepicker") {
            return (
                <DFDatePicker
                    key={key}
                    flex={flex}
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
                    this.renderRowElement(v, i, this.props.data.columnSizes[i])
                )}
            </div>
        );
    }
}

interface DynaRowProps {
    data: DynaRowData;
}
