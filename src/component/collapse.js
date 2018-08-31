import React from 'react'
import { Collapse } from 'antd'
import PropTypes from 'prop-types'
import { Recomponent } from '@fratercula/puffin'

function PuffinCollapse({ props, children }) {
  const {
    defaultActiveKey,
    accordion,
    ...rest
  } = props

  return (
    <Collapse
      defaultActiveKey={(defaultActiveKey || []).map(n => n.toString())}
      accordion={accordion}
      {...rest}
    >
      {
        children.map((item, i) => {
          const { props: childProps = {} } = item
          const {
            disabled,
            header,
            showArrow,
            ...childRest
          } = childProps
          const node = { ...item, props: childRest, node: 'div' }

          return (
            <Collapse.Panel
              key={i}
              showArrow={showArrow}
              disabled={disabled}
              header={(<Recomponent {...header} />)}
            >
              <Recomponent {...node} />
            </Collapse.Panel>
          )
        })
      }
    </Collapse>
  )
}

PuffinCollapse.propTypes = {
  props: PropTypes.object,
  children: PropTypes.array,
}

PuffinCollapse.defaultProps = {
  props: {},
  children: [],
}

PuffinCollapse.parse = false

export default PuffinCollapse
