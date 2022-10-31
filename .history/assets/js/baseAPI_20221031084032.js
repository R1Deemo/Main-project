$.ajaxPrefilter(function(options) {
    options.url = 'http://www.liulongbin.top:3007' + options.url

    if (options.url.indexOf('/my') !== -1)
        options.heardrs = {
            Authorization: localStorage.getItem('token') || ''
        }
})