export default {
  node: 'div',
  children: [
    {
      node: 'Alert',
      props: {
        type: 'success',
        message: 'Description Error Description Error',
      },
    },
    {
      node: 'Alert',
      props: {
        type: 'error',
        closable: true,
        message: 'Description Error Description Error',
      },
    },
    {
      node: 'Alert',
      props: {
        type: 'success',
        showIcon: true,
        message: 'Description Error Description Error',
      },
    },
    {
      node: 'Alert',
      props: {
        style: {
          margin: '20px 0',
        },
        type: 'warning',
        banner: true,
        message: 'Description Error Description Error',
      },
    },
    {
      node: 'Alert',
      props: {
        type: 'success',
        message: 'Description Error',
        description: 'Success Description Success Description Success Description',
      },
    },
  ],
}
