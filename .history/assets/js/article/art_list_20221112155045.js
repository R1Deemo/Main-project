$(function() {
    var layer = layui.layer

    // 定义美化时间的过滤器
    template.defaults.imports.dataFormat = function(date) {
        const dt = new Date(date)
        var y = dt.getFullYear()
        var m = dt.getMonth() + 1
        var d = dt.getDate()

        var hh = dt.getHours()
        var mm = dt.getMinutes()
        var ss = dt.getSeconds()
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
})