import React from 'react'
import { Tooltip } from 'antd'

export default function (params) {
  const {
    children,
    props,
    ...rest
  } = params

  return (
    <Tooltip {...rest}>
      <div style={{ display: 'inline-block' }}>
        {children}
      </div>
    </Tooltip>
  )
}
