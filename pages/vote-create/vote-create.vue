<!-- 创建投票 -->
<template>
	<view>
		<view class="container">
			<!-- 上传图片 -->
			<view class="top-uploader"><van-uploader :file-list="fileList" :after-read="imagesAfterRead" preview-size="225rpx" upload-text="上传活动照片" /></view>
			<!-- 中间文本框 -->
			<view class="mid-text">
				<van-cell-group>
					<view class="vote-name">
						<van-field :value="voteName" label="投票名称:" placeholder="请输入活动名称" input-align="right" @change="voteName = $event.mp.detail" />
					</view>
					<view class="vote-type">
						<van-field readonly :value="voteType" label="投票类型:" placeholder="请选择投票类型" input-align="right" @tap="showTypePicker = true" />
						<!-- 圆角弹窗 -->
						<van-popup :show="showTypePicker" round position="bottom">
							<van-picker show-toolbar :columns="columns" :default-index="voteTypeId" @cancel="showTypePicker = false" @confirm="onConfirm" />
						</van-popup>
					</view>
					<view class="vote-data">
						<van-field readonly :value="voteData1" label="开始时间:" placeholder="请选择开始时间" input-align="right" @tap="showDataPicker1 = true" />
						<van-popup :show="showDataPicker1" round position="bottom">
							<!-- input:当前value值 -->
							<van-datetime-picker
								type="datetime"
								:value="currentDate"
								:max-date="maxDateStart"
								:min-date="minDateStart"
								:input="onInput"
								title="请选择年月日时分"
								@change="changeFn1()"
								@confirm="onConfirmData1()"
								@cancel="showDataPicker1 = false"
							/>
						</van-popup>
						<van-field readonly :value="voteData2" label="结束时间:" placeholder="请选择结束时间" input-align="right" @tap="showDataPicker2 = true" />
						<van-popup :show="showDataPicker2" round position="bottom">
							<!-- input:当前value值 -->
							<van-datetime-picker
								type="datetime"
								:value="currentDate"
								:max-date="maxDateEnd"
								:min-date="minDateEnd"
								:input="onInput"
								title="请选择年月日时分"
								@confirm="onConfirmData2()"
								@cancel="showDataPicker2 = false"
							/>
						</van-popup>
					</view>
				</van-cell-group>
			</view>
			<!-- 次底部网格模板 -->
			<view class="secondary-floor-grid">
				<view class="grid-text">
					<van-row><text>选择模板</text></van-row>
				</view>
				<view class="grid-card">
					<van-row>
						<view class="main-icon">
							<van-grid column-num="4" :border="false" center>
								<!-- 加入单选框 -->
								<radio-group @change="radioChange">
									<van-grid-item use-slot="false" v-for="(imgitem, index) in images" :key="index">
										<view>
											<view class="grid-card-image">
												<van-row>
													<radio class="main-icon-radio" :id="imgitem.name" :value="imgitem.value" :checked="index === current" />
													<label :for="imgitem.name"><image style="width: 150rpx; height: 150rpx;" :src="imgitem.item"></image></label>
												</van-row>
											</view>
											<view class="grid-card-text">
												<van-row>{{ imgitem.name }}</van-row>
											</view>
										</view>
									</van-grid-item>
								</radio-group>
							</van-grid>
						</view>
					</van-row>
				</view>
			</view>
			<!-- 底部单元格 -->
			<view class="floor-btn">
				<van-row>
					<van-col span="6" offset="2"><van-button custom-class="temp-save-button" plain type="info" @tap="onSaveTemp">存草稿</van-button></van-col>
					<van-col span="8" offset="4"><van-button custom-class="next-button" type="info" @tap="onJumpTo(nexturl)">下一步</van-button></van-col>
				</van-row>
			</view>
		</view>
	</view>
</template>

<script>
import { datatimeformat } from '../../util/time.js'
// import { uploadFileToTencentClound } from '../../util/COS.js'
export default {
	data() {
		return {
			openid: '',
			showTypePicker: false,
			showDataPicker1: false,
			showDataPicker2: false,
			columns: [],
			voteType: '',
			voteData1: '',
			voteData2: '',
			voteDataTemp: '',
			current: 0,
			nexturl: '/pages/vote-create-next/vote-create-next',
			// radio: '1',
			// 这里数据可以写死
			data: [{ name: '生活' }, { name: '教育' }, { name: '科技' }, { name: '互联网' }, { name: '运动' }],
			//开始时间最值
			maxDateStart: new Date(2025, 12, 30).getTime(),
			minDateStart: '',
			//结束时间最值
			maxDateEnd: new Date(2025, 12, 30).getTime(),
			minDateEnd: '',
			//当前时间
			currentDate: new Date().getTime(),
			categoryId: '',
			voteName: '',
			//分类序号
			voteTypeId: 1,
			//投票快照 暂时都是进行中
			snapVote: '进行中',

			fileList: [
				{
					url: '/static/imgVoteRank/imgHead/h4.jpg',
					name: '图片111',
					isImage: true,
					deletable: true
				},
				// Uploader 根据文件后缀来判断是否为图片文件
				// 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
				{
					url: '/static/imgVoteRank/imgHead/h6.jpg',
					name: '图片112',
					isImage: true,
					deletable: true
				}
			],
			imgNameList: [],
			nameList: [{ name: '张三' }, { name: '李四' }, { name: '王五' }], //测试用
			images: [
				{
					name: '家庭教育1',
					item: '/static/imgVoteCreate/v1.png',
					value: '家庭教育1'
				},
				{
					name: '节日活动1',
					item: '/static/imgVoteCreate/v2.png',
					value: '节日活动1'
				},
				{
					name: '运动比赛1',
					item: '/static/imgVoteCreate/v3.png',
					value: '运动比赛1'
				},
				{
					name: '影音播放1',
					item: '/static/imgVoteCreate/v4.png',
					value: '影音播放1'
				},
				{
					name: '家庭教育2',
					item: '/static/imgVoteCreate/v1.png',
					value: '家庭教育2'
				},
				{
					name: '节日活动2',
					item: '/static/imgVoteCreate/v2.png',
					value: '节日活动2'
				},
				{
					name: '运动比赛2',
					item: '/static/imgVoteCreate/v3.png',
					value: '运动比赛2'
				},
				{
					name: '影音播放2',
					item: '/static/imgVoteCreate/v4.png',
					value: '影音播放2'
				}
			]
		}
	},
	methods: {
		// imagesBeforeRead(event) {
		// 	const fileList = []
		// 	fileList.push(event)
		// },
		//图片上传
		imagesAfterRead(event, detail) {
			console.log('imagesAfterRead-event', event)
			console.log('imagesAfterRead-detail', detail)
			const COS = require('../../wxcomponents/txcloud/cos-wx-sdk-v5.js')
			const cos = new COS({
				SecretId: 'AKIDGK8cqnTt2uVoqb5IEtHNDm46sNbYDcka',
				SecretKey: 'auxjETQ6VdV6PRCgtoTrzrSTEivrWu1s'
			})
			let filePath = event.url
			let fileName = filePath.substr(filePath.lastIndexOf('/') + 1)
			let uploadFileToTencentClound = (fileName, filePath) => {
				return new Promise((resolve, reject) => {
					cos.postObject(
						{
							Bucket: 'hollow-1308706291',
							Region: 'ap-nanjing',
							Key: 'voteImg/' + fileName,
							FilePath: filePath,
							onProgress: function(info) {
								console.log(JSON.stringify(info))
							}
						},
						function(err, data) {
							console.log('[cos.postObject-err]', err || data)
							resolve(data)
						}
					)
				})
			}

			//返回正确数据
			let resolveData = uploadFileToTencentClound(fileName, filePath)
			resolveData.then(function(data) {
				let newFilePath = data.Location
				// todo 判断是否为空 不为空合并数组concat
				const imageList = uni.getStorageSync('image')
				if (imageList.length <= 0) {
					uni.setStorageSync('image', [newFilePath])
				} else {
					uni.setStorageSync('image', imageList.concat([newFilePath]))
				}
			})
		},
		//存草稿
		onSaveTemp() {
			//TODO 如何实现图片同步上传 也就是上面的那个方法如何使用data中的this数据
			let imageUrl = uni.getStorageSync('image')
			console.log(imageUrl)
			for (var i = 0; i < imageUrl.length; i++) {
				this.fileList.push({
					url: 'http://' + imageUrl[i],
					name: '图片' + i,
					isImage: true,
					deletable: true
				})
			}
			//向后端传数据
			uni.request({
				url: 'http://localhost:8080/v1/vote/saveDraft',
				method: 'POST',
				header: {
					'content-type': 'application/json'
				},
				data: {
					openid: this.openid,
					name: this.voteName,
					categoryId: this.voteTypeId,
					startTime: this.minDateEnd,
					endTime: this.maxDateStart,
					status: 0, //0表示暂存
					imageList: imageUrl,

					snapVote: this.snapVote
				},
				success: function(res) {
					console.log(res)
				}
			})
		},
		//下一步选项
		onJumpTo(url) {
			let that = this
			uni.navigateTo({
				url,
				success(res) {
					console.log(res)
					uni.setStorageSync('name', that.voteName)
					uni.setStorageSync('categoryId', that.voteTypeId)
					uni.setStorageSync('startTime', that.minDateEnd)
					uni.setStorageSync('endTime', that.maxDateStart)
					uni.setStorageSync('status', 0)
				}
			})
		},
		//单选确认
		onConfirm(value, index) {
			this.value = value
			console.log('onConfirm:', value)
			this.voteTypeId = value.detail.index
			this.voteType = value.detail.value
			this.showTypePicker = false
		},
		//监控单选框的状态，改变状态的时候触发值
		radioChange: function(evt) {
			console.log('evt:' + evt.detail.value)
			for (let i = 0; i < this.images.length; i++) {
				if (this.images[i].value === evt.detail.value) {
					this.current = i
					break
				}
			}
		},
		//给日期值
		onInput(event) {
			this.setData({
				currentDate: event.detail
			})
		},
		//记录变换数据 可不写
		changeFn1(event) {
			this.voteDataTemp =
				event.detail.getValues()[0] +
				'年' +
				event.detail.getValues()[1] +
				'月' +
				event.detail.getValues()[2] +
				'日' +
				event.detail.getValues()[3] +
				'时' +
				event.detail.getValues()[4] +
				'分'
			console.log('this.voteDataTemp:' + this.voteDataTemp)
			console.log(event)
		},
		//TODO想办法把获取到的值改变一下格式
		onConfirmData1(value) {
			this.value = value
			console.log('onConfirmData1-value:' + value.detail)
			this.voteData1 = datatimeformat(value.detail)
			console.log(this.voteData1)
			//将当前日期设置为结束日期的最小值
			this.minDateEnd = value.detail
			this.showDataPicker1 = false
		},
		onConfirmData2(value) {
			this.value = value
			console.log('onConfirmData2-value:' + value.detail)
			this.voteData2 = datatimeformat(value.detail)
			//如果先使用的结束时间，就将开始时间的最大时间变为结束时间
			this.maxDateStart = value.detail
			this.showDataPicker2 = false
		}
	},
	// 创建时给columns赋值  用于vote-type
	created() {
		this.data.map(value => {
			(value = value.name), this.columns.push(value)
		})
	},
	onLoad() {
		let openid = uni.getStorageSync('openid_key')
		this.openid = openid
		uni.removeStorageSync('image')
	}
}
</script>

<style style="less">
@import url('vote-create.less');
</style>
