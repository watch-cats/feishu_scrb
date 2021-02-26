App({
  onLaunch: function () {
    var that = this;
    tt.request({
      url: 'http://10.0.1.21:8001',
      data: {

      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        console.log('request 调用成功 ${res}')
      },
      fail(res) {
        console.log('request 调用失败')
      }
    });
  }
})
