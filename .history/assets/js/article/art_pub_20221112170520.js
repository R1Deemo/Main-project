$(function() {
    var layer = layui.layer
    var form = layui.form
    initCate()

    initEditor()

    function initCate() {
        //加载文章分类的方法
        $.ajax({
            method: 'get',
            url: '/my/article/cates',
            success: function(res) {
                if (res.status !== 0) {
                    return layer.msg('获取文章分类失败')
                }
                // 调用模板引擎,渲染下拉菜单
                var htmlStr = template('tpl-cate', res)
                $('[name=cate_id]').html(htmlStr)
                    //一定要记得调用form.render()方法
                form.render()
            }
        })
    }

    // 1. 初始化图片裁剪器
    var $image = $('#image')

    // 2. 裁剪选项
    var options = {
        aspectRatio: 400 / 280,
        preview: '.img-preview'
    }

    // 3. 初始化裁剪区域
    $image.cropper(options)

    $('#btnChooseImage').on('click', function() {
        $('#coverFile').click()
    })

    //监听coverFile的change事件,获取用户选择的文件列表
    $('#coverFile').on('change', function(e) {
            var files = e.target.files
            if (files.length == 0) {
                return
            }
            var newImgURL = URL.createObjectURL(files[0])
            $image
                .cropper('destroy') // 销毁旧的裁剪区域
                .attr('src', newImgURL) // 重新设置图片路径
                .cropper(options) // 重新初始化裁剪区域

        })
        //定义文章的发布状态
    var art_state = '已发布'
    $('#btnSave2').on('click', function() {
            art_state = '草稿'
        })
        // 为表单绑定submit事件
    $('#form-pub').on('submit', function(e) {
        e.preventDefault();
        // 创建一个formdata对象
        var fd = new FormData($(this)[0])
            // 将文章的发布状态存到fd中
        fd.append('state', art_state)

        // 将封面裁剪过后的图片输出为文件对象
        $image
            .cropper('getCroppedCanvas', { // 创建一个 Canvas 画布
                width: 400,
                height: 280
            })
            .toBlob(function(blob) { // 将 Canvas 画布上的内容，转化为文件对象
                // 得到文件对象后，进行后续的操作
            })
    })


})