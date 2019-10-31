import React from "react"

export default class Child extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  UNSAFE_componentWillMount() {
    console.log("will mount：虚拟DOM挂载之前")
  }
  componentDidMount() {
    console.log("did mount：虚拟DOM挂载之后")
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    console.log("will receive props：接受父组件属性", newProps)
  }

  shouldComponentUpdate() {
    console.log("should update")
    return true
  }

  UNSAFE_componentWillUpdate() {
    console.log("did update")
  }

  componentDidUpdate() {
    console.log("did update")
  }

  render() {
    return <div>
      <p>子组件{this.state.count}</p>
      <p>{this.props.name}</p>
    </div>
  }
}