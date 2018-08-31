export default {
  node: 'div',
  props: {
    style: {
      height: 1000,
      paddingTop: 200,
    },
  },
  children: {
    node: 'Affix',
    props: {
      offsetTop: 120,
    },
    children: {
      node: 'Button',
      children: '120px to affix top',
    },
  },
}
