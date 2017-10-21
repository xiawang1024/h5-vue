<template>
    <div class="six">
        <div class="from" v-if="isUser">
            <div class="logo"></div>
            <div class="title">{{title}}</div>
            <div class="title-bottom"></div>
            <div class="bt-1"></div>
            <div class="bt-2"></div>
            <div class="bt-3"></div>
            <div class="bt-4"></div>
            <div id="form">
                <p class="item">
                    <span class="label">姓名</span>
                    <input type="text" class="ipt" v-model="name">
                </p>
                <p class="item">
                    <span class="label">部门</span>
                    <!-- <input type="text" class="ipt select" placeholder="请选择" readonly @click.prevent="unitSelect" v-model="unit"> -->
                    <select class="ipt select" v-model="unit">
                        <option disabled value="">请选择</option>
                        <option :value="item.value" v-for="item in unitData" v-bind:key="item.id">{{item.value}}</option>
                    </select>
                </p>
                <p class="item">
                    <span class="label">电话</span>
                    <input type="tel" class="ipt" v-model="mobile">
                </p>
                <button class="sub-btn" @click="postUser">提交</button>
            </div>
        </div>
        <div class="qr-wrap" v-else>
            <h2 class="title">入场凭证<span class="str">（妥善保管）</span></h2>
            <div class="logoc"></div>
            <div class="user-info">
                <p class="item">
                    <span class="tag">姓名：</span>
                    <span class="text">1111</span>
                </p>
                <p class="item">
                    <span class="tag">部门：</span>
                    <span class="text">原电台</span>
                </p>
                <p class="item">
                    <span class="tag">电话：</span>
                    <span class="text">13619840984</span>
                </p>
            </div>
            <qr-code class="qr" :text="qrText" :size="qrSize"></qr-code>
        </div>
    </div>
</template>

<script>
const unitData = [
    {
        'id':'01','value':'原电台'
    },
    {
        'id':'02','value':'原电视台'
    },
    {
        'id':'03','value':'有线网络集团'
    },
    {
        'id':'04','value':'大象融媒'
    },
    {
        'id':'05','value':'豫广网络'
    },
    {
        'id':'06','value':'中原云'
    },
    {
        'id':'07','value':'发射台'
    },
    {
        'id':'08','value':'无传中心'
    },
    {
        'id':'09','value':'无管中心'
    },
    {
        'id':'10','value':'102台'
    },
    {
        'id':'11','value':'104台'
    },
    {
        'id':'12','value':'其它'
    },
]
import { postUserInfo } from '@/api/index'
import Toast from 'v-toast'
import QrCode from 'vue-qrcode-component'
export default {
  name:'six',
  components:{
      QrCode
  },
  data () {
      return {
          isUser:true,
          title:'报名',
          unitData:unitData,
          name:'',
          unit:'',
          mobile:'',
          qrSize:200,
          qrText:'http://www.hndt.com'
      }
  },
  created () {
      this.qrSize = 3.5 * parseInt(document.getElementsByTagName('html')[0].style.fontSize)
  },
  methods:{
        postUser() {
            this.isUser = false
            this.$nextTick(() => {

            })
            if(!this.name){
                Toast.warn('请填写姓名')
                return 
            }
            if(!this.unit){
                Toast.warn('请选择部门')
                return 
            }
            if(!this.mobile){
                Toast.warn('请填写手机号')
                return 
            }
            if(!this.checkPhone(this.mobile)) {
                Toast.warn('请填写正确的手机号')
            }
            Toast.success({
                message:'提交成功，正在生成入场凭证',
                duration:5000
            })
            postUserInfo(this.name, this.unit, this.mobile).then(() => {

            })
            setTimeout(() => {
                this.title = '入场凭证'
            },3000)
        },
        checkPhone(phone) { 
            if(!(/^1[34578]\d{9}$/.test(phone))){                 
                return false; 
            }else{
                return true
            }
        }
  }
}
</script>


<style lang="stylus" scoped>
@import '~common/stylus/mixin.styl'
.six
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
        top 130px
        left 0
        width 100%
        font-size 42px
        color #0bc0fb
        text-align center
        letter-spacing 0.4em
    .title-bottom
        position absolute
        top 166px
        left 91px
        width 459px
        height 34px
        bgimage('./3.png',7.172rem)
    #form
        position absolute
        top 320px
        left 90px
        width 460px
        .item
            width 100%
            height 66px
            display flex
            align-items center
            margin-bottom 24px
            .label
                width 100px
                font-size 36px
                color rgb(11, 192, 251)
            .ipt
                flex 1
                align-self stretch
                background none 
                border 1px solid #0ca9e0
                box-sizing border-box
                padding-left 24px
                font-size 26px
                color #99cce8
                &.select
                    -webkit-appearance none
                    appearance none
                    background url('./down.png') right 0.375rem center no-repeat
                    background-size 0.375rem auto
        .sub-btn
            display block
            width 300px
            height 70px
            text-align center
            margin 100px auto 0
            background linear-gradient(#f29a39,#e05712)
            border none 
            border-radius 70px
            font-size 30px
            letter-spacing 0.3em
            color #ffffff
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
    .qr-wrap
        position absolute
        top 140px
        left 126px
        width 388px
        height 777px
        bgimage('./qr-bg.png',6.06rem)
        text-align center
        .title
            position relative
            top -80px
            font-size 40px
            .str
                color #f00
                font-size 18px
                letter-spacing 0
        .logoc
            position absolute
            top 57px
            left 91px
            width 206px
            height 50px
            bgimage('./logo.png',3.21rem) 
        .qr
            position absolute
            bottom 104px
            margin-left 50%
            transform translateX(-50%)
        .user-info
            position absolute
            top 130px
            left 34px
            width 320px
            border 1px solid #6bb3da
            border-radius 12px
            padding 12px 0
            box-sizing border-box
            font-size 26px
            .item
                line-height 2
                display flex
                .tag
                    width 110px
                .text
                    flex 1
                    text-align left
</style>

