// rewriting class component as a functional component
// go line by line and determine if its needed
import { useState, useEffect } from "react"

function Counter2({ name }) {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    document.title = `You clicked ${counter} times.`
    return () => {
      document.title = '!! React App !!'
    }
    // this return inside the useEffect replaces the componentWillUnmount in Counter
  }, [counter])
    return (
      <>
        <h1>{name} clicked the button {counter} times.</h1>
        <button onClick={() => setCounter(counter + 1)}>
          Click Me!
        </button>
      </>
    )
}

export default Counter2

// import React, { Component } from "react"
// ** NEEDS NEW IMPORTS**

// class Counter2 extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       counter: 0
//     }
//   } 
// **REPLACED WITH SET STATE**

//   componentDidMount() {
//     document.title = `You clicked ${this.state.counter} times.`
//   }

//   componentDidUpdate() {
//     document.title = `You clicked ${this.state.counter} times.`
//   } 
// **BOTH OF THE ABOVE REPLACED BY USE EFFECT**

//   render () {
//     const { counter } = this.state
//     return (
//       <>
//         <h1>You clicked the button {counter} times.</h1>
//         <button onClick={() => this.setState({counter : counter + 1})}>
//           Click Me!
//         </button>
//       </>
//     )
//   }
// } 
// **RENDER AND COUNTER DECONSTRUCTION NOT NEEDED.**


