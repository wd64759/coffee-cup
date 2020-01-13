<template>
    <div>
        <el-form ref="login_form" :model="login_form" :rules="rules" label-width="80px" class="login-box">
            <h3 class="login-title">Welcome to Coffee Cup</h3>
            <el-form-item label="Name" prop="username">
                <el-input type="text" v-model="login_form.username" placeholder="user name"></el-input>
            </el-form-item>
            <el-form-item label="Passcode" prop="passcode">
                <el-input type="password" v-model="login_form.passcode" placeholder="pass code"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit('login_form')">Login</el-button>
            </el-form-item>
        </el-form>
    </div>
</template> 
<script>
export default {
    name: 'login_form',
    data() {
        return {
            login_form: {
                username: '',
                passcode: '',
            },
            rules: {
                username: [
                    { required: true, message: 'please enter username', trigger: 'blur' },
                ],
                passcode: [
                    { required: true, message: 'please enter passcode', trigger: 'blur' },
                ],
            },
        };
    },
    methods: {
        onSubmit(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                console.log('>>>' + this.login_form.username);
                // this.$router.push('/home');
                this.$router.push({name: 'home', params: {username: this.login_form.username}});
            } else {
                this.$message({
                    message: 'invalid user name or passcode',
                    type: 'warning',
                });
                return false;
            }
            });
        },
    },
};
</script>
<style lang="scss" scoped>
.login-box{
    width : 300px;
    margin: 180px auto;
    border: 1px solid #DCDFE6;
    padding: 25px;
    border-radius: 5px;
    box-shadow: 0 0 25px #DCDFE6;
}

.login-title {
    text-align: center;
}
</style>