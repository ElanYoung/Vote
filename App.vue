<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			
			// //中间按钮
			// uni.onTabBarMidButtonTap(() => {
			// 	console.log("点击了");
			// });
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import url('style.less');
	/* @import url('/wxcomponents/vant/common/index.wxss'); */
</style>
