export interface DynaElement {
    controller: "button" | "select" | "textinput";
    id: string;
}

export interface DynaButton extends DynaElement {
    title: string;
}

export interface DynaSelect extends DynaElement {
    onChange: ((event: any, child: React.ReactNode) => void) | undefined;
    options: Array<{value:any, title:any}>
    value: any;
}

export interface DynaTextInput extends DynaElement {
    title: string;
    variant: "outlined" | undefined;
}

export interface DynaRowData {
    columnSizes: Array<number>;
    elements: Array<DynaButton | DynaSelect | DynaTextInput>;
}

export interface DynaFormData {
    rows: Array<DynaRowData>;
}
