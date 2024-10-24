<template>
	<view class="message-index">
		<PageHeader title="消息" >
			<template #left>
				<text></text>
			</template>
			<template #right>
				<up-icon name="search" size="28" class="m-r-20"></up-icon>
				<DropdownMenu
					:list="dropdownMenuItems"
				>
					<up-icon name="plus-circle" size="24"></up-icon>
				</DropdownMenu>
			</template>
		</PageHeader>


	</view>
</template>

<script setup>
import { ref, reactive } from "vue"
import DropdownMenu from '@/components/dropdown_menu/dropdown_menu';

// dropdownMenuItems
const dropdownMenuItems = reactive([{
  id: 'groupChat',
	iconname: 'grid-fill',
  label: '发起群聊'
}, {
  id: 'addFriend',
	iconname: 'plus-people-fill',
  label: '添加好友'
}, {
  id: 'scan',
	iconname: 'scan',
  label: '扫一扫'
}])

</script>

<style lang="scss">
@import './style/message.scss';
</style>