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

		<view class="page-main">
			<MessageList 
				:list="messageData"
			/>
		</view>

	</view>
</template>

<script setup>
import { ref, reactive } from "vue"
import { onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app';
import DropdownMenu from '@/components/dropdown_menu/dropdown_menu';
import MessageList from '@/components/message_list/message_list';

defineOptions({
  name: 'Message'
})

const Toast = (title) => {
	uni.showToast({
		title,
		icon: 'none'
	})
}

// dropdownMenuItems
const dropdownMenuItems = reactive([{
  id: 'groupChat',
	iconname: 'chat',
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

// message list data
const messageData = ref([{
	id: 1
}, {
	id: 2
}, {
	id: 3
}])

const loading = ref(false);
const list = ref([])
const page = ref({
	current: 1,
	limit: 20,
	total: 0
})

// initList
const initList = () => {
	page.value.current = 1;
	getList();
}

// getList
const getList = () => {
	if (loading.value) return;
	this.loading = true;
	const formData = {
		page: page.value.current,
		limit: page.value.limit,
	}
	
	productList(formData)
		.then((res) => {
			console.log("🚀 ~ getList ~ res:", res);
			const data = res.data || {};
			let list = data.list || [];
			if(formData.page == 1) {
				list.value = list
			} else {
				list.value = list.value.concat(list);
			}
			page.value.total = data.count || 0;
			loading.value = false;
			uni.stopPullDownRefresh()
		})
		.catch((err) => {
			console.error(err);
			loading.value = false;
			uni.stopPullDownRefresh()
		});
}

// onPullDownRefresh
onPullDownRefresh(() => {
	initList()
})

// onReachBottom
onReachBottom(() => {
	if (!loading.value && list.value.length < page.value.total) {
		page.value.current += 1;
		getList();
	}
})

</script>

<style lang="scss">
@import './style/message.scss';
</style>