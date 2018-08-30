export default {
  node: 'Popover',
  props: {
    content: {
      node: 'p',
      children: 'content',
    },
    title: {
      node: 'Button',
      children: 'Button',
    },
    trigger: 'click',
  },
  children: {
    node: 'Button',
    children: 'Button',
  },
}
