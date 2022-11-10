$(function() {
    var layer = layui.layer
    initArtCateList()

    //为添加类别加入事件
    $('#btnAddCate').on('click', function() {
        layer.onpen({
            type: 1,
            area: ['500px', '250px'],
            title: '添加文件分类',
            content: 'af',

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