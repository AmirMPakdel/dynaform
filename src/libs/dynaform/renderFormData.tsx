import React from "react";

export default function renderFormFromData(
    formData: DynaFormData
): React.ReactNode {
    return <>
        {
            formData.elements.map((v,i)=>{
                return renderDynaElement(v, i);
            })
        }
    </>;
}

function renderDynaElement(element:DynaElement, key:number):React.ReactNode{

    
    if(element.controller)
}

interface DynaElement {
    controller: string,
    key: string,
    lable: string,
    listeners: object,
    value: any,
}

export interface DynaFormData {
    elements: Array<DynaElement>
}
