import React, { Component } from 'react'
import { render } from 'react-dom'

import './index.css'

class Counter extends Component {
  constructor (props) {
    super(props)
    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
  }

  handleIncrement () {
    this.props.actions.incrementCount()
  }

  handleDecrement () {
    this.props.actions.decrementCount()
  }

  render () {
    const { count } = this.props.counter
    return (
      <div>
        <p styleName="count">{count}</p>
        <div styleName="flex">
          <button
            type="button"
            onClick={this.handleIncrement}
            styleName="button"
          >
            <span styleName="button-inner increment">+</span>
          </button>
          <button
            type="button"
            onClick={this.handleDecrement}
            styleName="button"
          >
            <span styleName="button-inner decrement">-</span>
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
