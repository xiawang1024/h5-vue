$(function() {


    $.get('http://a.weixin.hndt.com/user/all?origin=hn', function(data, status, xhr) {

        var len = data.length;
        var html = ''

        for (var i = len - 1; i >= 0; i--) {
            var item = data[i]
            html += '<div class="swiper-slide">' +
                '<div class="item">' +
                '<img src="' + item.icon + '" alt="" class="img">' +
                '<p class="name">' + item.name + '</p>' +
                '</div>' +
                '</div>'
        }

        $('#swiperWrap').html(html)

        setTimeout(function() {
            var mySwiper = new Swiper('.swiper-container', {
                autoplay: 1000,
                speed: 1000,
                autoplayDisableOnInteraction: false,
                spaceBetween: 60,
                slidesPerColumn: 2,
                slidesPerView: 5,
                // slidesPerGroup: 5,
            })
        }, 20)
    })




})