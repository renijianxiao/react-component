import React from "react";
import {Icon, Badge} from "antd";
import $ from "jquery";

class Friend_status extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        var url = this.props.url;
        $.get(
            url,
            "json",
            function(result) {
                this.setState({
                    data: result
                })
            }.bind(this)
        )
    }

    render() {
        var query = this.state.data.map(function(item, i) {
            return(
                <li key={i} className={item.class}>
                    <Icon type={item.icon}/> <span>{item.title}</span><Badge dot style={{backgroundColor: item.bgColor}} ></Badge>
                </li>
            )
        });
        return (
            <div className="">
                <ul className="friend_status">
                    {query}
                </ul>
            </div>
        )
    }
}
export default Friend_status;


// 这个组件如果要使用多次, 调取不同的数据, 那么就可以在调用组件的时候 <Friend_status url="">提供数据地址, 然后使用jquey-ajax获取数据即可。
