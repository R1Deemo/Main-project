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
        $.post('http://ajax.frontend.itheima.net/api/reguser', {
            username: $('#form-reg [name=username]').val(),
            password: $('#form-reg [name=repassword]').val(),
        }, function(res) {
            if (res.status !== 0) {
                return console.log(res.message)
            }
            console.log('注册成功')
        })
    })

})