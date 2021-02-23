var app = getApp()
Page({
    data: {
        date: '2021-01-01',
		array_ylmc: ['圆粒', '普长', '细长', '圆粒毛米', '普长毛米', '细长毛米'],
		index_ylmc: 0,
		objectArray: [
			{
				id: 0,
				name: '圆粒',
			},
			{
				id: 1,
				name: '普长',
			},
			{
				id: 2,
				name: '细长',
			},
			{
				id: 3,
				name: '普长毛米',
			},
			{
				id: 4,
				name: '普长毛米',
			},
			{
				id: 5,
				name: '细长毛米',
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
        hiddenmodalput: true,
        lists: [],
		lists2: [],
        text: "",
        //可以通过hidden是否掩藏弹出框的属性，来指定那个弹出框
    },
    addList: function () {
        var lists = this.data.lists;
        var newData = {};
        lists.push(newData);//实质是添加lists数组内容，使for循环多一次
        this.setData({
            lists: lists,
        })
    },
    delList: function () {
        var lists = this.data.lists;
        lists.pop(); //实质是删除lists数组内容，使for循环少一次
        this.setData({
            lists: lists,
        })
    },
	addList2: function () {
        var lists2 = this.data.lists2;
        var newData = {};
        lists2.push(newData);//实质是添加lists数组内容，使for循环多一次
        this.setData({
            lists2: lists2,
        })
    },
    delList2: function () {
        var lists2 = this.data.lists2;
        lists2.pop(); //实质是删除lists数组内容，使for循环少一次
        this.setData({
            lists2: lists2,
        })
    },
    bindKeyInput: function (e) {
        var that = this;
        var index = e.currentTarget.dataset.id;//使用event.currentTarget.dataset.XX获取内容
        that.setData({
            text: e.detail.value
        })
        that.data.lists[index][0] = that.data.text;
        console.log("index1", index);
        console.log("e", e.detail.value);
        console.log("text", that.data.text);
        console.log("value1", that.data.lists[index][0]);
    },
    bindKeyInput2: function (e) {
        var that = this;
        var index2 = e.currentTarget.dataset.id;//使用event.currentTarget.dataset.XX获取内容
        that.setData({
            text: e.detail.value
        })
        that.data.lists[index2][1] = that.data.text;
        console.log("index2", index2);
        console.log("e2", e.detail.value);
        console.log("text", that.data.text);
        console.log("value2", that.data.lists[index2][1]);
    },
    bindDateChange: function (e) {
		console.log('picker发送选择改变，携带值为', e.detail.value)
		this.setData({
			date: e.detail.value
		})
	},
	PickerChange_ylmc: function (e) {
		console.log('picker发送选择改变，携带值为', e.detail.value)
		this.setData({
			index_ylmc: e.detail.value
		})
	},
	bindPickerChange: function (e) {
		console.log('picker发送选择改变，携带值为', e.detail.value)
		this.setData({
			index_bzxs: e.detail.value
		})
	},
})
