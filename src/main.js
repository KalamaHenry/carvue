import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui';
import VueRouter from 'vue-router'
import axios from 'axios'
import './assets/css/cssreset.css'
import './assets/css/animate.css'
import '../node_modules/mint-ui/lib/style.css'
import './assets/css/myswiper.css'
import './assets/font/iconfont.css'
import router from './js/router.js'
import $ from 'zepto'


import { Lazyload } from 'mint-ui';
 Vue.use(Lazyload, {
  preLoad: 1,
  error: 'static/images/error.png',
  loading: 'static/images/timg.gif',
  attempt: 3,
  listenEvents: [ 'scroll' ]
})
/*import { Swipe, SwipeItem } from 'mint-ui';
import { TabContainer, TabContainerItem } from 'mint-ui';
import { Search } from 'mint-ui';*/

Vue.use(VueRouter)
Vue.use(Mint);
Vue.prototype.$axios= axios

/*Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Search.name, Search);*/

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
