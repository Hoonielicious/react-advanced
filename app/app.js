import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import reducer from './reducers/index.js'
import CountWidget from './containers/CountWidget.js'

let store = createStore(reducer)

class App extends React.Component {
  render() {
    return (
      <div>
        <CountWidget store={this.props.store}/>
      </div>
    )
  }
}

ReactDOM.render(<App store={store}/>, document.getElementById('react-container'));
