$(function() {

    initArtCateList()

    function initArtCateList() {
        $.ajax({
            method: 'get',
            url: '/my/article/cates',
            success: function(res) {
                template('tpl-table', res)
            }
        })
    }

})