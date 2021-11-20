<!-- 活动详细 -->
<template>
	<view>
		<view class="container">
			<view class="top-time">
				<view class="top-time-title">活动时间</view>
				<view class="top-time-data">{{ startData }}至{{ endData }}</view>
			</view>
			<view class="mid-rule">
				<view class="mid-rule-title">活动规则</view>
				<view class="mid-rule-data" v-for="(item, index) in rules" :key="index">{{ item.no }}.{{ item.info }}</view>
			</view>
			<view class="down-introduce">
				<view class="down-introduce-title">活动介绍</view>
				<view class="down-introduce-data">
					<textarea class="down-introduce-data-textarea" :value="textareaText" placeholder="" />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			startData: '2020-04-13',
			endData: '2020-05-13',
			rules: [
				{
					no: '1',
					info: '每位用户仅可投一票'
				},
				{
					no: '2',
					info: '每位用户仅可助力一次'
				},
				{
					no: '3',
					info: '用户可报名'
				}
			],
			textareaText:
				'活动是由共同目的联合起来并完成一定社会职能的动作的总和。活动由目的、动机、动作和共同性构成，具有完整的结构系统。苏联心理学家从20年代起就对活动进行了一系列研究。活动是由共同目的联合起来并完成一定社会职能的动作的总和。',
				
		}
	},
	methods: {}
}
</script>

<style lang="less">
@import url('vote-info-detail.less');
</style>
