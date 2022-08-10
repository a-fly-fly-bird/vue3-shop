<template>
  <div class="login_wrap">
    <div class="form_wrap">
      <el-form>
        <el-form
            ref="formRef"
            :model="data.loginData"
            class="demo-dynamic"
            label-width="120px"
        >
          <el-form-item
              :rules="[
                {
                  required: true,
                  message: '请输入用户名',
                  trigger: 'blur',
                }
               ]"
              label="用户名"
              prop="username"
          >
            <el-input v-model="data.loginData.username"/>
          </el-form-item>
          <el-form-item
              :rules="[
                {
                  required: true,
                  message: '请输入密码',
                  trigger: 'blur',
                }
               ]"
              label="密码"
              prop="password"
          >
            <el-input v-model="data.loginData.password" type="password"/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(formRef)">Submit</el-button>
            <el-button @click="addDomain">New domain</el-button>
          </el-form-item>
        </el-form>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';

// eslint-disable-next-line no-unused-vars
const data = ref({
  loginData: {
    username: '',
    password: ''
  }
})
</script>

<style scoped>
.login_wrap {
  width: 100%;
  height: 100vh;
  background: lightgray;
  position: relative;
}

.form_wrap {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: coral;
  padding: 30px 50px;
  border-radius: 5px;
}
</style>