import React from 'react'
import { Steps } from 'antd'
import PropTypes from 'prop-types'
import { Recomponent } from '@fratercula/puffin'

function PuffinSteps({ props, children }) {
  return (
    <Steps {...props} progressDot={false}>
      {
        children.map((item, i) => {
          const { props: childProps = {} } = item
          const {
            description,
            icon,
            title,
            ...rest
          } = childProps
          const descNode = description && description.node
            ? <Recomponent {...description} />
            : description
          const titleNode = title && title.node
            ? <Recomponent {...title} />
            : title
          const childNode = { ...item, props: rest, node: 'div' }

          return (
            <Steps.Step
              key={i}
              icon={icon ? (<Recomponent {...icon} />) : undefined}
              title={titleNode}
              description={descNode}
            >
              <Recomponent {...childNode} />
            </Steps.Step>
          )
        })
      }
    </Steps>
  )
}

PuffinSteps.propTypes = {
  props: PropTypes.object,
  children: PropTypes.array,
}

PuffinSteps.defaultProps = {
  props: {},
  children: [],
}

PuffinSteps.parse = false

export default PuffinSteps
