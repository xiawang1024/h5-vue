// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'common/js/flexible.js'
import 'common/stylus/index.styl'
import 'common/css/swiper.min.css'
import 'animate.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})