<template>
  <div class="three">
    <div class="logo ani" swiper-animate-effect="bounceInDown" swiper-animate-duration="1s" swiper-animate-delay="0s"></div>
    <div class="title ani" swiper-animate-effect="lightSpeedIn" swiper-animate-duration="1s" swiper-animate-delay="0.3s"></div>
    <div class="titlec ani" swiper-animate-effect="lightSpeedIn" swiper-animate-duration="1s" swiper-animate-delay="0.8s"></div>
    <div class="title-bottom ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="0.5s"></div>
    <div class="bt-1 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="1.8s"></div>
    <div class="bt-2 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="1.5s"></div>
    <div class="avatar">
      <img src="./person.png" alt="" class="img ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.5s">
      <p class="name ani" swiper-animate-effect="bounceIn" swiper-animate-duration="1s" swiper-animate-delay="0.5s">高航</p>
    </div>
    <div class="p1 ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="0.7s">
		资深技术极客、区块链技术专家、科技金融专家、财税信息化专家、国内最早在区块链领域的创业者。
	</div>
    <div class="p2 ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1.2s">
		中国区块链应用研究中心常务理事及浙江分中心负责人，国家互联网金融安全技术专家委员会委员。杭州区块链技术与应用联合会发起人，2013年从事区块链和数字货币研究。曾出版《数字货币：比特币数据报告与操作指南》、《敏捷创新》、《区块链与新经济：数字货币2.0时代》等书。
	</div>
    <div class="p3 ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1.6s">
		原壹比特数字科技CEO，数牛金服创始人、总裁。数秦科技创始人、CEO。
	</div>
  </div>
</template>

<script>
export default {
  name:'three'
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixin.styl'
.three 
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
	.avatar
		position absolute
		top 210px
		left 258px
		width 125px
		text-align center
		.img
			width 125px
		.name
			margin-top 20px
			font-size 28px
			color #0097ff
	.p1,.p2,.p3
		font-size 26px
		line-height 1.6
		text-indent 2em
		color #1b90df
	.p1
		position absolute
		top 440px
		left 40px
		width 580px
	.p2
		position absolute
		top 570px
		left 40px
		width 580px
	.p3
		position absolute
		top 840px
		left 40px
		width 580px
	.bt-1
		position absolute
		bottom 0
		left 0
		width 640px
		height 173px
		bgimage('./4.png',10rem)
	.bt-2
		position absolute
		bottom 0px
		left 64px
		width 511px
		height 120px
		bgimage('./5.png',7.98rem)
</style>





