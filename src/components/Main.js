import React from "react";
import './../App.css';
import {ArrayOfElements} from "./ArrayOfElements";
import {Container} from "react-grid-system";


export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counterUE : 4,
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
                <div>
                    <ArrayOfElements state = {this.state} changeHandler = {this.changeCounterUE} changeHandler2 = {this.changeCounterBTS}/>
                </div>
            </div>
        );
    }
}