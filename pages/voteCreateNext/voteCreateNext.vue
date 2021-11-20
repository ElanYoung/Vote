<!-- 创建投票下一步 -->
<template>
	<view>
		<view class="container">
			<form @submit="formSubmit" @reset="formReset">
				<!-- 顶部选择条 -->
				<view class="top-switch">
					<van-cell-group>
						<van-cell title="允许用户报名" value=""><van-switch :checked="allowChecked" @change="onAllowChange" /></van-cell>
						<van-cell title="审核用户报名" value=""><van-switch :checked="examineChecked" @change="onExamineChange" /></van-cell>
					</van-cell-group>
				</view>
				<view class="top-popup">
					<van-field readonly :value="voteStrict" is-link label="投票限制:" input-align="right" @tap="showTypePicker = true" />
					<!-- 圆角弹窗 -->
					<van-popup :show="showTypePicker" round position="bottom">
						<van-picker show-toolbar title="投票限制" :columns="columns" @cancel="showTypePicker = false" @confirm="onConfirm" />
					</van-popup>
				</view>
				<view class="top-stepper">
					<van-cell title="助力限制:" value=""><van-stepper value="1" @change="onStepperChange" /></van-cell>
				</view>

				<view class="mid-textarea">
					<v-row>
						<view class="mid-textarea-text">
							<v-col><text>活动介绍</text></v-col>
						</view>
						<view class="mid-textarea-textarea">
							<v-col><textarea class="v-col-textarea" :value="textareaText" placeholder="" /></v-col>
						</view>
					</v-row>
				</view>

				<view class="floor-btn">
					<van-row>
						<van-col span="6" offset="2"><van-button custom-class="save-button" plain type="info">存草稿</van-button></van-col>
						<van-col span="8" offset="4"><van-button custom-class="public-button" type="info" @tap="onJumpTo(nexturl)">发布</van-button></van-col>
					</van-row>
				</view>
			</form>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			allowChecked: false,
			examineChecked: false,
			showTypePicker: false,
			nexturl: '/pages/voteCreateSuccess/voteCreateSuccess',
			textareaText:
				'活动是由共同目的联合起来并完成一定社会职能的动作的总和。目的联合起来并完成一定社会职能的动作的总和。活动由目的、动目的联合起来并完成一定社会职能的动作的总和。活动由目的、动目的联合起来并完成一定社会职能的动作的总和。活动由目的、动活动由目的、动机、动作和共同性构成，具有完整的结构系统。苏联心理学家从20年代起就对活动进行了一系列研究。活动是由共同目的',
			// TODO如何不写死！！！
			voteStrict: '每位用户仅可投一票',
			data: [{ name: '每位用户仅可投一票' }, { name: '每位用户每天可投一票' }],
			columns: []
		}
	},
	methods: {
		onAllowChange({ detail }) {
			console.log('onAllowChange:' + detail)
			this.allowChecked = detail
		},
		onExamineChange({ detail }) {
			console.log('onExamineChange:' + detail)
			this.examineChecked = detail
		},
		onStepperChange(event) {
			console.log(event.detail)
		},
		onConfirm(value, index) {
			this.value = value
			console.log('onConfirm:' + value)
			this.voteStrict = value.detail.value
			this.showTypePicker = false
		},
		onJumpTo(url) {
			uni.navigateTo({
				url,
				success(res) {
					console.log(res)
				}
			})
		}
	},
	// 创建时给columns赋值  用于vote-type
	created() {
		this.data.map(value => {
			(value = value.name), this.columns.push(value)
		})
	}
}
</script>

<style>
@import url('voteCreateNext.less');
</style>
