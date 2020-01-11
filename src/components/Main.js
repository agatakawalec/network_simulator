import React from "react";
import './../App.css';
import {Bts} from "./Bts";
import {Buttons} from "./Buttons";


export class Main extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            counterUE : 5,
            counterBTS : 3,
        }
    }

    changeCounterUE = (n) => {
        this.setState({counterUE: n})
    }

    changeCounterBTS = (n) => {
        this.setState({counterBTS: n})
    }

    render() {
        return (
            <div className="container">
                <div className="btsHandler">
                    <Bts state = {this.state} changeHandler = {this.changeCounterUE} changeHandler2 = {this.changeCounterBTS}/>
                </div>
                <div className="buttons">
                    <Buttons state = {this.state} changeHandler = {this.changeCounterUE} changeHandler2 = {this.changeCounterBTS}/>
                </div>
            </div>
        );
    }
}