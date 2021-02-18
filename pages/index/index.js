const app = getApp()
Page({
  data: {
	date: '2021-01-01',
	array: ['圆粒', '普长', '细长', '圆粒毛米', '普长毛米', '细长毛米'],
	index: 0,
	objectArray: [
		{
			id: 0,
			name: '圆粒',
			en: "圆粒"
		},
		{
			id: 1,
			name: '普长',
			en: "普长"
		},
		{
			id: 2,
			name: '细长',
			en: "细长"
		},
		{
			id: 3,
			name: '普长毛米',
			en: "普长毛米"
		},
		{
			id: 4,
			name: '普长毛米',
			en: "普长毛米"
		},
		{
			id: 5,
			name: '细长毛米',
			en: "细长毛米"
		},
	],
},
  bindDateChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
          date: e.detail.value
      })
  },
  bindPickerChange: function (e) {
	console.log('picker发送选择改变，携带值为', e.detail.value)
	this.setData({
		index: e.detail.value
	})
},
})