import React, { Component } from "react";
import styles from "./DFTextInput.module.css";

export default class DFTextInput extends Component<DFTextInputProps> {
    render(): React.ReactNode {
        return (
            <div/>
        );
    }
}

interface DFTextInputProps {
    key?: string | number,
    ref?: (ref:DFTextInput)=>void, 
    title: string;
    value: string;
    onChange?: (event: any, child: React.ReactNode) => void;
    variant?: "outlined" | undefined;
}
