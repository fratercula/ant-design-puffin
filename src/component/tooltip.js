import React from 'react'
import PropTypes from 'prop-types'
import { Tooltip } from 'antd'
import { Recomponent } from '@fratercula/puffin'

function PuffinTooltip({ props, children }) {
  if (Array.isArray(children)) {
    return (
      <Tooltip {...props}>
        <div style={{ display: 'inline-block' }}>
          {
            children.map((item, i) => (
              <Recomponent key={i} {...item} />
            ))
          }
        </div>
      </Tooltip>
    )
  }

  if (!children.node) {
    return (<Tooltip {...props}>{children}</Tooltip>)
  }

  return (
    <Tooltip {...props}>
      <div style={{ display: 'inline-block' }}>
        <Recomponent {...children} />
      </div>
    </Tooltip>
  )
}

PuffinTooltip.propTypes = {
  props: PropTypes.object,
  children: PropTypes.any,
}

PuffinTooltip.defaultProps = {
  props: {},
  children: undefined,
}

PuffinTooltip.parse = false

export default PuffinTooltip
