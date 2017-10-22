! function() {
    window.onload = function() {
        wx.config({
            // 配置信息
            debug: false,
            appId: '',
            timestamp: 1,
            nonceStr: '',
            signature: '',
            jsApiList: []
        });
        wx.ready(() => {
            // audioBtn.play();
        });
        (function audioAutoPlay() {
            var audio = document.getElementById('audio');
            audio.play();
            document.addEventListener("WeixinJSBridgeReady", function() {
                audio.play();
            }, false);
        })();
    }
}()