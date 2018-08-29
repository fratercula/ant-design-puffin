import React from 'react'
import PropTypes from 'prop-types'
import { Tabs } from 'antd'
import { Recomponent } from '@fratercula/puffin'

function PuffinTabs({ props, children }) {
  const {
    defaultActiveKey,
    tabBarExtraContent,
    ...rest
  } = props

  return (
    <Tabs
      defaultActiveKey={defaultActiveKey.toString()}
      tabBarExtraContent={(<Recomponent {...tabBarExtraContent} />)}
      {...rest}
    >
      {
        children.map((item, i) => {
          const { props: childProps = {} } = item
          const { disabled, tab, ...childRest } = childProps
          const node = { ...item, node: 'div', props: childRest }

          return (
            <Tabs.TabPane
              key={i}
              disabled={disabled}
              tab={(<Recomponent {...tab} />)}
            >
              <Recomponent {...node} />
            </Tabs.TabPane>
          )
        })
      }
    </Tabs>
  )
}

PuffinTabs.propTypes = {
  props: PropTypes.object,
  children: PropTypes.array,
}

PuffinTabs.defaultProps = {
  props: {},
  children: [],
}

PuffinTabs.parse = false

export default PuffinTabs
