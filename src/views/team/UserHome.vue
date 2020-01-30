<template>
    <div>
        <el-row>
            <el-tabs v-model="usersProfile" type="card" @edit="handleTabsEdit">
                <el-tab-pane
                    :key="item.name"
                    v-for="(item) in usersProfile"
                    :label="item.title"
                    :name="item.name"
                    :closable="item.closable"
                >
                <div id="userPanel">test</div>
                </el-tab-pane>
            </el-tabs>        
        </el-row>   
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import UserList from 'UserList.vue';
export default ({
    name: 'UserHome',
    data() {
        return {
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
        handleTabsEdit(targetName: string, action: any) {
            console.log(targetName, action);
        },
        insert() {
            console.log('>> insert()');
        },
    },
    created() {
        console.log('>>> go go ');
        // this.$router.push('/user/1');
    },
});
</script>

<style lang="scss">

</style>