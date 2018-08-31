export default {
  node: 'Breadcrumb',
  children: [
    {
      node: 'Breadcrumb.Item',
      props: {
        href: '/',
      },
      children: {
        node: 'Icon',
        props: {
          type: 'home',
        },
      },
    },
    {
      node: 'Breadcrumb.Item',
      props: {
        href: '/',
      },
      children: [
        {
          node: 'Icon',
          props: {
            type: 'user',
          },
        },
        {
          node: 'span',
          children: 'Application List',
        },
      ],
    },
    {
      node: 'Breadcrumb.Item',
      children: 'Application',
    },
  ],
}
