import React from 'react'
import { Select } from 'antd'
import PropTypes from 'prop-types'
import { Recomponent } from '@fratercula/puffin'

function PuffinSelect({ props, children }) {
  return (
    <Select {...props}>
      {
        children.map((item, i) => {
          if (item.node === 'Select.OptGroup') {
            const { label } = item.props
            return (
              <Select.OptGroup
                key={i}
                label={label.node ? (<Recomponent {...label} />) : label}
              >
                {
                  item.children.map((option, j) => (
                    <Select.Option key={j} {...option.props}>
                      {option.children}
                    </Select.Option>
                  ))
                }
              </Select.OptGroup>
            )
          }

          return (
            <Select.Option key={i} {...item.props}>
              {item.children}
            </Select.Option>
          )
        })
      }
    </Select>
  )
}

PuffinSelect.propTypes = {
  props: PropTypes.object,
  children: PropTypes.array,
}

PuffinSelect.defaultProps = {
  props: {},
  children: [],
}

PuffinSelect.parse = false

export default PuffinSelect
