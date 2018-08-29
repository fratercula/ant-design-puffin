import React from 'react'
import { Timeline } from 'antd'
import PropTypes from 'prop-types'
import { Recomponent } from '@fratercula/puffin'

function PuffinTimeline({ props, children }) {
  const {
    pending,
    mode,
    ...rest
  } = props

  return (
    <Timeline {...rest} pending={pending} mode={mode}>
      {
        children.map((item, i) => {
          const { props: childProps = {} } = item
          const { dot, color, ...childRest } = childProps
          const node = { ...item, prop: childRest, node: 'div' }

          return (
            <Timeline.Item
              key={i}
              color={color}
              dot={dot ? (<Recomponent {...dot} />) : undefined}
            >
              <Recomponent {...node} />
            </Timeline.Item>
          )
        })
      }
    </Timeline>
  )
}

PuffinTimeline.propTypes = {
  props: PropTypes.object,
  children: PropTypes.array,
}

PuffinTimeline.defaultProps = {
  props: {},
  children: [],
}

PuffinTimeline.parse = false

export default PuffinTimeline
