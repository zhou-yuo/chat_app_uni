<template>
  <view class="message-list">
    <template v-for="item in list" :key="item.id">
      <view class="message-list-item flex-box flex-mid flex-between">
        <image class="item-avatar" src="/static/images/default_avatar.png" />
        <view class="item-info flex-1-hidden">
          <view class="item-main-info flex-box flex-mid flex-between">
            <view class="item-nickname text-overflow flex-1-hidden">昵称</view>
            <view class="item-date">2024/10/01</view>
          </view>
          <view class="item-sub-info flex-box flex-mid flex-between">
            <view class="item-message text-overflow flex-1-hidden">消息</view>
            <view class="item-mute-icon mdi--bell-off-outline"></view>
          </view>
        </view>
      </view>
    </template>
    
  </view>
</template>

<script setup>
import { ref } from "vue"

defineOptions({
  name: 'MessageList'
})

defineProps({
  list: {
    type: Array,
    default: () => []
  }
})

</script>

<style lang="scss">
@import './message_list.scss';
</style>