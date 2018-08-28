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
        },
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
        {
          node: 'Divider',
          props: {
            dashed: true,
          },
        },
        {
          node: 'p',
          children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          node: 'Divider',
          props: {
            orientation: 'left',
          },
          children: 'Left Text',
        },
        {
          node: 'p',
          children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          node: 'Divider',
          props: {
            orientation: 'right',
          },
          children: 'Right Text',
        },
        {
          node: 'p',
          children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
      ],
    },
  ],
}
