import React, { Component, ReactElement } from "react";
import styles from "./DynaRow.module.css";
import { DynaRowData } from "./__Types";
import DFButton from "./controllers/DFButton";
import DFSelect from "./controllers/DFSelect";
import DFTextInput from "./controllers/DFTextInput";
import DFDatePicker from "./controllers/DFDatePicker";
import DFSpace from "./controllers/DFSpace";
import DFTextArea from "./controllers/DFTextarea";

export default class DynaRow extends Component<DynaRowProps> {
    renderRowElement = (
        element: any,
        key: number,
        flex: number
    ): React.ReactNode => {

        element.key = key;

        let NodeClass:React.ComponentType<any>;

        switch (element.controller) {
            case "button":
                NodeClass = DFButton;
                break;
            case "datepicker":
                NodeClass = DFDatePicker;
                break;
            case "select":
                NodeClass = DFSelect;
                break;
            case "space":
                NodeClass = DFSpace;
                break;
            case "textarea":
                NodeClass = DFTextArea;
                break;
            case "textinput":
                NodeClass = DFTextInput;
                break;

            default:
                NodeClass = DFSpace;
        }

        return <NodeClass flex={flex} {...element} />;
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
