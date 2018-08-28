import React, { Component } from 'react'
import { render } from 'react-dom'
import puffin, { Recomponent } from '@fratercula/puffin'
import Nv from './nv'
import antdPiffin from '../src'
import schema from './schema'

class Entry extends Component {
  parse = false

  state = {
    current: Object.keys(schema)[0],
  }

  componentWillMount() {
    puffin.library(antdPiffin)
  }

  onChange = (current) => {
    this.setState({ current })
  }

  render() {
    const { current } = this.state

    return (
      <div>
        <Nv onChange={this.onChange} />
        <div style={{ marginLeft: 220, padding: 60 }}>
          {
            current
              ? (<Recomponent {...schema[current]} />)
              : null
          }
        </div>
      </div>
    )
  }
}

render(<Entry />, document.getElementById('root'))
