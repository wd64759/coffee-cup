<template>
  <div class='home'>
    <!-- <img alt='Vue logo' src='../assets/logo.png'> -->
    <el-container>
      <el-header style="height: 50px">
        <el-row class="search-bar">
          <el-col :span="1" style="text-align: left;padding-top: 10px;">
            <el-dropdown>
              <i class='el-icon-setting'></i>
              <el-dropdown-menu slot='dropdown'>
                <el-dropdown-item>Logout</el-dropdown-item>
                <el-dropdown-item>Setting</el-dropdown-item>
              </el-dropdown-menu>
              <span>{{username}}</span>
            </el-dropdown>
          </el-col>          
          <el-col :span="23" style="padding-left:12px;">
            <template>
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="Events" name="first"></el-tab-pane>
                <el-tab-pane label="Follow-up" name="second"></el-tab-pane>
              </el-tabs>
            </template>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width='200px'>
          <el-menu v-for='(mg,mi) in menuGrp' :key='mg.gname' :default-openeds="mg.expand ? [''+ mi]:[]">
            <el-submenu :index="''+ mi">
              <template slot='title'>
                <i class='el-icon-circle-plus-outline'></i>
                {{ mg.gname }}
              </template>
              <el-menu-item v-for="(mt, i) in mg.subitems" :key='mt.id' :index="''+ i">
                <router-link :to='mt.link'>{{ mt.name }}</router-link>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <el-row style="padding-bottom: 8px">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }">Talents</el-breadcrumb-item>
              <el-breadcrumb-item><a href="/">Profile</a></el-breadcrumb-item>
            </el-breadcrumb>
          </el-row>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss">
.el-tabs__nav-wrap {
  background-color: white;
}
.el-submenu__title {
  font-size: 16px;
}
</style>

.el-tabs__nav-wrap::after {
  background-color: white;
}
/* .el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
} */
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
      tsearch: '',
      activeName: 'second',
    };
  },
  methods: {
    handleClick(tab, event) {
        console.log(tab, event);
    },
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
