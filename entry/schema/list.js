export default {
  node: 'div',
  children: [
    {
      node: 'List',
      props: {
        grid: {
          column: 4,
        },
        dataSource: [
          {
            title: 'Title 1',
          },
          {
            title: 'Title 2',
          },
          {
            title: 'Title 3',
          },
          {
            title: 'Title 4',
          },
        ],
        renderItem: {
          variable: ['item'],
          node: 'List.Item',
          props: {
            style: {
              padding: '0 8px',
            },
          },
          children: {
            node: 'Card',
            props: {
              title: '${item.title}', // eslint-disable-line
            },
            children: 'Card Content',
          },
        },
      },
    },
    {
      node: 'List',
      props: {
        style: {
          marginTop: 15,
        },
        bordered: true,
        itemLayout: 'horizontal',
        dataSource: [
          { title: 'Ant Design Title 1' },
          { title: 'Ant Design Title 2' },
          { title: 'Ant Design Title 3' },
          { title: 'Ant Design Title 4' },
        ],
        renderItem: {
          variable: ['item'],
          node: 'List.Item',
          children: [
            {
              node: 'List.Item.Meta',
              props: {
                avatar: {
                  node: 'Avatar',
                  props: {
                    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                  },
                },
                title: {
                  node: 'a',
                  props: {
                    href: 'https://ant.design',
                  },
                  children: '${item.title}', // eslint-disable-line
                },
                description: 'Ant Design, a design language for background applications',
              },
            },
          ],
        },
      },
    },
  ],
}
