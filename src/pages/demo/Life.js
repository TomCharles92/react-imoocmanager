import React from "react"
import Child from "./Child"
import "./Life.css";

import {Button} from "antd"
import 'antd/dist/antd.css'

export default class Life extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handleAdd = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return <div className="content">
      <p>React生命周期</p>
      <Button onClick={this.handleAdd}>点击</Button>
      <button onClick={this.handleClick.bind(this)}>点击</button>
      <p>{this.state.count}</p>
      <Child name="Jack"></Child>
    </div>
  }
}