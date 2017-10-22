<template>
  <div class="two">
    <div class="logo ani" swiper-animate-effect="bounceInDown" swiper-animate-duration="1s" swiper-animate-delay="0s"></div>
    <div class="title ani" swiper-animate-effect="lightSpeedIn" swiper-animate-duration="1s" swiper-animate-delay="0.3s"></div>
    <div class="titlec ani" swiper-animate-effect="lightSpeedIn" swiper-animate-duration="1s" swiper-animate-delay="0.8s"></div>
    <div class="title-bottom ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="0.5s"></div>
    <div class="map ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.5s"></div>
    <div class="bt-2 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="0.5s"></div>
    <div class="bt-1 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="0.8s"></div>    
    <div class="text ani" swiper-animate-effect="zoomIn" swiper-animate-duration="1s" swiper-animate-delay="0.5s">
      本次区块链技术讲座将在河南广播大厦三楼举办，嘉宾将围绕“区块链开启价值互联时代”这一全球趋势主题，解答从概念到落地，从起源到未来，从部门监管运用到普通百姓生活，就技术研发，商业应用，产业战略等方面进行深入探讨，让区块链应用技术更快的落地于生产生活中更好的服务于各行各业，成为新经济的催化剂。
    </div>
  </div>
</template>

<script>
export default {
  name:'two'
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixin.styl'
.two 
	fullpage()
	.logo
		position absolute
		top 30px
		left 57px
		width 240px
		height 54px
		bgimage('./logo.png',3.75rem)
	.title
		position absolute
		top 140px
		left 182px
		width 103px
		height 25px
		bgimage('./1.png',1.61rem)
	.titlec
		position absolute
		top 144px
		left 298px
		width 134px
		height 20px
		bgimage('./2.png',2.09rem)
	.title-bottom
		position absolute
		top 148px
		left 91px
		width 459px
		height 34px
		bgimage('./3.png',7.172rem)
	.map
		position absolute
		top 120px
		left 0
		width 640px
		height 422px
		bgimage('./4.png',10rem)
	.text
		position absolute
		top 280px
		left 100px
		width 440px
		font-size 28px
		line-height 1.78
		text-indent 2em
		color #1b90df
	.bt-1
		position absolute
		bottom 73px
		left 117px
		width 405px
		height 297px
		bgimage('./5.png',6.33rem)
	.bt-2
		position absolute
		bottom 0px
		left 25px
		width 589px
		height 174px
		bgimage('./6.png',9.2rem)
</style>


