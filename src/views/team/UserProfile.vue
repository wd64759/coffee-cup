<template>
  <div>
    user profile - {{$route.params.id}}
    <input type="button" value="TT" @click="getData()" />
    <el-table :data="mydat" style="width: 100%">
      <el-table-column prop="updated" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="status" label="Status"></el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
export default {
  name: 'UserProfile',
  data() {
      return {
          mydat: [],
      };
  },
  methods: {
    getData() {
      this.axios({
        method: 'get',
        url: 'http://localhost:8102/data.json',
      })
        .then((resp: any) => {
          this.mydat = resp.data;
        })
        .catch((err: any) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="sass">

</style>