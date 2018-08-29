export default {
  node: 'Tooltip',
  props: {
    title: 'Prompt Text',
  },
  children: {
    node: 'Button',
    props: {
      style: {
        textAlign: 'center',
      },
    },
    children: 'Button',
  },
}
