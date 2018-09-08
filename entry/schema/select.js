export default {
  node: 'div',
  children: [
    {
      node: 'Select',
      props: {
        mode: 'multiple',
        style: {
          width: '50%',
        },
        placeholder: 'select',
        defaultValue: ['a', 'b'],
      },
      children: [
        {
          node: 'Select.Option',
          props: { value: 'a' },
          children: 'a',
        },
        {
          node: 'Select.Option',
          props: { value: 'b' },
          children: 'b',
        },
        {
          node: 'Select.Option',
          props: { value: 'c' },
          children: 'c',
        },
      ],
    },
    {
      node: 'Select',
      props: {
        defaultValue: 'lucy',
        style: {
          width: 200,
          display: 'block',
        },
      },
      children: [
        {
          node: 'Select.OptGroup',
          props: { label: 'Manager' },
          children: [
            {
              node: 'Select.Option',
              props: { value: 'jack' },
              children: 'Jack',
            },
            {
              node: 'Select.Option',
              props: { value: 'luck' },
              children: 'Luck',
            },
          ],
        },
        {
          node: 'Select.OptGroup',
          props: { label: 'Engineer' },
          children: [
            {
              node: 'Select.Option',
              props: { value: 'aksdj4' },
              children: 'Aksdj4',
            },
          ],
        },
      ],
    },
  ],
}
