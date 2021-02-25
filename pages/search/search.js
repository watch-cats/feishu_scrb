var app = getApp()
Page({
    data: {
        date: '2021-01-01',
    },
    bindDateChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            date: e.detail.value
        })
    },
    bindKeyInput1: function (e) {
        this.setData({
            tr1: parseFloat(e.detail.value)
        })
    },
    bindKeyInput2: function (e) {
        this.setData({
            tr2: parseFloat(e.detail.value)
        })
    },
})
