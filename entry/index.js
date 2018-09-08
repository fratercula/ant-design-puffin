import React, { Component } from 'react'
import { render } from 'react-dom'
import puffin, { Recomponent } from '@fratercula/puffin'
import { LocaleProvider } from 'antd'
import moment from 'moment'
import 'moment/locale/zh-cn'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import Nv from './nv'
import antdPiffin from '../src'
import Jsoner from './json'
import schema from './schema'

moment.locale('zh-cn')

class Entry extends Component {
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
        <div style={{ marginLeft: 220, padding: '90px 50px' }}>
          <LocaleProvider locale={zhCN}>
            {
              current
                ? (<Recomponent {...schema[current]} />)
                : null
            }
          </LocaleProvider>
        </div>
        <Jsoner current={current} />
      </div>
    )
  }
}

render(<Entry />, document.getElementById('root'))
