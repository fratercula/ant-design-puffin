export default {
  node: 'div',
  children: [
    {
      node: 'Progress',
      props: {
        percent: 30,
      },
    },
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
        percent: 100,
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
        size: 'small',
        percent: 30,
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
        type: 'circle',
      },
    },
    {
      node: 'Progress',
      props: {
        percent: 70,
        type: 'circle',
        status: 'exception',
      },
    },
    {
      node: 'Progress',
      props: {
        percent: 30,
        type: 'dashboard',
      },
    },
    {
      node: 'Progress',
      props: {
        percent: 30,
        type: 'circle',
        strokeLinecap: 'square',
      },
    },
  ],
}
