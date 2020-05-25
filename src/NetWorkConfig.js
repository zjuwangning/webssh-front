import React from "react"
import openSocket from 'socket.io-client';
import {Row, Col, Button} from "antd"
import XtermTest from "./XtermTest"

const socket = openSocket('http://localhost:8000');

export default class NetWorkConfig extends React.Component {
    constructor(props) {
        super(props);
        this.createServer1 = this.createServer1.bind(this);
        this.createServer2 = this.createServer2.bind(this);
        this.term1 = null;
        this.term2 = null;
    }

    createServer1() {
        socket.emit("createNewServer", {msgId: 'net1', ip: "47.107.120.52", username: "root", password: "*****************"});
        let term = this.term1.getTerm();
        console.log('term', term);
        term.on("data", function(data) {
            socket.emit('net1', data);
        })
        socket.on("net1", function (data) {
            console.log('data', data);
            term.write(data)
        })
    }

    createServer2() {
        socket.emit("createNewServer", {msgId: 'net2', ip: "47.107.120.52", username: "root", password: "******************"});
        let term = this.term2.getTerm();
        console.log('term', term);
        term.on("data", function(data) {
            socket.emit('net2', data);
        })
        socket.on("net2", function (data) {
            term.write(data)
        })
    }

    render() {
        return (
            <div>
                <Row type='flex' style={{width: '70%'}}>
                    <Col><Button onClick={this.createServer1}>按钮1</Button></Col>
                    <Col><XtermTest ref={(term1) => {this.term1 = term1}} id="net1"/></Col>
                </Row>
                <div style={{height: '2vh', backgroundColor: 'white'}}> </div>
                <Row type='flex' style={{width: '70%'}}>
                    <Col><Button onClick={this.createServer2}>按钮2</Button></Col>
                    <Col><XtermTest ref={(term2) => {this.term2 = term2}} id="net2"/></Col>
                </Row>
            </div>
        )
    }

}

