<template>
  <view class="login-index">
    <view class="page-body">
      <view class="logo">

      </view>
      <view class="welcome-title">Wellcom chat</view>
      <view class="form-container">
        <FormGroup v-model="form.account" placeholder="请输入手机号" />
        <FormGroup type="password" v-model="form.password" placeholder="请输入密码" />
        <FormGroup type="password" v-model="form.confirmPassword" placeholder="请确认密码" />
      </view>
      <view class="form-btns">
        <view class="form-btn is-primary" @click="handleRegist">注册</view>
        <view class="form-btn" @click="handleLogin">登录</view>
      </view>
    </view>

  </view>
</template>

<script setup>
import { ref, reactive } from 'vue';
import FormGroup from './components/form_group/form_group.vue';
import useLoginNavigate from './hooks/navigate';

const { toLogin, toRegist, toForgetPassword } = useLoginNavigate()

defineOptions({
  name: 'forgetPassword'
})

// form
const form = ref({
  account: '',
  password: '',
  confirmPassword: ''
})

/**
 * 登录
 */
 const handleLogin = () =>{
  console.log('form.value',form.value);
  toLogin()
}

/**
 * 注册
 */
 const handleRegist = () =>{
  // toRegist()
}

</script>

<style lang="scss">
@import './style/login.scss';
</style>