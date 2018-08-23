<template id="start">
	<main class="HolyGrail">
	  <header>
	  	<h1>汽车维修</h1>
	  	<router-link to="/detail">
	  		<i class="iconfont icon-dingyue subs"></i>
	  	</router-link>
	  	<router-link to="/news?title=网页大全&id=1">
	  		<i class="iconfont icon-star web"></i>
	  	</router-link>
	  	<router-link to="/findMsg">
	  		<i class="iconfont icon-search search"></i>
	  	</router-link>
	  </header>
	  <div class="HolyGrail-body">
	    <mt-swipe  :auto="4000">
		  <mt-swipe-item>
		  	<img src="static/images/banner01.jpg" alt="图片">
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="static/images/banner02.jpg" alt="图片">
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="static/images/banner03.jpg" alt="图片">
		  </mt-swipe-item>
		</mt-swipe>
	    <nav class="HolyGrail-nav">
	    	<ul class="first">
	    		<li>
	    			<router-link to="/news?title=行业资讯&id=0" class="news">
	    				<i class="iconfont icon-hangyezixun"></i>
	    				<p>行业资讯</p>
	    			</router-link>
	    		</li>
	    		<li>
	    			<router-link to="/news?title=汽车保养&id=1" class="keep">
	    				<i class="iconfont icon-cheliangbaoyangjihua"></i>
	    				<p>汽车保养</p>
	    			</router-link>
	    		</li>
	    		<li>
	    			<router-link to="/news?title=车身美容&id=2" class="facial">
	    				<i class="iconfont icon-qiche"></i>
	    				<p>车身美容</p>
	    			</router-link>
	    		</li>
	    		<li>
	    			<router-link to="/news?title=汽车改装&id=3" class="refit">
	    				<i class="iconfont icon-ai-tool"></i>
	    				<p>汽车改装</p>
	    			</router-link>
	    		</li>
	    	</ul>
	    	<ul class="second">
	    		<li>
	    			<router-link to="/news?title=汽车配件&id=4" class="parts">
	    				<i class="iconfont icon-qimopeijian"></i>
	    				<p>汽车配件</p>
	    			</router-link>
	    		</li>
	    		<li>
	    			<router-link to="/news?title=区域招商&id=5" class="attract">
	    				<i class="iconfont icon-huabanfuben"></i>
	    				<p>区域招商</p>
	    			</router-link>
	    		</li>
	    		<li>
	    			<router-link to="/news?title=零件修理&id=6" class="component">
	    				<i class="iconfont icon-xiuli"></i>
	    				<p>零件修理</p>
	    			</router-link>
	    		</li>
	    		<li>
	    			<router-link to="/news?title=联系我们&id=7" class="contact">
	    				<i class="iconfont icon-lianxiwomen"></i>
	    				<p>联系我们</p>
	    			</router-link>
	    		</li>
	    	</ul>
	    </nav>
	    <router-link to="/cardetail">
	    	<span class="homead"></span>
	    </router-link>


	  <div>
	    <div class="nav">
	      <mt-button size="small" :class="active == 'tab-container1'?red:fontBlack" @click.native.prevent="active = 'tab-container1'">
	        <p>我的头条</p>
	      </mt-button>
	      <mt-button size="small" :class="active == 'tab-container2'?red:fontBlack" @click.native.prevent="active = 'tab-container2'">
	        <p>汽车行情</p>
	      </mt-button>
	      <mt-button size="small" :class="active == 'tab-container3'?red:fontBlack" @click.native.prevent="active = 'tab-container3'">
	        <p>汽车用品</p>
	      </mt-button>
	      <mt-button size="small" :class="active == 'tab-container4'?red:fontBlack" @click.native.prevent="active = 'tab-container4'">
	        <p>汽车改装</p>
	      </mt-button>
	    </div>

	    <div class="page-tab-container">
	      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
	        <mt-tab-container-item id="tab-container1">
	          <!-- cell组件 -->
	          <mt-cell>
	          	<v-brief></v-brief>
	          </mt-cell>
	        </mt-tab-container-item>
	        <mt-tab-container-item id="tab-container2">
	          <!-- cell组件 -->
	          <mt-cell>
	          	<v-brief></v-brief>
	          </mt-cell>
	        </mt-tab-container-item>
	        <mt-tab-container-item id="tab-container3">
	          <!-- cell组件 -->
	          <mt-cell>
	          	<v-brief></v-brief>
	          </mt-cell>
	        </mt-tab-container-item>
	        <mt-tab-container-item id="tab-container4">
	          <!-- cell组件 -->
	          <mt-cell>
	          	<v-brief></v-brief>
	          </mt-cell>
	        </mt-tab-container-item>
	      </mt-tab-container>
	    </div>
	  </div>
 

	  </div>
	</main>
</template>

<script>
	import vbrief from './brief.vue'
	export default{
		name: 'home-tab-container',
		data() {
		    return {
		      active: 'tab-container1',
		      fontBlack:'fontBlack',
		      red:'red'
		    };
		},
		components:{
			'v-brief':vbrief
		}
	}
</script>

<style scoped>
*{
	-webkit-text-size-adjust: none;
}
a{
	text-decoration: none;
}
.HolyGrail {
  width: 100vw;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
header,footer {
  display: flex;
}

header{
	height: 45px;
	box-sizing: border-box;
    padding: 13px 20px;
}
.HolyGrail-body{
	padding-bottom: 55px;
}

/* 头部 */
header h1{
  background: -webkit-linear-gradient(180deg, red, blue); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(180deg, red, blue); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(180deg, red, blue); /* Firefox 3.6 - 15 */
  background: linear-gradient(180deg, red, blue); /* 标准的语法 */
  -webkit-background-clip: text;
  color: transparent;
  flex: 1;
}
header .subs,header .web,header .search{
	width: 16px;
	height: 30px;
	margin-left: 10px;
	margin-top: 2px;
	color: orange;
}
header .search{
	font-size: 13px;
    margin-top: 5px;
}
/* 中间导航 */
.nav{
	padding-bottom: 10px;
}
.HolyGrail-nav ul{
	display: flex;
	padding: 20px 20px 0px 20px;
	justify-content: space-between;
}
.HolyGrail-nav li a{
	display: flex;
    flex-direction: column;
    text-align: center;
    text-decoration: none;
    align-items: center;
}
.HolyGrail-nav li:last-child{
	margin-right: 0;
}
.HolyGrail-nav i{
	color: #fff;
    display: inline-block;
    padding: 7px;
    width: 24px;
    border-radius: 6px;
    font-size: 20px;
}
.HolyGrail-nav li a p{
	font-size: 12px;
	color: #666;
}
.HolyGrail-nav .news i{
	background: #3fb8af;
}
.HolyGrail-nav .keep i{
	background: #8a9b0f; 
}
.HolyGrail-nav .facial i{
	background: #edc951;
}
.HolyGrail-nav .refit i{
	background: #fc9d9a;
}
.HolyGrail-nav .parts i{
	background: #eb6841;
}
.HolyGrail-nav .attract i{
	background: #3299bb; 
}
.HolyGrail-nav .component i{
	background: #fe4365;
}
.HolyGrail-nav .contact i{
	background: #83af9b;
}

.HolyGrail-nav i{
	margin-bottom: 5px;
}

.homead{
	background: url('../../../static/images/homead.jpg') -33px -162px no-repeat;
    background-size: 112%;
    display: inline-block;
    padding-bottom: 34%;
    width: 100%;
    margin: 21px 0px;
}

.red{
	background: red;
}
.fontBlack{
	color: #333;
}

</style>