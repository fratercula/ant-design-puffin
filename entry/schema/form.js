export default {
  node: 'Form',
  children: {
    node: 'Form.Item',
    props: {
      label: 'Error',
      validateStatus: 'validating',
      hasFeedback: true,
      help: 'Should be combination of numbers & alphabets',
    },
    children: {
      node: 'Input',
      props: {
        placeholder: 'unavailable',
      },
    },
  },
}
