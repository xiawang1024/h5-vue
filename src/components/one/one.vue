<template>
  <div class="one">
	  <div class="logo ani" swiper-animate-effect="bounceInDown" swiper-animate-duration="1s" swiper-animate-delay="0s"></div>
	  <div class="title ani" swiper-animate-effect="bounceInLeft" swiper-animate-duration="1s" swiper-animate-delay="0.7s"></div>
	  <div class="titlec ani" swiper-animate-effect="bounceInLeft" swiper-animate-duration="1s" swiper-animate-delay="1.2s"></div>
	  <div class="address ani" swiper-animate-effect="bounceInLeft" swiper-animate-duration="1s" swiper-animate-delay="1.7s"></div>
	  <div class="bt-1 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="1.2s"></div>
	  <div class="bt-2 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="1.2s"></div>
	  <div class="bt-3 ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.7s" swiper-animate-delay="1s"></div>
	  <div class="bt-4 ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.7s" swiper-animate-delay="0.7s"></div>
	  <div class="middle">
		  <div class="light ani" swiper-animate-effect="bounceIn" swiper-animate-duration="1s" swiper-animate-delay="3s"></div>
		  <div class="border-2 ani" swiper-animate-effect="wxRotate" swiper-animate-duration="2.2s" swiper-animate-delay="1s"></div>
		  <div class="border-1 ani" swiper-animate-effect="wxRotatex" swiper-animate-duration="2.2s" swiper-animate-delay="1s"></div>
		  <div class="text ani" swiper-animate-effect="bounceIn" swiper-animate-duration="1s" swiper-animate-delay="0s"></div>
	  </div>
	  <div class="time ani" swiper-animate-effect="lightSpeedIn" swiper-animate-duration="1s" swiper-animate-delay="1.5s"></div>
	  <div class="address-detail ani" swiper-animate-effect="lightSpeedIn" swiper-animate-duration="1s" swiper-animate-delay="2s"></div>
  </div>
</template>

<script>
export default {
  name:'one'
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixin.styl'
.one
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
		left 160px
		width 320px
		height 29px
		bgimage('./1.png',5rem)
	.titlec
		position absolute
		top 180px
		left 153px
		width 335px
		height 24px
		bgimage('./2.png',5.23rem)
	.address
		position absolute
		top 220px
		left 237px
		width 167px
		height 23px
		bgimage('./3.png',2.6rem)
	.middle
		position absolute
		top 280px
		left 106px
		width 428px
		height 428px
		.text
			position absolute
			top 175.5px
			left 146.5px
			width 135px
			height 77px
			bgimage('./4.png',2.11rem)
		.border-1
			position absolute
			top 81.5px
			left 81.5px
			width 265px
			height 265px
			bgimage('./5.png',4.14rem)
		.border-2
			position absolute
			top -4px
			left -6px
			width 428px
			height 435px
			bgimage('./6.png',6.67rem)
		.light
			position absolute
			top -10px
			left -110px
			width 601px
			height 469px
			bgimage('./7.png',9.375rem)
	.time
		position absolute
		bottom 220px
		left 76px
		width 488px
		height 23px
		bgimage('./8.png',7.625rem)
	.address-detail
		position absolute
		bottom 180px
		left 225px
		width 191px
		height 23px
		bgimage('./9.png',2.984rem)
	.bt-1
		position absolute
		bottom 55px
		left 0px
		width 295px
		height 241px
		bgimage('./10.png',4.61rem)
	.bt-2
		position absolute
		bottom 72px
		right 0px
		width 345px
		height 224px
		bgimage('./11.png',5.4rem)
	.bt-3
		position absolute
		bottom 0px
		left 0px
		width 375px
		height 139px
		bgimage('./12.png',5.86rem)
	.bt-4
		position absolute
		bottom 0px
		right 0px
		width 492px
		height 217px
		bgimage('./13.png',7.68rem)
</style>


