import React from "react";
import logo from "../assets/bts.png";
import phone from "../assets/smartphone.png";
import accept from "../assets/acceptPhone.png";
import decline from "../assets/declinePhone.png";
import { Container, Row, Col } from 'react-grid-system';
import './Main';
import {BTS} from "./BTS";
import {Button} from "react-bootstrap";
import {Call} from './Call';

export class ArrayOfElements extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backInfo1: ["1st info"],
            backInfo2: ["2nd info"],
            backInfo3: ["3rd info"],
        }
    }

    test = () => {
        console.log("HURRAA");
    }


    render() {
        let elements1=[];
        let elements2=[];
        let elements3=[];
        for(var i=0; i<this.props.state.counterUE; ++i){
            if(i<5){
                elements3.push(
                        <Col sm={3}>
                            <img src={phone} className="iconPhone" alt="logo" />
                            <h1>Phone {i+1}</h1>
                            <div className="infoContainer">
                                <Call/>
                            </div>
                            <br/>
                            <img src={accept} className="iconSmall" onClick={this.test} />
                            <img src={decline} className="iconSmall" onClick={this.test} />
                        </Col>
                    );
            }
            if(i<6 && i>=3){
                elements2.push(<Col sm={4}>
                    <h1>Phone {i}</h1>
                </Col>);
            }
            if(i<9 && i>=6){
                elements1.push(<Col sm={4}>
                    <img src={phone} className="iconPhone" alt="logo" />
                </Col>);
            }
            else{
                console.log("Too many phones already")
            }
        }

        let btsKeeper = [];
        for(var j = 0; j< this.props.state.counterBTS; ++j){
            btsKeeper.push(<Col sm={4}>
                <img src={logo} className="icon" alt="logo" />
            </Col>)
        }

        return (
            <div>
                <h2>Network simulation with Erlang</h2>
                <Container>
                    <Row>
                        <Col></Col>
                        <BTS/>
                        <Col></Col>
                    </Row>
                    <Row>
                        {elements3}
                    </Row>

                </Container>
            </div>
        );
    }
}