<template>
  <div>
    <el-row class="search-bar">
      <el-col>
      <el-input v-model="stext" style="width: 200px; " placeholder="name, soeid .." size="small" maxlength="20" show-word-limit autofocus="true">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
      <el-switch style="padding-left:20px"
        v-model="staffFlags.showEmployee"
        active-color="#13ce66"
        active-text="Employee"
        inactive-color="#ff4949">
      </el-switch>
      <el-switch style="padding-left:20px"
        v-model="staffFlags.showVendor"
        active-color="#13ce66"
        active-text="Vendor"
        inactive-color="#ff4949">
      </el-switch>
        <el-switch style="padding-left:20px"
        v-model="staffFlags.showAnalyst"
        active-color="#13ce66"
        active-text="Analyst"
        inactive-color="#ff4949">
      </el-switch>
      </el-col>
    </el-row>
    <el-row>
      <el-table 
      :data="mydat" 
      stripe
      style="width: 90%">
        <template slot="empty">
          <div>No Data</div>
        </template>          
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="Portrait">
          <div class="block" slot-scope="scope">
            <el-avatar shape="circle" :size="50" :src="scope.row.portraitUrl" :fit="fit"></el-avatar>
          </div>
        </el-table-column>
        <el-table-column
          width="100"
          :filters="[{ text: 'OriginationCentral', value: 'OC' }, { text: 'ClientPortal', value: 'CP' }]"
          :filter-method="filterTeam"
          filter-placement="bottom-end"
          prop="project" 
          label="Team">
        </el-table-column>
        <el-table-column prop="id" label="EmployeeID"></el-table-column>
        <el-table-column sortable prop="name" label="Name"></el-table-column>
        <el-table-column sortable prop="level" label="Level"></el-table-column>
        <el-table-column sortable prop="joined" label="Onboarding"></el-table-column>
        <el-table-column prop="role" label="Role"></el-table-column>
        <el-table-column prop="updated" label="Updated"></el-table-column>
        <el-table-column prop="status" label="Status"></el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script lang="ts">
export default {
  name: 'UserList',
  data() {
      const staffFlags = {
        showEmployee: true,
        showVendor: true,
        showAnalyst: true,
      };
      return {
          mydat: [],
          stext: '',
          staffFlags,
          usersProfile: [
            {
                title: 'ALL',
                name: 'all',
                closable: false,
            },
          ],
      };
  },
  methods: {
    filterTeam(value: string, row: any) {
      return row.project === value;
    },
  },
  created() {
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
};
</script>

<style lang="scss" scoped>
>>> .el-divider {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>