export default {
  node: 'div',
  children: [
    {
      node: 'Progress',
      props: {
        percent: 50,
        status: 'active',
      },
    },
    {
      node: 'Progress',
      props: {
        percent: 70,
        status: 'exception',
      },
    },
    {
      node: 'Progress',
      props: {
        percent: 50,
        showInfo: false,
      },
    },
    {
      node: 'Progress',
      props: {
        percent: 30,
        type: 'circle',
      },
    },
    {
      node: 'Progress',
      props: {
        percent: 30,
        type: 'dashboard',
      },
    },
  ],
}
