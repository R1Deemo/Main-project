$(function() {
    var layer = layui.layer

    // 1.1 获取裁剪区域的 DOM 元素
    var $image = $('#image')
        // 1.2 配置选项
    const options = {
        // 纵横比
        aspectRatio: 1,
        // 指定预览区域
        preview: '.img-preview'
    }

    // 1.3 创建裁剪区域
    $image.cropper(options)


    //文件上传
    $('#upload').on('click', function() {
            $('#file').click()
        })
        // 为文件选择框绑定change事件
    $('#file').on('change', function(e) {
        var filelist = e.target.files
            // console.log(filelist)
        if ()
    })



})