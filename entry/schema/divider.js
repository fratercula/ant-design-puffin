export default {
  node: 'div',
  children: [
    {
      node: 'div',
      children: [
        {
          node: 'a',
          children: 'Link',
        },
        {
          node: 'Divider',
          props: {
            type: 'vertical',
          },
        },
        {
          node: 'a',
          children: 'Link',
        },
      ],
    },
    {
      node: 'div',
      children: [
        {
          node: 'p',
          children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          node: 'Divider',
          children: 'With Text',
        },
        {
          node: 'p',
          children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
      ],
    },
  ],
}
