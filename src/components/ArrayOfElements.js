import React from "react";
import logo from "../assets/bts.png";
import phone from "../assets/smartphone.png";
import accept from "../assets/acceptPhone.png";
import decline from "../assets/declinePhone.png";
import { Container, Row, Col} from 'react-grid-system';
import './Main';
import {BTS} from "./BTS";
import {Call} from './Call';
import Button from 'react-bootstrap/Button'

export class ArrayOfElements extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info11: '',
            info12: '',
            info13: '',
            info21: '',
            info22: '',
            info23: '',
            info31: '',
            info32: '',
            info33: '',
            chosen1: 0,
            chosen2: 0}
    }

    test = () => {
        console.log("HURRAA");
    };


    render() {
        let elements1=[];
        let elements2=[];
        let elements3=[];

        for(var i=0; i<this.props.state.counterUE; ++i){
            if(i<4){
                elements3.push(
                        <Col sm={3}>
                            <img src={phone} className="iconPhone" alt="logo" />
                            <h1>Phone {i+1}</h1>
                            <div className="infoContainer">
                                <Call number={i}/>
                            </div>
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