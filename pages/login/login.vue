<template>
  <view class="login-index">
    <view class="page-body">
      <view class="logo">

      </view>
      <view class="welcome-title">Wellcom chat</view>
      <view class="form-container">
        <FormGroup v-model="form.account" placeholder="请输入账号" />
        <FormGroup type="password" v-model="form.password" placeholder="请输入密码" />
      </view>
      <view class="form-btns">
        <view class="form-btn is-primary" @click="handleLogin">登录</view>
        <view class="form-btn" @click="handleRegist">注册</view>
        <view class="form-btn" @click="forgetPassword">忘记密码</view>
      </view>
    </view>

    <view class="page-footer">
      <up-checkbox
        label="同意用户协议与隐私条款"
        name="agree"
        shape="circle"
        usedAlone
        v-model:checked="agreementChecked"
      >
        <template #label>
          <view>
            <text>阅读并同意</text>
            <text class="c-primary" @click.stop>《用户协议》</text>
            <text>和</text>
            <text class="c-primary" @click.stop>《隐私政策》</text>
          </view>
        </template>
      </up-checkbox>
    </view>
    
  </view>
</template>

<script setup>
import { ref, reactive } from 'vue';
import FormGroup from './components/form_group/form_group.vue';
import useLoginNavigate from './hooks/navigate';

const { toRegist, toForgetPassword } = useLoginNavigate()

const Toast = (title) => {
  uni.showToast({
    title,
    icon: 'none'
  })
}

defineOptions({
  name: 'login'
})

// form
const form = ref({
  account: '',
  password: ''
})

// 协议 checkbox
const agreementChecked = ref(false)

/**
 * 登录
 */
const handleLogin = () =>{
  console.log('form.value',form.value);
  if(!form.value.account) {
    return Toast('请输入账号')
  }
  if(!form.value.password) {
    return Toast('请输入密码')
  }
  uni.navigateTo({
    url: '/pages/index/index'
  })
}

/**
 * 注册
 */
 const handleRegist = () =>{
  toRegist()
}

/**
 * 忘记密码
 */
const forgetPassword = () => {
  toForgetPassword()
}

</script>

<style lang="scss">
@import './style/login.scss';
</style>