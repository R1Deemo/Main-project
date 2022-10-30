$(function() {
    $('#link_reg').on('click', function() {
        $('.reg-box').show()
        $('.login-box').hide()
    })

    $('#link_login').on('click', function() {
        $('.reg-box').hide()
        $('.login-box').show()
    })


    // 从layui中获取form对象
    var form = layui.form

    var layer = layui.layer
        // 自定义表单校验规则
    form.verify({
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        repwd: function(value) {
            // 确认密码
            var pwd = $('.reg-box [name=password]').val()
            if (pwd !== value) {
                return '两次密码不一致'
            }
        }
    })

    // 监听注册表单的提交
    $('#form-reg').on('submit', function(e) {
            e.preventDefault();
            var data = {
                username: $('#form-reg [name=username]').val(),
                password: $('#form-reg [name=repassword]').val(),
            }
            $.post('http://www.liulongbin.top:3007/api/reguser', data, function(res) {
                if (res.status !== 0) {
                    return layer.msg(res.message)
                }
                layer.msg('注册成功，请登录')
                $('#link_login').click()
            })
        })
        // 监听表单登录
    $('.login-box').submit(function(e) {
        e.preventDefault()
        $.ajax({
            url: 'http://www.liulongbin.top:3007/api/login',
            method: 'post',
            // 快速获取表单中的数据
            data: $(this).serialize(),
            success: function(res) {

            }
        })
    })

})