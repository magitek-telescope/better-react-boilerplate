import React, { Component } from 'react'
import { render } from 'react-dom'

import './index.css'

class Logo extends Component {
  render () {
    return <img src="/assets/logo.svg" styleName="logo" />
  }
}

export default Logo
