<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <el-container>
      <el-aside width="200px">
        <el-menu :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-circle-plus-outline"></i>Teams</template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <router-link to="/user/profile/1">Profile</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link to="/user/list">User List</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-circle-plus-outline"></i>Projects</template>
            <el-menu-item-group>
              <el-menu-item index="2-1">Item-1</el-menu-item>
              <el-menu-item index="2-2">Item-2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>          
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right: front-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>search</el-dropdown-item>
              <el-dropdown-item>new</el-dropdown-item>
              <el-dropdown-item>delete</el-dropdown-item>
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
      users: [
            {name: 'Tom', date: '2018-01-20', address: 'Shanghai'},
            {name: 'John', date: '2018-01-20', address: 'Shanghai'},
            {name: 'Sindy', date: '2018-01-20', address: 'Shanghai'},
          ],
    };
  },
};
</script>
