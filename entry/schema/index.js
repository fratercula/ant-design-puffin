import Divider from './divider'
import Progress from './progress'
import Alert from './alert'
import Timeline from './timeline'
import Icon from './icon'
import Tag from './tag'
import Tabs from './tabs'
import Button from './button'
import Tooltip from './tooltip'
import Table from './table'
import Popover from './popover'
import List from './list'
import Avatar from './avatar'
import Card from './card'
import Badge from './badge'
import Carousel from './carousel'
import Collapse from './collapse'
import Rate from './rate'
import Affix from './affix'
import Grid from './grid'
import Steps from './steps'
import View from './view'

const data = {
  View,
  Steps,
  Grid,
  Affix,
  Rate,
  Collapse,
  Carousel,
  Badge,
  Card,
  Avatar,
  List,
  Popover,
  Table,
  Tooltip,
  Button,
  Divider,
  Progress,
  Alert,
  Timeline,
  Icon,
  Tag,
  Tabs,
  Pagination: {
    node: 'Pagination',
    props: {
      showQuickJumper: true,
      defaultCurrent: 2,
      total: 100,
    },
  },
  RangePicker: {
    node: 'DatePicker.RangePicker',
  },
}

const schema = {}

Object.keys(data)
  .sort()
  .forEach((key) => {
    schema[key] = data[key]
  })

export default schema
