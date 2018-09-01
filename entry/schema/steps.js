export default {
  node: 'Steps',
  children: [
    {
      node: 'Steps.Step',
      props: {
        status: 'finish',
        title: 'login',
        icon: {
          node: 'Icon',
          props: {
            type: 'user',
          },
        },
      },
    },
    {
      node: 'Steps.Step',
      props: {
        status: 'finish',
        title: 'Verification',
        icon: {
          node: 'Icon',
          props: {
            type: 'solution',
          },
        },
      },
    },
    {
      node: 'Steps.Step',
      props: {
        status: 'loading',
        title: 'Pay',
        icon: {
          node: 'Icon',
          props: {
            type: 'loading',
          },
        },
      },
    },
    {
      node: 'Steps.Step',
      props: {
        status: 'waiting',
        title: 'Done',
        icon: {
          node: 'Icon',
          props: {
            type: 'smile-o',
          },
        },
      },
    },
  ],
}
