<template>
  <div class="home">
    <div class="swiper-container" ref="swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <one></one>
            </div>
            <div class="swiper-slide">
                <two></two>
            </div>
            <div class="swiper-slide">
                <three></three>
            </div>
            <div class="swiper-slide">
                <four></four>
            </div>
            <div class="swiper-slide">
                <five></five>
            </div>
            <div class="swiper-slide">
                <six></six>
            </div>
        </div>
    </div>
    <div class="up-icon"></div>
    <div class="audio-wrap" @click="toggle" :class="isPlay ? '' : 'isPause'">
      <audio src="http://www.hndt.com/h5/promotion/static/mp3/mp3.mp3" class="audio" id="audio" autoplay loop></audio>
    </div>
  </div>
</template>

<script>
import One from 'components/one/one'
import Two from 'components/two/two'
import Three from 'components/three/three'
import Four from 'components/four/four'
import Five from 'components/five/five'
import Six from 'components/six/six'
// import Seven from 'components/seven/seven'
export default {
  name: "home",
  components:{
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    // Seven
  },
  data () {
    return {
      isPlay:true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.mySwiper = new Swiper('.swiper-container', {
          direction : 'vertical',
          onInit: function(swiper) {
              swiperAnimateCache(swiper);
              swiperAnimate(swiper);
          },
          onSlideChangeEnd: function(swiper) {
              swiperAnimate(swiper);
          }
      })
      this.audio = document.getElementById('audio')
      document.addEventListener("touchstart", this._play(), false);
    },20)
  },
  methods:{
    _play() {
        this.audio.play()
    },
    toggle() {
        if(this.audio.paused){
            this.audio.play()
            this.isPlay = true
        }else{
            this.audio.pause()
            this.isPlay = false
        }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixin.styl'
@keyframes rotate 
    0%
        transform rotate(0)
    100%
        transform rotate(360deg)
@keyframes up 
    0%
        transform translate3d(0,0,0)
        opacity 0
    100%
        transform translate3d(0,-80px,0)    
        opacity 0.5
.swiper-container
	position absolute
	top 0
	left 0
	bottom 0
	right 0
	width 640px
	overflow hidden
	.swiper-wrapper
		width 100%
		height 100%
		.swiper-slide
			position relative
			width 100%
			height 100%
.up-icon
    opacity 0
    position absolute
    bottom 10px
    left 285px
    z-index 1024
    width 50px
    height 70px
    background url('./up-icon.png') center center no-repeat
    background-size contain
    animation up 1.2s ease-in infinite 
    animation-delay 1.5s
.audio-wrap
    position absolute
    z-index 102400
    top 50px
    right 50px
    width 80px
    height 80px
    background url('./voice.svg') center center no-repeat
    background-size 1rem auto
    animation rotate 2.5s linear infinite
    &.isPause
        -webkit-animation-play-state paused
        animation-play-state paused
        animation none
    .audio
        display none
</style>


