import React, { Component } from "react";
import styles from "./test.module.css";
import Dynaform from "@/libs/dynaform/Dynaform";


/**
 * Props of test Component
 * @typedef Props
 * @property {string} className
 * @property {React.CSSProperties} style
 *
 * @extends {Component<Props>}
 */
export default class test extends Component<TestProps, TestState> {
    constructor(props: TestProps) {
        super(props);
        this.state = {
            select1: null,
            select2: null,
            date: new Date(),
        }
    }

    componentDidMount() {

        setInterval(()=>{
            this.onDateChange({value:new Date()});
        }, 9000);
    }

    onDateChange=(e:{value:Date})=>{

        console.log(e.value);
        
        this.setState({date:e.value});
    }

    render() {
        return (
            <div className={styles.con}>
                
                <Dynaform
                    formData={{
                        rows: [
                            {
                                columnSizes: [4,4,4],
                                elements: [
                                    {
                                        controller: "button",
                                        id: "btn1",
                                        title: "ثبت",
                                    },
                                    {
                                        controller:"select",
                                        id: "select1",
                                        options: [
                                            {value:10, title:"10"}
                                        ],
                                        onChange: (event, child) => {

                                            this.setState({select1:event.target.value})
                                        },
                                        value: this.state.select1
                                    },
                                    // {
                                    //     controller:"select",
                                    //     id: "select2",
                                    //     options: [
                                    //         {value:10, title:"10"}
                                    //     ],
                                    //     onChange: (event, child) => {
                                    //         this.setState({select2:event.target.value})
                                    //     },
                                    //     value:this.state.select2
                                    // },
                                ],
                            },
                        ],
                    }}
                />
            </div>
        );
    }
}

interface TestProps {

}

interface TestState {

    select1: number | null,
    select2: number| null,
    date: Date,
}
