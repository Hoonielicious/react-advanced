import React from 'react'

import incrementCount from '../actions/index.js'
import CountWidget from '../components/CountWidget.js'

export default class CountWidgetContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: this.props.store.getState()
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.store.subscribe(this.handleChange)
  }

  handleChange() {
    this.setState({
      count: this.props.store.getState()
    })
  }

  handleClick() {
    this.props.store.dispatch(incrementCount())
  }

  render() {
    return <CountWidget count={this.state.count} handleClick={this.handleClick}/>
  }
}
