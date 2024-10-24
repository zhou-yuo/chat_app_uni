<template>
  <view class="dropdown-menu">
    <view class="dropdown-menu-handle" ref="target" @click="handleToggle">
      <slot></slot>
    </view>
    <view class="dropdown-menu-content">
      <up-transition :show="show">
        <view class="dropdown-menu-list">
          <template v-for="item in list" :key="item.id">
            <view class="dropdown-menu-item">
              <view class="dropdown-menu-item-icon">
                <up-icon :name="item.iconname" color="#fff" size="24"></up-icon>
              </view>
              <view class="dropdown-menu-item-label">{{ item.label }}</view>
            </view>
          </template>
        </view>
      </up-transition>
    </view>
  </view>
</template>

<script setup>
import { ref } from "vue"
import { onClickOutside } from '@vueuse/core'

defineOptions({
  name: 'DropdownMenu'
})

// onClickOutside hide menu
const target = ref(null)
onClickOutside(target, () => {
  show.value = false
})

// props
defineProps({
  list: {
    type: Array,
    default: () => []
  }
})

// show
const show = ref(false)

// handleToggle
const handleToggle = () => {
  show.value = !show.value
}

</script>

<style lang="scss">
@import './dropdown_menu.scss';
</style>