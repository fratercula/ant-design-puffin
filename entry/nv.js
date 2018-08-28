import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import PropTypes from 'prop-types'
import schema from './schema'

export default class extends Component {
  static propTypes = {
    onChange: PropTypes.func,
  }

  static defaultProps = {
    onChange: () => null,
  }

  state = {
    current: Object.keys(schema)[0],
  }

  render() {
    const { onChange } = this.props
    const { current } = this.state
    const siderStyle = {
      position: 'fixed',
      height: '100%',
      left: 0,
      overflowY: 'auto',
      borderRight: '1px solid #e8e8e8',
    }
    const titleStyle = {
      padding: 20,
      borderBottom: '1px solid #e8e8e8',
    }

    return (
      <Layout>
        <Layout.Sider style={siderStyle} theme="light">
          <h3 style={titleStyle}>Antd Puffin</h3>
          <Menu style={{ marginRight: -1 }} defaultSelectedKeys={[current]}>
            {
              Object.keys(schema).map(item => (
                <Menu.Item onClick={() => onChange(item)} key={item}>
                  {item}
                </Menu.Item>
              ))
            }
          </Menu>
        </Layout.Sider>
      </Layout>
    )
  }
}
