<template>
  <view class="login-form-group">
    <input v-model="modal" :type="inputType" class="login-form-input" :placeholder="placeholder" maxlength="100">
    <view v-if="type === 'password'" class="secrets-btn" @click="showPassword = !showPassword">
      <up-icon :name="showPassword ? 'eye-off' : 'eye-fill'" color="#999" size="20"></up-icon>
    </view>
  </view>
</template>

<script setup>
import { ref, computed } from "vue"

const props = defineProps({
  placeholder: {
    type: String,
    default: ''
  },
  type: {
    type: String, // password | text
    default: 'text'
  }
})

const modal = defineModel();
modal.value = ''

// 隐藏密码
const showPassword = ref(false)

// real input type
const inputType = computed(() => {
  const type = props.type;
  if(props.type === 'password' && showPassword.value) {
    return 'text'
  };
  return type
})

</script>

<style lang="scss">
@import './form_group.scss';
</style>