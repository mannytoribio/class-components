import React, { Component } from "react"

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.counter} times.`
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.counter} times.`
  }

  componentWillUnmount() {
    document.title = '** React App**'
  }

  render () {
    const { counter } = this.state
    const { name } = this.props
    return (
      <>
        <h1>{name} clicked the button {counter} times.</h1>
        <button onClick={() => this.setState({counter : counter + 1})}>
          Click Me!
        </button>
      </>
    )
  }
}

export default Counter