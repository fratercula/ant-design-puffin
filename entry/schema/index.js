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
import BackTop from './backtop'
import Anchor from './anchor'
import Pagination from './pagination'
import TimePicker from './timepicker'
import AutoComplete from './autocomplete'
import Cascader from './cascader'
import Checkbox from './checkbox'
import DatePicker from './datepicker'
import Input from './input'
import InputNumber from './inputnumber'
import Radio from './radio'
import Select from './select'

const data = {
  Select,
  Radio,
  InputNumber,
  Input,
  Checkbox,
  Cascader,
  AutoComplete,
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
  BackTop,
  Anchor,
  Pagination,
  TimePicker,
  DatePicker,
}

const schema = {}

Object.keys(data)
  .sort()
  .forEach((key) => {
    schema[key] = data[key]
  })

export default schema
