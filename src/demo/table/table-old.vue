<template>
  <a-table :columns="columns" :data-source="data" :pagination="false">
    <span slot="serial" slot-scope="text, row, i">{{ i + 1 }}</span>
    <a slot="name" slot-scope="text">{{ text }}</a>
    <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
    <span slot="tags" slot-scope="tags">
      <a-tag
        v-for="tag in tags"
        :key="tag"
        :color="
          tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'
        "
      >
        {{ tag.toUpperCase() }}
      </a-tag>
    </span>
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
import Vue from 'vue';
const columns = [
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
    title: 'createdAt',
    dataIndex: 'createdAt',
  },
];

const data = [
  {
    key: '1',
    name: '张三',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
    createdAt: 1659080644370,
  },
  {
    key: '2',
    name: '李四',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
    createdAt: 1659080644370,
  },
  {
    key: '3',
    name: '王二麻子',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    createdAt: 1659080644370,
  },
];
export default Vue.extend({
  data() {
    return {
      data,
      columns,
    };
  },
});
</script>
