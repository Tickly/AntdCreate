import TableOld from './table-old.vue';
import { UseColumns } from 'antdv-helper';

export default TableOld.extend({
  data() {
    return {
      columns: UseColumns([
        '#',
        {
          type: 'link',
          key: 'name',
          dataIndex: 'name',
          title: '姓名',
        },
        {
          key: 'age',
          title: '年龄',
          dataIndex: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags',
          scopedSlots: { customRender: 'tags' },
        },
        {
          type: 'date',
          title: 'createdAt',
          dataIndex: 'createdAt',
        },
      ]),
    };
  },
});
