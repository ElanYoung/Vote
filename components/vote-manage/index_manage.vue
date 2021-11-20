<!-- 投片管理组件 -->
<template>
	<view>
		<view class="container">
			<view class="container-card">
				<view class="card-top">
					<van-row>
						<van-col span="10" class="text-data">{{ manage.data }}</van-col>
						<van-col span="6" offset="8" class="text-state">{{ manage.state }}</van-col>
					</van-row>
				</view>
				<view class="card-body">
					<van-row>
						<view class="cardbody-img">
							<van-col span="8"><image class="card-img" src="../../static/imgComponents/manage/manage1.png"></image></van-col>
						</view>
						<view class="cardbody-info">
							<van-col span="16">
								<view class="carbody-text">
									<view class="carbody-text-c1">
										<van-row>
											<van-col span="24">
												<text>{{ manage.name }}</text>
											</van-col>
										</van-row>
									</view>
									<view class="carbody-text-c2">
										<van-row>
											<van-col span="12">{{ manage.manNum }}</van-col>
											<van-col span="12">{{ manage.couponNum }}</van-col>
										</van-row>
									</view>
								</view>
								<view class="cardbody-btn">
									<van-row>
										<van-col span="4"><van-button plain round size="small" type="default">删除</van-button></van-col>
										<van-col span="4" offset="2"><van-button plain round size="small" type="info">编辑</van-button></van-col>
										<van-col span="6" offset="6"><van-button plain round size="small" type="info">管理选项</van-button></van-col>
									</van-row>
								</view>
							</van-col>
						</view>
					</van-row>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'vote-manage',
	props: {
		manage: {
			type: Object
		}
	},
	data() {
		return {}
	}
}
</script>

<style lang="less">
@import url('index_manage.less');
</style>
