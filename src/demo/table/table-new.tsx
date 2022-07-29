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
          title: '在线状态',
          dataIndex: 'onlineStatus',
          scopedSlots: { customRender: 'tags' },
        },
        {
          type: 'number',
          title: '粉丝',
          dataIndex: 'followers',
        },
        {
          type: 'date',
          title: '注册时间',
          dataIndex: 'createdAt',
        },
        {
          title: '家庭住址',
          dataIndex: 'address',
          key: 'address',
        },
      ]),
    };
  },
});
