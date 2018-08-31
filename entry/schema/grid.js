export default {
  node: 'Row',
  children: [
    {
      node: 'Col',
      props: {
        xs: 2,
        sm: 4,
        md: 6,
        lg: 8,
        xl: 10,
        style: {
          textAlign: 'center',
          background: '#eee',
          padding: '10px 0',
        },
      },
      children: 'Col',
    },
    {
      node: 'Col',
      props: {
        xs: 20,
        sm: 16,
        md: 12,
        lg: 8,
        xl: 4,
        style: {
          textAlign: 'center',
          background: '#ddd',
          padding: '10px 0',
        },
      },
      children: 'Col',
    },
    {
      node: 'Col',
      props: {
        xs: 2,
        sm: 4,
        md: 6,
        lg: 8,
        xl: 10,
        style: {
          textAlign: 'center',
          background: '#eee',
          padding: '10px 0',
        },
      },
      children: 'Col',
    },
  ],
}
