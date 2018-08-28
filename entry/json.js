import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Drawer } from 'antd'
import Highlight from 'react-highlight.js'
import schema from './schema'

export default class extends Component {
  static propTypes = {
    current: PropTypes.string,
  }

  static defaultProps = {
    current: '',
  }

  state = {
    visible: false,
  }

  render() {
    const { visible } = this.state
    const { current } = this.props
    const style = {
      position: 'fixed',
      right: 20,
      top: 20,
    }

    return (
      <div style={style}>
        <Drawer
          width="50%"
          title="JSON Schema"
          placement="right"
          onClose={() => this.setState({ visible: false })}
          visible={visible}
        >
          <Highlight language="json">
            {JSON.stringify(schema[current], null, 2)}
          </Highlight>
        </Drawer>
        <Button type="primary" onClick={() => this.setState({ visible: true })}>JSON Schema</Button>
      </div>
    )
  }
}
