$(function() {
    var layer = layui.layer

    // 定义美化时间的过滤器
    template.defaults.imports.dataFormat = function(date) {
        const dt = new Date(date)
        var y = dt.getFullYear()
        var m = padZero(dt.getMonth() + 1)
        var d = padZero(dt.getDate())

        var hh = padZero(dt.getHours())
        var mm = padZero(dt.getMinutes())
        var ss = padZero(dt.getSeconds())
        return y + '-' + m + '-' + d + ' ' + hh + ':' + mm + ':' + ss
    }

    //定义补零的函数
    function padZero(n) {
        return n > 9 ? n : '0' + n
    }
    //定义一个查询的参数对象，将来请求数据的时候需要将数据提交到服务器
    var q = {
        pagenum: 1, //默认是第几页
        pagesize: 2, //每页显示几条
        cate_id: '', //文章的分类id
        state: '' //文章的发布状态   
    }

    initTabel()

    //获取文章列表数据的方法
    function initTabel() {
        $.ajax({
            method: 'get',
            url: '/my/article/list',
            data: {
                pagenum: 1, //默认是第几页
                pagesize: 2, //每页显示几条
                cate_id: '', //文章的分类id
                state: '' //文章的发布状态   
            },
            success: function(res) {
                // console.log(q)
                console.log(res)
                if (res.status !== 0) {
                    return layer.msg('获取文章列表失败')
                }
                //使用模板引擎渲染页面数据
                var htmlStr = template('tpl-table', res)
                $('tbody').html(htmlStr)
            }
        })

    }

    //通过代理的形式为删除按钮代理事件
    $('tbody').on('click', '.btn-delete', function() {
        var id = $(this).attr('data-article_id')
            //提示是否要删除
        layer.confirm('是否删除', { icon: 3, title: '删除' }, function(index) {

            $.ajax({
                method: 'get',
                url: '/my/article/delete/' + id,
                success: function(res) {
                    if (res.status !== 0) {
                        return layer.msg('删除文章失败')
                    }
                    layer.msg('删除文章成功')
                    layer.close(index)
                    initTabel()
                }
            })


        })
    })
})