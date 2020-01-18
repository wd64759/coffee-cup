<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <el-container>
      <el-aside width="200px">
        <el-menu v-for="(mg,mi) in menuGrp" :key="mg.gname" :default-openeds="mg.expand ? [''+ mi]:[]">
          <el-submenu :index="''+ mi">
            <template slot="title"><i class="el-icon-circle-plus-outline"></i>{{ mg.gname }}</template>
            <el-menu-item v-for="(mt, i) in mg.subitems" :key="mt.id" :index="''+ i">
              <router-link :to="mt.link">{{ mt.name }}</router-link>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; front-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>Logout</el-dropdown-item>
              <el-dropdown-item>Setting</el-dropdown-item>
            </el-dropdown-menu>
            <span>{{username}}</span>
          </el-dropdown>
        </el-header>

        <el-main>
          <router-view />
        </el-main>        
      </el-container>
    </el-container>
  </div>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue';

export default {
  props: ['username'],
  name: 'home',
  components: {
    Home,
  },
  data() {
    return {
      menuGrp: [],
    };
  },
  created() {
    this.axios({
        method: 'get',
        url: 'http://localhost:8102/left_menu.json',
      })
        .then((resp) => {
          this.menuGrp = resp.data;
        })
        .catch((err) => {
          console.log(err);
        });
  },
};
</script>
