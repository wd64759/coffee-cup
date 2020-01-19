<template>
  <div class="home">
    <!-- <img alt='Vue logo' src='../assets/logo.png'> -->
    <el-container>
      <el-header>
        <el-menu
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu v-for="mg in menuGrp" :index="mg.id" :key="mg.id">
            <template slot="title">{{ mg.name }}</template>
            <el-menu-item v-for="mt in mg.subitems" :key="mt.id" :index="mt.id">
              <el-submenu :index="'menu ' + mt.id" v-if="mt.subitems">
                <template slot="title">{{ mt.name }}</template>
                <el-menu-item
                  v-for="st in mt.subitems"
                  :key="st.id"
                  :index="st.id"
                >{{ st.name }}</el-menu-item>
              </el-submenu>
              <span v-else>{{ mt.name }}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-header>
      <el-container>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue';
import router from '../router';

export default {
  props: ['username'],
  name: 'home',
  components: {
    Home,
  },
  data() {
    return {
      menuGrp: [],
      menuLinks: new Map(),
      tsearch: '',
      activeName: 'second',
    };
  },
  methods: {
    handleSelect(routerID) {
      const navLink = this.menuLinks.get(routerID);
      if (navLink) {
        this.$router.push(navLink);
      }
    },
  },
  created() {
    this.axios({
      method: 'get',
      url: 'http://localhost:8102/left_menu.json',
    })
      .then((resp) => {
        function buildMenu(menuconfig, pid, menuLinks) {
          const prefix = pid !== '' ? pid + '-' : '';
          menuconfig.forEach((mitem, idx) => {
            mitem.id = prefix + idx;
            if (mitem.hasOwnProperty('link')) {
              menuLinks.set(mitem.id, mitem.link);
            }
            if (mitem.hasOwnProperty('subitems')) {
              buildMenu(mitem.subitems, mitem.id, menuLinks);
            }
          });
        }
        this.menuGrp = resp.data;
        buildMenu(this.menuGrp, '', this.menuLinks);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
