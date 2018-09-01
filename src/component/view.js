import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'
import css from './view.less'

function View({ cells, style, header }) {
  return (
    <div className={css.view} style={style}>
      <div className={css.header}>
        {header}
      </div>
      <Row className={css.box}>
        {
          cells.map((cell, i) => {
            const {
              label,
              value,
              style: cellStyle,
              span,
              offset,
            } = cell

            return (
              <Col
                key={i}
                style={cellStyle}
                span={span}
                offset={offset}
              >
                {
                  label || value
                    ? (
                      <div className={css.cell}>
                        {
                          label
                            ? (
                              <div className={css.label}>
                                {label}
                              </div>
                            )
                            : null
                        }
                        {
                          value
                            ? (
                              <div className={css.value}>
                                {value}
                              </div>
                            )
                            : null
                        }
                      </div>
                    )
                    : null
                }
              </Col>
            )
          })
        }
      </Row>
    </div>
  )
}

View.propTypes = {
  cells: PropTypes.array,
  style: PropTypes.object,
  header: PropTypes.any,
}

View.defaultProps = {
  cells: [],
  style: {},
  header: '',
}

export default View
