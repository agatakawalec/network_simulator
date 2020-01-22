import React from "react";
import logo from "../assets/bts.png";
import phone from "../assets/smartphone.png";
import accept from "../assets/acceptPhone.png";
import decline from "../assets/declinePhone.png";


export class Call extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backInfo1: ["1st info"],
            backInfo2: ["2nd info"],
            backInfo3: ["3rd info"],
        }
    }

    render() {
        return (
            <div>
                {this.state.backInfo1}
                <br/>
                {this.state.backInfo2}
                <br/>
                {this.state.backInfo3}
            </div>
        );
    }
}
