<template>
  <div class="five">
    <div class="logo ani" swiper-animate-effect="bounceInDown" swiper-animate-duration="1s" swiper-animate-delay="0s"></div>
    <div class="title ani" swiper-animate-effect="lightSpeedIn" swiper-animate-duration="1s" swiper-animate-delay="0.3s"></div>
    <div class="titlec ani" swiper-animate-effect="lightSpeedIn" swiper-animate-duration="1s" swiper-animate-delay="0.8s"></div>
    <div class="title-bottom ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="0.5s"></div>
    <div class="bt-1 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="1.5s"></div>
    <div class="bt-2 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="1.0s"></div>
    <div class="map ani" swiper-animate-effect="bounceIn" swiper-animate-duration="1s" swiper-animate-delay="0.5s"></div>
    <div class="p1 ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1s">
		地址：郑州金水区纬一路2号广播大厦
    </div>
    <div class="p2 ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1.4s">
		电话：0371-68559111
    </div>
	<div class="p3 ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1.8s">
		邮箱：hndt659390000@126.com
	</div>
  </div>
</template>

<script>
export default {
  name:'five'
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixin.styl'
.five 
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
		top 146px
		left 91px
		width 459px
		height 34px
		bgimage('./3.png',7.172rem)
	.map
		position absolute
		top 280px
		left 100px
		width 440px
		height 300px
		bgimage('./6.png',6.875rem)
	.p1,.p2,.p3
		font-size 24px
		line-height 1.6
		text-indent 2em
		color #1b90df
	.p1
		position absolute
		top 650px
		left 70px
		width 500px
	.p2
		position absolute
		top 700px
		left 70px
		width 500px
	.p3
		position absolute
		top 750px
		left 70px
		width 500px
	.bt-1
		position absolute
		bottom 0
		left 96px
		width 447px
		height 175px
		bgimage('./4.png',6.98rem)
	.bt-2
		position absolute
		bottom 0px
		left 80px
		width 421px
		height 106px
		bgimage('./5.png',6.58rem)
</style>





