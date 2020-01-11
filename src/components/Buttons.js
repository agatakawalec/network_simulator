import React from "react";
import Button from 'react-bootstrap/Button'
import './Bts';

export class Buttons extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            counterUE : this.props.state.counterUE,
            counterBTS : this.props.state.counterBTS,
        }
    }

    addBTS = () => {
        let param = this.props.state.counterBTS + 1;
        if(param < 4){
            this.props.changeHandler2(param);
        }
    }

    deleteBTS = () => {
        let param = this.props.state.counterBTS - 1;
        this.props.changeHandler2(param);
    }

    addUE = () => {
        let param = this.props.state.counterUE + 1;
        this.props.changeHandler(param);
    }

    deleteUE = () => {
        let param = this.props.state.counterUE - 1;
        this.props.changeHandler(param);
    }

    render() {
        return (
            <>
                <Button onClick = {this.addBTS} className = "oneButton" variant="primary">Dodaj BTS</Button>
                <br/>
                <Button onClick = {this.deleteBTS} className = "oneButton" variant="primary">Usuń BTS</Button>
                <br />
                <Button onClick = {this.addUE} className = "oneButton" variant="primary">Dodaj UE</Button>
                <br/>
                <Button onClick = {this.deleteUE} className = "oneButton" variant="primary">Usuń UE</Button>
            </>
        );
    }
}