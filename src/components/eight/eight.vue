<template>
  <div class="eight">
    <div class="logo ani" swiper-animate-effect="bounceInDown" swiper-animate-duration="1s" swiper-animate-delay="0s"></div>
    <div class="title ani" swiper-animate-effect="lightSpeedIn" swiper-animate-duration="1s" swiper-animate-delay="0.3s"></div>
    <div class="titlec ani" swiper-animate-effect="lightSpeedIn" swiper-animate-duration="1s" swiper-animate-delay="0.8s"></div>
    <div class="title-bottom ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="0.5s"></div>
    <div class="bt-1 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="1.5s"></div>
    <div class="bt-2 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="1.0s"></div>
    <div class="map ani" swiper-animate-effect="bounceIn" swiper-animate-duration="1s" swiper-animate-delay="0.5s"></div>
    <div class="p1 ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="1s">
		河南广播APP
    </div>
    <div class="p2 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="1.4s">
		时间：2017-10-25日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;下午15：00-17：30
    </div>
  </div>
</template>

<script>
export default {
  name:'eight'
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixin.styl'
.eight 
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
		top 300px
		left 190px
		width 260px
		height 260px
		bgimage('./6.png',4.06rem)
	.p1,.p2,.p3
		font-size 24px
		line-height 1.6
		color #1b90df
	.p1
		font-size 28px
		position absolute
		top 580px
		left 70px
		width 500px
		text-align center
	.p2
		position absolute
		bottom 300px
		left 20px
		width 600px
		text-align center
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





