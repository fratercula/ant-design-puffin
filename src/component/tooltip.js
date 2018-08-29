import React from 'react'
import PropTypes from 'prop-types'
import { Tooltip } from 'antd'
import { Recomponent } from '@fratercula/puffin'

function PuffinTooltip({ props, children }) {
  if (!children.node) {
    return (<Tooltip {...props}>{children}</Tooltip>)
  }

  const { node: Node } = children

  return (
    <Tooltip {...props}>
      <Node {...children.props}>
        <Recomponent {...children} node="div" props={{}} />
      </Node>
    </Tooltip>)
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
