import React from "react";
import accept from "../assets/acceptPhone.png";
import decline from "../assets/declinePhone.png";
import Button from "react-bootstrap/Button";

export class Call extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.number,
            backInfo1: "1st info",
            backInfo2: "2nd info",
            backInfo3: "3rd info",
        }
        this.set1info = this.set1info.bind(this);
        this.set2info = this.set2info.bind(this);
        this.set3info = this.set3info.bind(this);
    }

    set1info = (info) => {
        this.setState({backInfo1: info});
        console.log("jestem tuuu");
    };

    set2info = (info) => {
        this.setState({backInfo2: info});
    };

    set3info = (info) => {
        this.setState({backInfo3: info});
    };

    call = (from, to) => {
        console.log("call from " + JSON.stringify(from) + " to " + JSON.stringify(to));
    };

    accept = (id) => {
        console.log("accept" + JSON.stringify(id));
    };

    decline = (id) => {
        console.log("decline" + JSON.stringify(id));
    };

    click = () => {
        //console.log(this.props);
        console.log("------------")
    };

    render() {
        let id = this.state.id+1;
        return (
            <div>
                <div className="oneText">
                    {this.state.backInfo1}
                    {this.click}
                </div>
                <div className="oneText">
                    {this.state.backInfo2}
                </div>
                <div className="oneText">
                    {this.state.backInfo3}
                </div>
                <br/>
                <img src={accept} className="iconSmall" onClick={() => this.accept(id)} />
                <img src={decline} className="iconSmall" onClick={() => this.decline(id)} />
                <br/>
                <h4>Połącz mnie z telefonem nr:</h4>
                {(id)!==1 ? <Button className="miniButtonek" onClick={() => this.call(id,1)}>1</Button> : null}
                {(id)!==2 ? <Button className="miniButtonek" onClick={() => this.call(id,2)}>2</Button> : null}
                {(id)!==3 ? <Button className="miniButtonek" onClick={() => this.call(id,3)}>3</Button> : null}
                {(id)!==4 ? <Button className="miniButtonek" onClick={() => this.call(id,4)}>4</Button> : null}


                <Button onClick={() => this.set1info("BRUM BRUM")}>PRZETESTUJ MNIE</Button>
            </div>
        );
    }
}
