$(function() {
    // 获取用户的基本信息
    getUserInfo()

})

function getUserInfo() {
    $.ajax({

        method: 'get',
        url: 'http://www.liulongbin.top:3007/my/userinfo',
        headers: {
            Authotization: localStorage.getItem('token') || ''
        },
        success: function(res) {
            console.log(res)
        }
    })
}