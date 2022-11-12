$(function() {
    var layer = layui.layer
    initCate()


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
            $('#cate').html(htmlStr)
        }
    })
})