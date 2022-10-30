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
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格']
    })

})