<template>
  <a-table :columns="columns" :data-source="data" :pagination="false">
    <span slot="serial" slot-scope="text, row, i">{{ i + 1 }}</span>
    <a slot="name" slot-scope="text">{{ text }}</a>
    <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
    <div slot="tags" slot-scope="status">
      <online-status-tag :status="status" />
    </div>
    <span slot="action" slot-scope="text, record">
      <a>Invite 一 {{ record.name }}</a>
      <a-divider type="vertical" />
      <a>Delete</a>
      <a-divider type="vertical" />
      <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
    </span>
  </a-table>
</template>
<script lang="ts">
import moment from 'moment';
import numeral from 'numeral';
import Vue, { VNode } from 'vue';

const OnlineStatusTag = Vue.extend({
  props: {
    status: {
      type: String,
    },
  },
  computed: {
    tagColor(): string {
      const cm = {
        online: 'blue',
        offline: 'red',
        busy: 'purple',
      } as Record<string, string>;

      return cm[this.status];
    },
  },
  render(h): VNode {
    return h(
      'a-tag',
      {
        props: {
          color: this.tagColor,
        },
      },
      this.status
    );
  },
});

export default Vue.extend({
  components: {
    OnlineStatusTag,
  },
  data() {
    return {
      data: [
        {
          key: '1',
          name: '张三',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
          createdAt: 1659080644370,
          onlineStatus: 'online',
          followers: 3,
        },
        {
          key: '2',
          name: '李四',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
          createdAt: 1659080644370,
          onlineStatus: 'busy',
          followers: 3456,
        },
        {
          key: '3',
          name: '王二麻子',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
          createdAt: 1659080644370,
          onlineStatus: 'offline',
          followers: 1000333,
        },
      ],
      columns: [
        {
          title: '#',
          scopedSlots: { customRender: 'serial' },
        },
        {
          key: 'name',
          dataIndex: 'name',
          title: '姓名',
          scopedSlots: { customRender: 'name' },
        },
        {
          title: '在线状态',
          dataIndex: 'onlineStatus',
          scopedSlots: { customRender: 'tags' },
        },
        {
          title: '粉丝',
          dataIndex: 'followers',
          customRender: (t: number) => numeral(t).format('0,0'),
        },
        {
          title: '注册时间',
          dataIndex: 'createdAt',
          customRender: (t: number) => moment(t).format('YYYY-MM-DD HH:mm:ss'),
        },
        {
          title: '家庭住址',
          dataIndex: 'address',
          key: 'address',
        },
      ],
    };
  },
});
</script>
