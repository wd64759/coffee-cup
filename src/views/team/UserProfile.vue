<template>
  <div>
    <el-row class="search-bar">
      <el-col>
      <el-input v-model="stext" style="width: 200px; " placeholder="name, soeid .." size="small" maxlength="20" show-word-limit autofocus="true">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10">
        <el-table :data="mydat" style="width: 90%">
          <template slot="empty">
            <div>No Data</div>
          </template>          
          <el-table-column prop="name" label="Name"></el-table-column>
          <el-table-column prop="project" label="Project"></el-table-column>
        </el-table>
      </el-col>
      <el-col :span="14">
        <el-collapse>
          <el-collapse-item title="Company Profile" name="1">
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          </el-collapse-item>
        </el-collapse>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
export default {
  name: 'UserProfile',
  data() {
      return {
          mydat: [],
          stext: '',
      };
  },
  methods: {
    getData() {
      this.axios({
        method: 'get',
        url: 'http://localhost:8102/users.json',
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