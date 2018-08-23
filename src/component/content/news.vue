<template>
	<main>
		<div class="top">
			<i class="iconfont icon-zuojiantou" @click="back"></i>
			<h1>{{title}}</h1>
			<i class="iconfont icon-fenxiang share" @click="flag=true"></i>
		</div>
		<div class="wrap">
			<div class="item">
				<ul>
					<li v-for="v in brief" class="wrap">
						<router-link to="/detail">
							<div :class="v.src?len:''">
								<h1>{{v.title}}</h1>
								<span class="left">{{v.source}}</span>
								<span class="right">{{v.time}}</span>
							</div>
							<img v-lazy="v.src" alt="图片" v-show="v.src">
						</router-link>
					</li>
				</ul>				
			</div>
		</div>
		<mt-popup
		  v-model="flag"
		  position="bottom">
			<div class="popwrap">
				<h1>分享</h1>
				<ul>
					<li>
						<router-link to="/weibo">
							<i class="iconfont icon-weibo"></i>
							<span>新浪微博</span>
						</router-link>
					</li>
					<li>
						<router-link to="/weibo" class="weixin">
							<i class="iconfont icon-weixin"></i>
							<span>微信好友</span>
						</router-link>
					</li>
					<li>
						<router-link to="/weibo" class="circle">
							<i class="iconfont icon-pengyouquan"></i>
							<span>朋友圈</span>
						</router-link>
					</li>
					<li>
						<router-link to="/weibo" class="qq">
							<i class="iconfont icon-qq"></i>
							<span>QQ</span>
						</router-link>
					</li>
					<li>
						<router-link to="/weibo" class="zone">
							<i class="iconfont icon-qqkongjian"></i>
							<span>QQ空间</span>
						</router-link>
					</li>
				</ul>
			</div>
		</mt-popup>
		<i class="iconfont icon-huidaodingbu back" @click="returnTop"></i>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				title:'',
				flag:false,
				brief:[],
				len:'len',
				scr:0
			}
		},
		mounted(){
			this.title=this.$route.query.title;
	    	$(window).scroll(function(){
	    		this.scr=$(this).scrollTop()
	    		if(this.scr>600){
	    			$('.back').show()
	    		}else{
	    			$('.back').hide()
	    		}
	    	})
	        this.$axios.get("static/data/home.json").then((res)=>{
	          this.brief = res.data.brief[this.$route.query.id].msg;
	        });			
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			returnTop(){
		   		$('html,body').scrollTop(0)
		   }
		}
	}
</script>

<style scoped>
	main{
		position: relative;
		background: #fff;
		z-index: 5;
		min-height: 100vh;
		font-size: 17px;
		padding-bottom: 10px;
	}
	.top{
		display: flex;
		height: 45px;
	    box-sizing: border-box;
	    padding: 13px 20px;
	}
	.top .share{
		flex-grow: 1;
	}
	.top i{
		color: #eb6841;
		font-size: 25px;
	}
	.top i:last-child{
		text-align: right;
		font-size: 20px;
	}
	.top h1{
		margin-left: 20px;
	}
	.wrap{
		border-top: 1px solid #eaeaea;
		padding: 0 15px;
	}

	.len{
		width: 90%; 
	}
	a{
		text-decoration: none;
		color: #666;
	}
	.wrap:nth-of-type(1){
		border-top: 0px;
	}
	li h1{
    	display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	li span{
		margin-right: 10px;
	}
 	.wrap a{
 		display: flex;
		padding: 10px 0px;
		box-sizing: border-box;
	}
	.wrap h1{
		margin-bottom: 40px;
		line-height: 23px;
	} 
	img{
		width: 87px;
	    height: 88px;
	    align-self: center;
	    margin-left: 5px;
	}
	.back{
		color: #333;
	    font-size: 30px;
	    position: fixed;
	    bottom: 70px;
	    right: 25px;
	    display: none;
	}

	.mint-popup{
	    width: 100%;
	    padding: 20px 45px;
	    box-sizing: border-box;
	    text-align: center;
	}
	.mint-popup h1{
		font-size: 20px;
	}
	.popwrap ul{
		display: flex;
		flex-wrap: wrap;
		margin-top: 20px;
	}
	.popwrap ul li{
		width: 25%;
		margin-bottom: 12px;
	}
	.popwrap a{
		color: #666;
		text-decoration: none;
		display: flex;
		flex-direction: column;
		font-size: 15px;
	}
	.popwrap i{
		width: 35px;
	    height: 35px;
	    line-height: 35px;
	    background: #e83138;
	    color: #fff;
	    border-radius: 50%;
	    font-size: 27px;
	    align-self: center;
	    margin-bottom: 5px;
	}
	.popwrap .weixin i{
		background: #2aa146;
	}
	.popwrap .circle i{
		background: #2aa146;
	}
	.popwrap .qq i{
		background: #3b86e0;
	}
	.popwrap .zone i{
		background: #f7b50c;
	}
</style>