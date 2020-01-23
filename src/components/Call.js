import React from "react";
import accept from "../assets/acceptPhone.png";
import decline from "../assets/declinePhone.png";
import Button from "react-bootstrap/Button";

export class Call extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taken: 0,
            id: this.props.number,
            backInfo1: "1st info",
            backInfo2: "2nd info",
            backInfo3: "3rd info",
        };
        this.set1info = this.set1info.bind(this);
        this.set2info = this.set2info.bind(this);
        this.set3info = this.set3info.bind(this);
    };

    sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    };

    newCall = (from, to) => {
        this.set1info("Telefon łączy się z " + to);
        fetch('https://localhost:8080/call', {
            method: 'POST',
            headers : {Accept: 'application/json',
                'Content-Type': 'application/json',},
            body:JSON.stringify({from: from, to:to})
        }).then((res) => res.json())
            .then((res) =>  this.set2info(res))
            .catch((err)=>console.log(err))
    };

    clearData = () => {
        this.set1info(". ");
        this.set2info(". ");
        this.set3info(". ");
        this.set2info("Trwa rozłączanie...")
        this.sleep(1000).then(() => {
            this.set1info(".");
            this.set2info(". ");
            this.set3info(". ");
        });

    };

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
                </div>
                <div className="oneText">
                    {this.state.backInfo2}
                </div>
                <div className="oneText">
                    {this.state.backInfo3}
                </div>
                <br/>
                <img src={decline} className="iconSmall" onClick={this.clearData} />
                <br/>
                <h4>Połącz mnie z telefonem nr:</h4>
                {(id)!==1 ? <Button className="miniButtonek" onClick={() => this.newCall(id,1)}>1</Button> : null}
                {(id)!==2 ? <Button className="miniButtonek" onClick={() => this.newCall(id,2)}>2</Button> : null}
                {(id)!==3 ? <Button className="miniButtonek" onClick={() => this.newCall(id,3)}>3</Button> : null}
                {(id)!==4 ? <Button className="miniButtonek" onClick={() => this.newCall(id,4)}>4</Button> : null}
            </div>
        );
    }
}
