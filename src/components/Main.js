import React from "react";
import './../App.css';
import {ArrayOfElements} from "./ArrayOfElements";
import {Buttons} from "./Buttons";


export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counterUE : 3,
            counterBTS : 3
        };
    }

    changeCounterUE = (n) => {
        this.setState({counterUE: n});
    }

    changeCounterBTS = (n) => {
        this.setState({counterBTS: n})
    }

    render() {
        return (
            <div className="container">
                <div className="btsHandler">
                    <ArrayOfElements state = {this.state} changeHandler = {this.changeCounterUE} changeHandler2 = {this.changeCounterBTS}/>
                </div>
                <div className="buttons">
                    <Buttons state = {this.state} changeHandler = {this.changeCounterUE} changeHandler2 = {this.changeCounterBTS}/>
                </div>
            </div>
        );
    }
}