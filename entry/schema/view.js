export default {
  node: 'div',
  props: {
    style: {
      padding: 60,
      background: '#f7f7f7',
    },
  },
  children: {
    node: 'View',
    props: {
      header: {
        node: 'div',
        children: 'Card Title',
      },
      cells: [
        {
          label: [
            '某某数据',
            {
              node: 'Tooltip',
              props: {
                title: 'Prompt Text',
              },
              children: {
                node: 'Icon',
                props: {
                  style: {
                    margin: '0 3px',
                  },
                  type: 'question-circle',
                },
              },
            },
          ],
          value: '32943898021309809423',
          style: {
            color: 'grey',
          },
          span: 8,
          offset: 8,
        },
        {
          label: 'User Name',
          value: [
            {
              node: 'Progress',
              props: {
                style: {
                  width: 200,
                },
                percent: 50,
                status: 'active',
              },
            },
          ],
          span: 8,
        },
        {
          label: '这个是',
          value: '占小部分的',
          span: 4,
        },
        {
          label: '负责人',
          value: {
            node: 'Alert',
            props: {
              type: 'warning',
              showIcon: true,
              message: 'Error span as Description',
              description: 'Error Description Error Description Error Description Error Description Error Description Error Description',
            },
          },
          span: 20,
        },
        {
          span: 24,
          style: {
            margin: '10px 0',
            borderTop: '1px solid #eee',
          },
        },
        {
          label: 'Timeline',
          span: 10,
          value: {
            node: 'Timeline',
            props: {
              style: {
                marginTop: 5,
              },
            },
            children: [
              {
                node: 'Timeline.Item',
                children: 'Create a services site 2015-09-01',
              },
              {
                node: 'Timeline.Item',
                children: 'Create a services site 2015-09-01',
              },
              {
                node: 'Timeline.Item',
                children: 'Create a services site 2015-09-01',
              },
              {
                node: 'Timeline.Item',
                children: 'Create a services site 2015-09-01',
              },
            ],
          },
        },
      ],
    },
  },
}
