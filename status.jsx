import React from "react";
import {Row, Col, Button, Icon} from "antd";
import All_status from "./all_status";
import Friend_status from "./friend_status";
import First_right from "./first_right";
class Status extends React.Component {
    render() {
        return (
            <Row>
                <Col span={18} offset={3}>
                    <Row>
                        <Col span={5}>
                            <div className="left" style={{border: "1px solid #ddd"}}>
                                <Friend_status url="./data/left_content.json"/>
                            </div>
                            <br/>
                            <div className="left" style={{border: "1px solid #ddd"}}>
                                <Friend_status url="./data/second_content.json"/>
                            </div>
                        </Col>
                        <Col span={12} offset={1} style={{border: "1px solid #ddd"}}>
                            <div className="center">
                                <All_status/>
                            </div>
                        </Col>
                        <Col span={5} offset={1} style={{border: "1px solid #ddd"}}>
                            <div className="right">
                                <First_right url="./data/first_right.json" />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default Status;
