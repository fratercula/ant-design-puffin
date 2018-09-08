export default {
  node: 'div',
  children: [
    {
      node: 'Checkbox.Group',
      props: {
        options: ['Apple', 'Pear', 'Orange'],
      },
    },
    {
      node: 'Checkbox',
      props: {
        style: {
          display: 'block',
        },
      },
      children: 'checkbox',
    },
  ],
}
