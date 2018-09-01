# Ant Design Puffin

这是一个适用于 [Puffin](https://github.com/fratercula/puffin) 的 [Ant Design](https://github.com/ant-design/ant-design)

包含 Ant Design 所有组件。但是由于 Puffin 的特殊性，最好只是使用表现层的组件，含有丰富逻辑交互的组件不适用

常用的组件：https://fratercula.github.io/ant-design-puffin/

### 安装

```bash
$ npm i @fratercula/ant-design-puffin -S
```

### 使用

```js
import React from 'react'
import { render } from 'react-dom'
import puffin, { Recomponent } from '@fratercula/puffin'
import antd from '@fratercula/ant-design-puffin'

puffin.library(antd)

const schema = {
  node: 'Rate',
  props: {
    allowHalf: true,
    defaultValue: 2.5,
    disabled: true,
  },
}

render(<Recomponent {...schema} />, document.getElementById('root'))
```

### 特殊组件说明

- Setps: `progressDot` 不支持
- Popover: 设置样式 `display: block` 如果需要
- Tooltip: 设置样式 `display: block` 如果需要
- Tabs: `defaultActiveKey` 的值是数字，对应子元素的数组索引
- Coolapse: `defaultActiveKey` 为数组，数组元素为数字，也是对应子元素索引
