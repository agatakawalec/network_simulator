import logo from "../assets/bts.png";
import {Col} from "react-grid-system";
import React from "react";

export class BTS extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div style = {{alignItems:"center"}}>
                <Col sm={4}>
                    <img src={logo} className="icon" alt="logo" />
                </Col>
            </div>
        )
    }
}
