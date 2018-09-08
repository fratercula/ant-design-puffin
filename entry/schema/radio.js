export default {
  node: 'div',
  children: [
    {
      node: 'Radio.Group',
      props: {
        options: ['Apple', 'Pear', 'Orange'],
        defaultValue: 'Apple',
      },
    },
    {
      node: 'Radio.Group',
      props: {
        style: {
          display: 'block',
        },
        defaultValue: 2,
      },
      children: [
        {
          node: 'Radio',
          props: { value: 1 },
          children: 'A',
        },
        {
          node: 'Radio',
          props: { value: 2 },
          children: 'B',
        },
        {
          node: 'Radio',
          props: { value: 3 },
          children: 'C',
        },
      ],
    },
  ],
}
