<template>
  <div class="four">
    <div class="logo ani" swiper-animate-effect="bounceInDown" swiper-animate-duration="1s" swiper-animate-delay="0s"></div>
    <div class="title ani" swiper-animate-effect="lightSpeedIn" swiper-animate-duration="1s" swiper-animate-delay="0.3s"></div>
    <div class="titlec ani" swiper-animate-effect="lightSpeedIn" swiper-animate-duration="1s" swiper-animate-delay="0.8s"></div>
    <div class="title-bottom ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="0.5s"></div>
    <div class="bt-1 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="1.5s"></div>
    <div class="bt-2 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="1.0s"></div>
    <div class="avatar">
      <img src="./person.png" alt="" class="img ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.35s">
      <p class="name ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0.5s">王毛路</p>
      <p class="desc ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0.8s">北京航空航天大学电子工程博士</p>
    </div>
    <div class="p1 ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1s">
		现任工业与信息化部信息化推进联盟区块链实验室副主任、中国信息化推进联盟委员、中国互联网协会电子数据研究院研究员、中国上市公司协会信息委委员，数秦科技首席科学家，曾任职于中国证监会、中国上市公司协会，全国金融标准化委员会委员。
    </div>
    <div class="p2 ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1.5s">
		主要研究领域包括神经网络、机器学习、分工式计算、大数据结构与交易规则等。长期从事区块链理论、区块结构、通信标准、链上数据流与区块链应用等方面的研究。先后主持多个国家级科研项目发表多篇学术论文，出版著作《区块链与新经济：数字货币2.0时代》，正在参与区块链国家标准制定工作。在金融科技领域具有深厚的经验，曾起草一项国家金融行业标准、多项金融行业标准。曾获得证卷期货行业科技进步奖二等奖、三等奖各一次。
    </div>
  </div>
</template>

<script>
export default {
  name:'four'
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixin.styl'
.four 
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
		top 120px
		left 182px
		width 103px
		height 25px
		bgimage('./1.png',1.61rem)
	.titlec
		position absolute
		top 124px
		left 298px
		width 134px
		height 20px
		bgimage('./2.png',2.09rem)
	.title-bottom
		position absolute
		top 126px
		left 91px
		width 459px
		height 34px
		bgimage('./3.png',7.172rem)
	.avatar
		position absolute
		top 180px
		left 0
		width 640px
		text-align center
		.img
			width 125px
		.name
			margin-top 20px
			font-size 28px
			color #0097ff
		.desc
			margin-top 20px
			font-size 28px
			color #0097ff
	.p1,.p2,.p3
		font-size 24px
		line-height 1.6
		text-indent 2em
		color #1b90df
	.p1
		position absolute
		top 460px
		left 40px
		width 580px
	.p2
		position absolute
		top 650px
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





