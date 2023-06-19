
import React, {Component} from "react";

export default class Nossr extends Component<NossrProps, NossrState>{

    constructor(props:NossrProps){
        super(props);
        
        this.state = {load: true};
    }

    componentDidMount(): void {
        
        this.setState({
            load:true
        });
    }

    render(): React.ReactNode {
        
        return(
            <>
            {
                this.state.load?
                this.props.children:<div/>
            }
            </>
        )
    }
}

interface NossrProps{
    children: React.ReactNode
}

interface NossrState{
    load: boolean,

}