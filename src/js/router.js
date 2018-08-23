import VueRouter from 'vue-router';

import start from '../component/content/start.vue'
import home from '../component/content/home.vue'
import shopping from '../component/content/shopping.vue'
import my from '../component/content/my.vue'
import find from '../component/content/find.vue'
import chat from '../component/content/chat.vue'
import findMsg from '../component/content/findMsg.vue'
import login from '../component/content/login.vue'
import msgLogin from '../component/content/msgLogin.vue'
import showRegis from '../component/content/showRegis.vue'
import rule from '../component/content/rule.vue'
import news from '../component/content/news.vue'
import detail from '../component/content/detail.vue'

export default new VueRouter({
	routes:[
		{path:'/',redirect:'/home'},
		{path:'/home',component:home},
		{path:'/shopping',component:shopping},
		{path:'/my',component:my},
		{path:'/find',component:find},
		{path:'/chat',component:chat},
		{path:'/findMsg',component:findMsg},
		{path:'/login',component:login},
		{path:'/msgLogin',component:msgLogin},
		{path:'/showRegis',component:showRegis},
		{path:'/rule',component:rule},
		{path:'/news',component:news},
		{path:'/detail',component:detail},
		{path:'*',redirect:'/home'}
	]
})