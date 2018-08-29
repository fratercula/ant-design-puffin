export default {
  node: 'div',
  children: [
    {
      node: 'Button',
      props: {
        type: 'primary',
        icon: 'search',
        block: true,
      },
      children: 'Button',
    },
    {
      node: 'Button.Group',
      props: {
        style: {
          marginTop: 20,
        },
      },
      children: [
        {
          node: 'Button',
          children: 'Button',
        },
        {
          node: 'Button',
          children: 'Button',
        },
      ],
    },
  ],
}
