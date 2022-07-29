<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <div class="container">
      <div class="row">
        <div class="old">
          <table-old />
        </div>
        <div class="new">
          <table-new />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TableOld from '@/demo/table/table-old.vue';
import TableNew from '@/demo/table/table-new';

export default Vue.extend({
  name: 'App',
  components: {
    TableOld,
    TableNew,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.row {
  display: flex;
  gap: 4px;
  background-color: lightgray;
}

.old,
.new {
  width: 50%;
  background-color: white;
}
</style>
