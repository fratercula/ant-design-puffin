export default {
  node: 'div',
  children: [
    {
      node: 'Anchor',
      props: {
        style: {
          width: 300,
          marginLeft: 200,
        },
      },
      children: [
        {
          node: 'Anchor.Link',
          props: {
            href: '#a0',
            title: 'Anchor a0',
          },
        },
        {
          node: 'Anchor.Link',
          props: {
            href: '#a1',
            title: 'Anchor a1',
          },
        },
      ],
    },
    {
      node: 'div',
      props: {
        id: 'a0',
        style: {
          width: 40,
          height: 40,
          background: 'grey',
        },
      },
    },
    {
      node: 'div',
      props: {
        id: 'a1',
        style: {
          width: 50,
          height: 50,
          marginTop: 1000,
          background: 'black',
        },
      },
    },
  ],
}
