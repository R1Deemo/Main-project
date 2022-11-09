$(function() {
    $.ajax({
        method: 'get',
        url: '/my/article/cates',
        success: function(res) {
            template('tpl-table', res)
        }
    })
})