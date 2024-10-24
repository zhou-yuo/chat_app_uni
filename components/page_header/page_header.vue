<template>
  <view class="page-header">
    <up-navbar
      :title="title"
      :autoBack="true"
      bgColor="#ededed"
    >
    <template #left>
      <slot name="left"></slot>
    </template>
    <template #center>
      <slot name="center"></slot>
    </template>
    <template #right>
      <slot name="right"></slot>
    </template>
    </up-navbar>
  </view>
</template>

<script setup>
import { ref } from "vue"

const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})

</script>

<style lang="scss">
  @import './page_header.scss';
</style>