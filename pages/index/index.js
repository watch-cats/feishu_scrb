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
	array_bzxs: ['编包', '塑包', '塑包箱装', '塑包编装', '塑包单箱', '两面塑包', '两面塑包单箱', '六面塑包箱装', '六面塑包单箱', '铝箔箱装', '铝箔单箱', '暂存毛米'],
	index_bzxs: 0,
	objectArray: [
		{
			id: 0,
			name: '编包',
			en: "编包"
		},
		{
			id: 1,
			name: '塑包',
			en: "塑包"
		},
		{
			id: 2,
			name: '塑包箱装',
			en: "塑包箱装"
		},
		{
			id: 3,
			name: '塑包编装',
			en: "塑包编装"
		},
		{
			id: 4,
			name: '塑包单箱',
			en: "塑包单箱"
		},
		{
			id: 5,
			name: '两面塑包',
			en: "两面塑包"
		},
		{
			id: 6,
			name: '两面塑包单箱',
			en: "两面塑包单箱"
		},
		{
			id: 7,
			name: '六面塑包箱装',
			en: "六面塑包箱装"
		},
		{
			id: 8,
			name: '六面塑包单箱',
			en: "六面塑包单箱"
		},
		{
			id: 9,
			name: '铝箔箱装',
			en: "铝箔箱装"
		},
		{
			id: 10,
			name: '铝箔单箱',
			en: "铝箔单箱"
		},
		{
			id: 11,
			name: '暂存毛米',
			en: "暂存毛米"
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
bindPickerChange: function (e) {
	console.log('picker发送选择改变，携带值为', e.detail.value)
	this.setData({
		index_bzxs: e.detail.value
	})
},
})