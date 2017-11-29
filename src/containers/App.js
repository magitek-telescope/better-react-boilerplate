import React from "react"
import { render } from "react-dom"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as CounterActions from '@/actions/counter'
import Logo from '@/components/Logo'
import Counter from '@/components/Counter'

import './App.css'

class App extends React.Component {
  render() {
    const { counter, actions } = this.props
    return (
      <div id="app" styleName="app">
        <Logo />
        <Counter counter={counter} actions={actions} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(CounterActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
