import React from 'react'
import { Popover } from 'antd'

export default function (params) {
  const {
    children,
    props,
    ...rest
  } = params

  return (
    <Popover {...rest}>
      <div style={{ display: 'inline-block' }}>
        {children}
      </div>
    </Popover>
  )
}
