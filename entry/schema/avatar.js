export default {
  node: 'div',
  children: [
    {
      node: 'Avatar',
      props: {
        icon: 'user',
      },
    },
    {
      node: 'Avatar',
      props: {
        style: {
          marginLeft: 20,
        },
      },
      children: 'Avatar',
    },
  ],
}
