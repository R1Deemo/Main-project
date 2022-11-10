$(function() {
    var layer = layui.layer
    var form = layui.form
    initArtCateList()

    //为添加类别加入事件
    var indexAdd = null
    $('#btnAddCate').on('click', function() {
            indexAdd = layer.open({
                type: 1,
                area: ['500px', '250px'],
                title: '添加文件分类',
                content: $('#dialog-add').html(),

            })
        })
        //通过代理的形式为表单绑定submit事件
    $('body').on('submit', '#form-add', function(e) {
            e.preventDefault();
            $.ajax({
                method: 'post',
                url: '/my/article/addcates',
                data: $(this).serialize(),
                success: function(res) {
                    if (res.status !== 0)
                        return layer.msg('添加失败')
                    initArtCateList()
                    layer.msg('新增分类成功')
                    layer.close(indexAdd)
                }
            })
        })
        //通过代理的形式为btn-edit绑定点击事件
    $('tbody').on('click', '#btn-edit', function() {
        var indexEdit = null
        indexEdit = layer.open({
            type: 1,
            area: ['500px', '250px'],
            title: '编辑文件分类',
            content: $('#dialog-edit').html(),

        })
        var id = $(this).attr('data-id')
        $.ajax({
            method: 'get',
            url: '/my/article/cates/' + id,
            success: function(res) {

            }
        })

    })


    function initArtCateList() {
        $.ajax({
            method: 'get',
            url: '/my/article/cates',
            success: function(res) {
                var htmlStr = template('tpl-table', res)
                $('tbody').html(htmlStr)
            }
        })
    }

})