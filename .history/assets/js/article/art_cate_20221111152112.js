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
    var indexEdit = null
    $('tbody').on('click', '#btn-edit', function() {

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
                    form.val('form-edit', res.data)
                }
            })

        })
        //通过代理的形式为表单绑定submit事件
    $('body').on('submit', '#form-edit', function(e) {
            e.preventDefault();
            $.ajax({
                method: 'post',
                url: '/my/article/updatecate',
                data: $(this).serialize(),
                success: function(res) {
                    if (res.status !== 0)
                        return layer.msg('修改失败')
                    initArtCateList()
                    layer.msg('修改成功')
                    layer.close(indexEdit)
                }
            })
        })
        //获取文章分类
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
    //通过代理的形式为删除按钮代理事件
    $('tbody').on('click', '.btn-delete', function() {
        var id = $(this).attr('data-id')
            //提示是否要删除
        layer.confirm('是否删除', { icon: 3, title: '删除' }, function(index) {

            $.ajax({
                method: 'get',
                url: '/my/article/deletecate/' + id,
                success: function(res) {
                    if (res.status !== 0) {
                        return layer.msg('删除分类失败')
                    }
                    layer.msg('删除分类成功')
                    layer.close(index)
                    initArtCateList()
                }
            })


        })
    })

})