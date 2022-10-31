$(function() {
    // 获取用户的基本信息
    getUserInfo()

})

function getUserInfo() {
    $.ajax({

        method: 'get',
        url: 'http://www.liulongbin.top:3007/my/userinfo',
        headers: {
            Authorization: localStorage.getItem('token') || ''
        },
        success: function(res) {
            if (res.status !== 0) {
                return layui.layer.msg('获取用户信息失败')
            }
            // console.log(res)
            // 渲染用户头像
            renderAvatar(res.data)
        }
    })
}
// 渲染用户头像
function renderAvatar(user) {
    var name = user.nicknake || user.username
    $('#welcom').html('欢迎&nbsp' + name)
}