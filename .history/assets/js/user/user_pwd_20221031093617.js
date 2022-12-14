$(function() {
    var form = layui.form


    form.verify({
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        samePwd: function(value) {
            if (value === $('[name=oldPwd]'))
                return '新旧密码不能相同'
        },
        newPwd: function(value) {
            if (value === $('name=newPwd]')) {
                return '两次密码不一致'
            }
        }
    })
})