
import React, { Component } from "react";
import styles from "./JDatePicker.module.css";
import { DatePicker } from "./index";

export default class JDatePicker extends Component<Props, State>{

    constructor(props: Props){
        super(props);

        this.state = {
            turn: 0
        }
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        
        if(prevProps.value !== this.props.value){
            
            let turn = this.state.turn==1?0:1;
            this.setState({turn});
        }
    }

    shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
        
        console.log(nextProps.value, this.props.value)
        console.log(nextProps.value !== this.props.value);
        
        if(nextProps.value !== this.props.value){
            
            return true;
        }

        return false;
    }

    render(): React.ReactNode {
        console.log(this.state.turn)
        return(
            <div className={styles.con} style={{borderColor:"#00b96b"}}>
                {
                    this.state.turn==1?
                    <DatePicker
                    defaultValue={this.props.value}
                    onChange={this.props.onChange}
                    inputClass={styles.input+" "+this.props.className}
                    accentColor={"#00b96b"}/>
                    :
                    <DatePicker
                    defaultValue={this.props.value}
                    onChange={this.props.onChange}
                    inputClass={styles.input+" "+this.props.className}
                    accentColor={"#00b96b"}/>
                }
            </div>
        )
    }
}

interface State{
    turn: number
}

interface Props{
    value?: number | Date, // timestamp|Date|Dayjs; default:undefined
    weekend?: number[],// default:undefined
    round?: "thin" | "x1" | "x2" | "x3" | "x4", // default:"thin"
    accentColor?: string,// default:"#0D59F2"
    locale?: "en"|"fa",// default:"fa"
    direction?:	"rtl"|"ltr",// default:"ltr"
    onChange?(e:any):void,// default:undefined
    range?:	boolean,// default:false
    from?:	"timestamp"|"Date"|"Dayjs",// default:undefined
    to?: "timestamp"|"Date"|"Dayjs",// default:undefined
    show?: boolean,// default:false
    inputClass?: string,// default:null
    inputAttributes?: any,//InputHTMLAttributes; default:null
    className?: string,// default:null
}