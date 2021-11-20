<!-- 帮助中心-->
<template>
	<view>
		<view class="container">
			<van-cell-group title="常见问题">
				<view v-for="(item, index) in helpInfos" :key="index">
					<van-cell is-link :title="item.name" link-type="navigateTo" :url="item.url" /></view>
			</van-cell-group>
			<van-cell-group title=" ">
				<van-cell title="检测更新" link-type="switchTab" url="#" />
				<van-cell title="联系我们" link-type="switchTab" url="#" />
			</van-cell-group>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			helpInfos: [
				{
					name: '1.如何设置活动标题？',
					url: '/pages/homeChildren/helpCenterInfo/helpCenterInfo'
				},
				{
					name: '2.什么是主办方介绍？',
					url: '/pages/homeChildren/helpCenterInfo/helpCenterInfo'
				},
				{
					name: '3.什么是投票结果？',
					url: '/pages/homeChildren/helpCenterInfo/helpCenterInfo'
				},
				{
					name: '4.如何联系主办方报名？',
					url: '/pages/homeChildren/helpCenterInfo/helpCenterInfo'
				},
				{
					name: '5.什么是投票结果？',
					url: '/pages/homeChildren/helpCenterInfo/helpCenterInfo'
				},
				{
					name: '6.一个人可以投票几次，助力几次',
					url: '/pages/homeChildren/helpCenterInfo/helpCenterInfo'
				},
				{
					name: '7.什么是票数显示？',
					url: '/pages/homeChildren/helpCenterInfo/helpCenterInfo'
				},
				{
					name: '8.如何创建一个投票？',
					url: '/pages/homeChildren/helpCenterInfo/helpCenterInfo'
				}
			]
		}
	}
}
</script>

<style></style>
