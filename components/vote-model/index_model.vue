<!-- 投票模板组件 -->
<template>
	<!-- 		<view class="main-icon">
			<view class="van-grid-icon">
				<van-grid column-num="2" border="false">
					<van-grid-item use-slot v-for="(imgitem, index) in images" :key="index">
					<van-grid-item use-slot>
						<view class="pic-all-image"><image style="width: 338rpx; height: 262rpx;" :src="imgitem.item"></image></view>
						<view class="box-all-top">
							<van-row class="box-main-text">
								<van-col span="24">{{ imgitem.name }}</van-col>
							</van-row>
						</view>
						<view class="box-all-down">
							<van-row class="box-part-text">
								<van-col span="10" offset="14"><van-button plain size="small" type="info">使用模板</van-button></van-col>
							</van-row>
						</view>
					</van-grid-item>
				</van-grid>
			</view> -->
	<view class="container">
		<view class="main-grid">
			<view class="pic-all-image"><image style="width: 338rpx; height: 262rpx;" :src="imgItem.item"></image></view>
			<view class="box-all-top">
				<van-row class="box-main-text">
					<van-col span="24">{{ imgItem.name }}</van-col>
				</van-row>
			</view>
			<view class="box-all-down">
				<van-row class="box-part-text">
					<van-col span="10" offset="14">
						<navigator :url="imgItem.url"><van-button plain size="small" type="info">使用模板</van-button></navigator>
					</van-col>
				</van-row>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'vote-model',
	props: {
		imgItem: {
			type: Object
		}
	},
	data() {
		return {}
	}
}
</script>

<style lang="less">
@import url('index_model.less');
</style>
