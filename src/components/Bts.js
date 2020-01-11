import React from "react";
import logo from "../assets/bts.png";
import phone from "../assets/smartphone.png";
import { Container, Row, Col } from 'react-grid-system';
import './Main';


export class Bts extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let elements1=[];
        let elements2=[];
        let elements3=[];
        for(var i=0; i<this.props.state.counterUE; ++i){
            if(i<3){
                elements3.push(<Col sm={4}>
                    <img src={phone} className="iconPhone" alt="logo" />
                </Col>);
            }
            if(i<6 && i>=3){
                elements2.push(<Col sm={4}>
                    <img src={phone} className="iconPhone" alt="logo" />
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
                <div className="singleBTS">
                </div>
                <Container>
                    <Row>
                        {btsKeeper}
                    </Row>
                    <Row>
                        {elements3}
                    </Row>
                    <Row>
                        {elements2}
                    </Row>
                    <Row>
                        {elements1}
                    </Row>
                </Container>
            </div>
        );
    }
}