export default {
  node: 'div',
  children: [
    {
      node: 'Tag',
      props: {
        color: '#150',
      },
      children: 'magenta',
    },
    {
      node: 'Tag',
      props: {
        color: 'cyan',
        style: {
          marginLeft: 20,
        },
      },
      children: 'cyan',
    },
  ],
}
