window.onload = function() {
    var href = window.location.href
    $.post('https://a.weixin.hndt.com/at/sign', { url: href }, function(data) {
        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: data.appId, // 必填，公众号的唯一标识
            timestamp: data.timestamp, // 必填，生成签名的时间戳
            nonceStr: data.nonceStr, // 必填，生成签名的随机串
            signature: data.signature, // 必填，签名，见附录1
            jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
    })

    wx.ready(function() {
        wx.onMenuShareTimeline({
            title: '区块链技术讲座', // 分享标题
            link: 'http://hndt.com/h5/sign/index.html', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: 'http://hndt.com/res/logo_300.png', // 分享图标
            success: function() {
                // 用户确认分享后执行的回调函数
            },
            cancel: function() {
                // 用户取消分享后执行的回调函数
            }
        });
        wx.onMenuShareAppMessage({
            title: '区块链技术讲座', // 分享标题
            desc: '本次区块链技术讲座将在河南广播大厦三楼举办，嘉宾将围绕“区块链开启价值互联时代”这一全球趋势主题，解答从概念到落地，从起源到未来，从部门监管运用到普通百姓生活，就技术研发，商业应用，产业战略等方面进行深入探讨，让区块链应用技术更快的落地于生产生活中更好的服务于各行各业，成为新经济的催化剂。', // 分享描述
            link: 'http://hndt.com/h5/sign/index.html', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: 'http://hndt.com/res/logo_300.png', // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function() {
                // 用户确认分享后执行的回调函数
            },
            cancel: function() {
                // 用户取消分享后执行的回调函数
            }
        });
    });
    (function audioAutoPlay() {
        var audio = document.getElementById('audio');
        audio.play();
        document.addEventListener("WeixinJSBridgeReady", function() {
            audio.play();
        }, false);
    })();
}